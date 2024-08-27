import React from "react";

export default function Uniform(props){

    const stitched = () => {
        props.actions.stitched()
    }
    const readymade = () => {
        props.actions.readymade()
    }
    const housecolour = () => {
        props.actions.housecolour()
    }
    const shoes = () => {
        props.actions.shoes()
    }

    return [
        <div>
            <button className="button-1" onClick={() => stitched()}>Stitched</button>
            <button className="button-0" onClick={() => readymade()}>Ready-Made</button>
            <button className="button-1" onClick={() => housecolour()}>House Colour</button>
            <button className="button-0" onClick={() => shoes()}>Shoes</button>
        </div>
    ]
}
