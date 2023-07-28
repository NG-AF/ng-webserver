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
import Compass from "../components/Compass";
import TextInfo from "../components/TextInfo";
import AmpMeter from "../components/AmpMeter";
import OrientationCube from "../components/OrientationCube";

const credentials = require("../credentials.json");

const socket = io(`http://${credentials.IP}:${credentials.serverPort}`, {
	withCredentials: true,
	extraHeaders: {
		"Access-Control-Allow-Origin": `http://${credentials.IP}:${credentials.clientPort}`,
	},
});

export default function App() {
	const [angle, setAngle] = useState({});
	const [velocity, setVelocity] = useState(0);
	const [altitude, setAltitude] = useState(0);
	const [amp, setAmp] = useState(0);

	useEffect(() => {
		socket.on("rSensorData", (data) => {
			setAngle(data.angle);
			setVelocity(data.velocity);
			setAltitude(data.altitude);
			setAmp(data.amp);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	return (
		<div className="App">
			<div className="topLeft">
				<Compass yawAngle={angle.pitch} />
				<TextInfo
					velocity={velocity}
					altitude={altitude}
					pitchAngle={angle.pitch}
					rollAngle={angle.roll}
					yawAngle={angle.yaw}
				/>
			</div>

			<Camera rollAngle={angle.roll} />

			<AmpMeter amp={amp} />

			<OrientationCube pitch={angle.pitch} roll={angle.roll} yaw={angle.yaw} />
		</div>
	);
}
