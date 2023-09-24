import { log } from "console";
import React, { useEffect, useState } from "react";
import AmpMeter from "./AmpMeter";

export default function GamepadInput() {
    //const [gamepad,setGamepad] = useState<any>([{axes: [0,0,0]}]);
    /*const connectController = () => {
        let pad = navigator.getGamepads().filter(obj => {
            return obj?.id === "Flysky FS-i6XCN (Vendor: 284e Product: 79a1)"
        });
        setGamepad(pad);
        console.log(pad);
        
    }

    useEffect(() => {
        let pad = navigator.getGamepads().filter(obj => {
            return obj?.id === "Flysky FS-i6XCN (Vendor: 284e Product: 79a1)"
        });
        setGamepad(pad);
    },[gamepad[0].axes[2]])*/
    const [throttle, setThrottle] = useState<number>(0);
    const [rudder, setRudder] = useState<number>(0);
    const [aileron, setAileron] = useState<number>(0);
    const [elevator, setElevator] = useState<number>(0);

    setInterval(() => {
        let gamepad = navigator.getGamepads().filter(obj => {
            return obj?.id === "Flysky FS-i6XCN (Vendor: 284e Product: 79a1)"
        });
        setThrottle(gamepad[0]?.axes[2] ? gamepad[0]?.axes[2] : 0);
        setRudder(gamepad[0]?.axes[3] ? gamepad[0]?.axes[3] : 0);
        setAileron(gamepad[0]?.axes[0] ? gamepad[0]?.axes[0] : 0);
        setElevator(gamepad[0]?.axes[1] ? gamepad[0]?.axes[1] : 0);
        console.log(`Left stick at (${gamepad[0]?.axes[0]}, ${gamepad[0]?.axes[1]})` );
        console.log(`Right stick at (${gamepad[0]?.axes[2]}, ${gamepad[0]?.axes[3]})` );
    }, 100) // print axes 10 times per second
    

    return (<div className="GamepadInput">
        <button>Connect</button>
        <AmpMeter amp={throttle}/>
        <br />
        <br />
        <AmpMeter amp={-rudder}/>
        <br />
        <br />
        <AmpMeter amp={aileron}/>
        <br />
        <br />
        <AmpMeter amp={-elevator}/>
    </div>)
}