import React from "react";

type Props = {
	pitch: number,
	roll: number,
	yaw: number
}

export default function OrientationCube({ pitch = 0, roll = 0, yaw = 0 }: Props) {
	return (
		<div
			className="OrientationCube"
			style={{
				transform: `rotateX(${-pitch}deg) rotateY(${-yaw}deg) rotateZ(${roll}deg)`,
			}}
		>
			<div className="front"></div>
			<div className="back"></div>
			<div className="left"></div>
			<div className="right"></div>
			<div className="top"></div>
			<div className="bottom"></div>
		</div>
	);
}
