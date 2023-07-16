const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

app.get("/", (req, res) => {
	res.sendStatus(200);
});

io.on("connection", (socket) => {
	console.log(`User connected: ${socket.id}`);

	socket.on("msg", (data) => {
		socket.emit("rmsg", data);
	});

});

app.post("/api", (req, res) => {
	io.sockets.emit("rSensorData", req.body);
	res.sendStatus(201);
});

server.listen(3001, () => {
	console.log("listening on localhost:3001");
});
