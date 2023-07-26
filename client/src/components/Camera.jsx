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
				src="http://10.0.0.3"
				title="deneyapCameraIframe"
			></iframe>
		</div>
	);
}
