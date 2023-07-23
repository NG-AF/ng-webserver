export default function Camera({ rollAngle }) {
	return (
		<div className="Camera">
			<div className="levelIndicator">
				<div className="angleIndicator">{rollAngle}°</div>
				<div
					className="levelLine"
					style={{
						transform: `rotate(${rollAngle}deg)`,
					}}
				></div>
			</div>
			<iframe
				className="cameraIframe"
				src="http://192.168.1.21"
				title="deneyapCameraIframe"
			></iframe>
		</div>
	);
}
