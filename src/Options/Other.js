import React from "react";

export default function Other(props){

    const about = () => {
        props.actions.about()
    }

    return [
        <div>
            <button className="button-0" onClick={() => about()}>About Me</button>
        </div>
    ]
}