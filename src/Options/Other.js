import React from "react";

export default function Other(props){

    const about = () => {
        props.actions.about()
    }

    const timing = () => {
        props.actions.timing()
    }

    return [
        <div>
            <button className="button-1" onClick={() => about()}>About Me</button>
            <button className="button-0" onClick={() => timing()}>Timings</button>
        </div>
    ]
}
