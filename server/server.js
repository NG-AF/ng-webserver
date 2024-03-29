/************************************************************************
                    Source Code Form License Notice
            -------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.
*************************************************************************/

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const credentials = require("./credentials.json");
const { time, timeStamp } = require("console");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: `http://${credentials.IP}:${credentials.clientPort}`, //const socket = io.connect("http://192.168.1.100:3001");
		methods: ["GET", "POST"],
		allowedHeaders: ["Access-Control-Allow-Origin"],
		credentials: true,
	},
});

app.get("/", (req, res) => {
	res.sendStatus(200);
});

io.on("connection", (socket) => {
	console.log(`User connected: ${socket.id}`);
});

app.get("/api", (req, res) => {
	res.sendStatus(200);
});

const date = new Date();
const timestamp = date.getTime();

app.post("/api", (req, res) => {
	io.sockets.emit("rSensorData", req.body);
	fs.appendFile("output.txt", JSON.stringify(req.body), (err) => {
		if (err) throw err;
	});
	res.send({
		createdAt: timestamp,
	});
	console.log(req.body);
});

server.listen(3001, () => {
	console.log(`listening on ${credentials.IP}:${credentials.serverPort}`);
});
