import React from "react";

export default function AddNumber({ numberRef, onSubmit = func => func}) {
    return (
        <form onSubmit={onSubmit}>
            <input ref={numberRef} type="number" placeholder="Enter a number" required/>
            <button>Add number</button>
        </form>
    )
}