import React from "react";

type Props = {
	yawAngle: number
}

export default function Compass({ yawAngle }: Props) {
	return (
		<div className="Compass">
			<div className="centering"></div>
			<div
				className="outerRing"
				style={{
					transform: `rotate(${yawAngle}deg)`,
				}}
			>	
				<p id="north">N</p>
				<p id="east">E</p>
				<p id="south">S</p>
				<p id="west">W</p>
			</div>
		</div>
	);
}
