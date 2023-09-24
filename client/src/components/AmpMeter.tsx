import React from "react";

type AmpMeterProps = {
	amp: number;
};

const scale = (number: number, [inMin, inMax]:Array<number>, [outMin, outMax]:Array<number>) => {
	// if you need an integer value use Math.floor or Math.ceil here
	return ((number - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};

export default function AmpMeter({ amp }: AmpMeterProps) {
	return (
		<div className="AmpMeter">
			<p id="zero">0 A</p>
			<p id="max">10 A</p>
			<div
				className="gaugeFiller"
				style={{
					width: `${scale(amp, [-0.7007874250411987 , 0.7086614370346069 ], [0, 250])}px`,
				}}
			></div>
			<p id="currentAmp">{scale(amp, [-0.7007874250411987 , 0.7086614370346069 ], [0, 100]).toString().slice(0,5)} %</p>
		</div>
	);
}
