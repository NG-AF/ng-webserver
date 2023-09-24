import React from "react";

type Props = {
	rollAngle: number
}

export default function Camera({ rollAngle }: Props) {
	return (
		<div className="Camera">
			<div className="levelIndicator">
				<div className="angleIndicator">{rollAngle}°</div>
				<div
					className="levelLine"
					style={{
						transform: `rotate(${-rollAngle}deg)`,
					}}
				></div>
			</div>
			<iframe
				className="cameraIframe"
				src="http://192.168.95.202"
				title="deneyapCameraIframe"
			></iframe>
		</div>
	);
}
