import React from "react";

export default function Books(props) {

    const kindergartenbooks = () => {
        props.actions.kindergartenbooks()
    }
    const onetotenbooks = () => {
        props.actions.onetotenbooks()
    }
    const iscbooks = () => {
        props.actions.iscbooks()
    }

    return [
        <div>
            <button className="button-1" onClick={() => kindergartenbooks()}>LKG & UKG</button>
            <button className="button-0" onClick={() => onetotenbooks()}>1 - 10</button>
            <button className="button-0" onClick={() => iscbooks()}>ISC</button>
        </div>
    ]
}