const scale = (number, [inMin, inMax], [outMin, outMax]) => {
	// if you need an integer value use Math.floor or Math.ceil here
	return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

export default function AmpMeter({amp}) {
	return (
		<div className="AmpMeter">
			<h3>Current Amp</h3>
			<p id="zero">0 A</p>
			<p id="max">10 A</p>
			<div className="gaugeFiller" style={{
					width: `${scale(amp, [0, 2], [0,250])}px`,
				}}></div>
			<p id="currentAmp">{amp} A</p>
		</div>
	)
}