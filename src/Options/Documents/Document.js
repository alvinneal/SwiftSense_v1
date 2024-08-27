import React from "react";

export default function Document(props){

    const tc = () => {
        props.actions.tc()
    }
    const studycert = () => {
        props.actions.studycert()
    }
    const passcert = () => {
        props.actions.passcert()
    }

    return [
        <div>
            <button className="button-1" onClick={() => tc()}>TC</button>
            <button className="button-0" onClick={() => studycert()}>Study Certificate</button>
            <button className="button-1" onClick={() => passcert()}>Pass Certificate</button>
        </div>
    ]
}
