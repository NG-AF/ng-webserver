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
import "./App.css";

const socket = io.connect("http://192.168.1.12:3001");

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default function App() {
	//TODO: Remove this
	//const [message, setMessage] = useState("");

	const [gyro, setGyro] = useState({});
	const [accel, setAccel] = useState({});

	//TODO: Remove this 
	/*const sendMessage = () => {
		socket.emit("msg", {msg: message})
	} */

	useEffect(() => {
		socket.on("rSensorData", (data) => {
			setGyro(data.gyro);
			setAccel(data.accel);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	return (
		<div className="App">
			{/*// TODO: Remove this 
			<input placeholder="Message..." onChange={(e) => {
				setMessage(e.target.value);
			}}/>
			<button onClick={sendMessage}>Send</button>*/}

			<div className="left">
				<h2>Gyro</h2>
				<div className="gyroDataVisualization">
					<div className="gyroXZ">
						<p className="x">X</p>
						<p className="z">Z</p>
						<div
							className="centerDot cdGyroXZ"
							style={{
								transform: `translateX(${
									scale(gyro.z, -286, 286, -125, 125) * -1
								}px) translateY(${scale(gyro.x, -286, 286, -125, 125) * -1}px)`,
							}}
						></div>
					</div>
					<div
						className="gyroY"
						style={{
							transform: `rotate(${scale(gyro.y, -286, 286, -90, 90)}deg)`,
						}}
					>
						<div className="centerDot cdGyroY"></div>
					</div>
				</div>
				<ul>
					<li>X: {gyro.x}</li>
					<li>Y: {gyro.y}</li>
					<li>Z: {gyro.z}</li>
				</ul>
			</div>
			<div className="right">
				<h2>Acceleration</h2>
				<div className="accelDataVisualization">
					<div className="accelXZ">
						<p className="x">X</p>
						<p className="z">Z</p>
						<div
							className="centerDot cdAccelXZ"
							style={{
								transform: `translateX(${scale(
									accel.x,
									-2,
									2,
									-148,
									148
								)}px) translateY(${scale(accel.z, -2, 2, -148, 148)}px)`,
							}}
						></div>
					</div>
					<div className="accelY">
						<div
							className="centerDot cdAccelY"
							style={{
								transform: `translateY(${
									scale(accel.y, -2, 2, -148, 148) * -1
								}px)`,
							}}
						></div>
					</div>
				</div>

				<ul>
					<li>X: {accel.x}</li>
					<li>Y: {accel.y}</li>
					<li>Z: {accel.z}</li>
				</ul>
			</div>
		</div>
	);
}
