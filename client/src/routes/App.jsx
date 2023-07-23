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

import { useEffect, useState } from "react";
import io from "socket.io-client";
import "../styles/App.css";
import "../components/Camera";
import Camera from "../components/Camera";

const socket = io.connect("http://192.168.1.12:3001");

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default function App() {
	//TODO: Remove this
	//const [message, setMessage] = useState("");

	const [gyro, setGyro] = useState({});
	const [accel, setAccel] = useState({});
	const [bmp, setBmp] = useState({});
	const [angle, setAngle] = useState({});

	//TODO: Remove this
	/*const sendMessage = () => {
		socket.emit("msg", {msg: message})
	} */

	useEffect(() => {
		socket.on("rSensorData", (data) => {
			setGyro(data.gyro);
			setAccel(data.accel);
			setAngle(data.angle);
			//TODO: Remove comment after bmp is implemented
			//setBmp(data.bmp);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	return (
		<div className="App">

		<Camera rollAngle={angle.roll}/>

			{/*//TODO: Calibrate altitude indicators */}

		</div>
	);
}
