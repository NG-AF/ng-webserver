export default function Camera({rollAngle}) {
	return (
		<div className="camera">
				<div className="levelIndicator">
					<div className="angleIndicator">{rollAngle}°</div>
						<div className="levelLine" style={{
							transform: `rotate(${rollAngle}deg)`,
						}}></div>
				</div>
				<iframe
					className="cameraIframe"
					src="http://192.168.1.21"
					height="540"
					width="680"
					title="Iframe Example"
				></iframe>
			</div>
	);
}