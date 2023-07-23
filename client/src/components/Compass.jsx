export default function Compass({ yawAngle }) {
	return (
		<div className="Compass">
			<div
				className="outerRing"
				style={{
					transform: `rotate(-${yawAngle}deg)`,
				}}
			>	
			<div className="centering" style={{
					transform: `rotate(${yawAngle}deg)`,
				}}></div>
				<p id="north">N</p>
				<p id="east">E</p>
				<p id="south">S</p>
				<p id="west">W</p>
			</div>
		</div>
	);
}
