import React from "react";

type Props = {
	velocity: number,
	altitude: number,
	pitchAngle: number,
	rollAngle: number,
	yawAngle: number
}

export default function TextInfo({
	velocity = 0,
	altitude = 0,
	pitchAngle = 0,
	rollAngle = 0,
	yawAngle = 0,
}: Props) {
	return (
		<div className="TextInfo">
			<p className="velocity">
				<span className="varName">Velocity:</span> {velocity} m/s
			</p>
			<p className="altitude">
				<span className="varName">Altitude:</span> {altitude} m
			</p>
			<p className="pitchAngle">
				<span className="varName">Pitch Angle:</span> {pitchAngle} °
			</p>
			<p className="rollAngle">
				<span className="varName">Roll Angle:</span> {rollAngle} °
			</p>
			<p className="yawAngle">
				<span className="varName">Yaw Angle:</span> {yawAngle} °
			</p>
		</div>
	);
}
