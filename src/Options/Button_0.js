import React from "react";

export default function Button_0(props) {

    const admission = () => {
        props.actions.admission()
    }
    const fee = () => {
        props.actions.fee()
    }
    const uniform = () => {
        props.actions.uniform()
    }
    const books = () => {
        props.actions.books()
    }
    const pupilpodandid = () => {
        props.actions.pupilpodandid()
    }
    const document = () => {
        props.actions.document()
    }
    const other = () => {
        props.actions.other()
    }

    return [
        <div>
            <button className="button-0" onClick={() => admission()}>Admission</button>
            <button className="button-0" onClick={() => fee()}>Fee</button>
            <button className="button-0" onClick={() => uniform()}>Uniform</button>
            <button className="button-0" onClick={() => books()}>Books</button>
            <button className="button-0" onClick={() => pupilpodandid()}>Pupilpod/ID</button>
            <button className="button-0" onClick={() => document()}>Document</button>
            <button className="button-0" onClick={() => other()}>Other</button>
        </div>
    ]
}