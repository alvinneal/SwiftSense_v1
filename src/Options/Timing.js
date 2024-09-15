import React from "react";

export default function Timing(props){

    const officetiming = () => {
        props.actions.officetiming()
    }
    const schooltiming = () => {
        props.actions.schooltiming()
    }

    return [
        <div>
            <button className="button-1" onClick={() => officetiming()}>Office</button>
            <button className="button-0" onClick={() => schooltiming()}>School</button>
        </div>
    ]
}
