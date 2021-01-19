import './App.css';
import { useState, useRef } from "react";

import AddNumber from "./components/AddNumber";

function App() {
    const [sum, setSum] = useState({ value: 0, amount: 0});
    const number = useRef();

    const addNumber = e => {
        e.preventDefault();
        setSum({ value: sum.value + parseFloat(number.current.value), amount: ++sum.amount});
    }

    return (
        <>
            <p>Sum: {sum.value}</p>
            <p>Arithmetic mean: {(sum.value/sum.amount).toFixed(2)}</p>
            <AddNumber numberRef={number} onSubmit={addNumber} />
        </>
    )
}

export default App;
