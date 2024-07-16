import React from "react";

export default function Fee(props){

    const busfee = () => {
        props.actions.busfee()
    }
    const schoolfee = () => {
        props.actions.schoolfee()
    }
    const frenchfee = () => {
        props.actions.frenchfee()
    }
    const ptafee = () => {
        props.actions.ptafee()
    }
    const clubfee = () => {
        props.actions.clubfee()
    }
    return [
        <div>
            <button className="button-0" onClick={() => schoolfee()}>School</button>
            <button className="button-0" onClick={() => busfee()}>Bus</button>
            <button className="button-0" onClick={() => frenchfee()}>French</button>
            <button className="button-0" onClick={() => clubfee()}>Clubs</button>
            <button className="button-0" onClick={() => ptafee()}>PTA</button>
        </div>
    ]
}