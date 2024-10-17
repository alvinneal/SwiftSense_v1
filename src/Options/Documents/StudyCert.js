import React from "react";

export default function StudyCert(props){

    const aadharsc = () => {
        props.actions.aadharsc()
    }
    const castesc = () => {
        props.actions.castesc()
    }
    const entrancesc = () => {
        props.actions.entrancesc()
    }

    return [
        <div>
            <button className="button-1" onClick={() => aadharsc()}>Aadhar Card</button>
            <button className="button-0" onClick={() => castesc()}>Caste</button>
            <button className="button-1" onClick={() => entrancesc()}>Entrance Exam</button>
        </div>
    ]
}