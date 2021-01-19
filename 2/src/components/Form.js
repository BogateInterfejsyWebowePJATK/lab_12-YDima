import React, { useState } from "react";
import { useInput } from "../hooks";

import FormResults from "./FormResults"

export default function Form() {
    const [showTable, setShowTable] = useState(false);

    const [firstInput, resetFirstInput] = useInput("");
    const [secondInput, resetSecondInput] = useInput("");
    const [radio, resetRadio] = useInput();
    const [select, resetSelect] = useInput();
    const [checkbox, resetCheckbox] = useInput("");

    const resetForm = () => {
        resetFirstInput()
        resetSecondInput()
        resetRadio()
        resetSelect()
        resetCheckbox()
        setShowTable(false)
    };

    const onSubmit = e => {
        e.preventDefault();
        setShowTable(true)

        console.log(firstInput)
        console.log(secondInput)
        console.log(radio)
        console.log(select)
        console.log(checkbox)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input {...firstInput} className="form-control" type="text" placeholder="Enter first text" />
                    <input {...secondInput} className="form-control" type="text" placeholder="Enter second text" />
                </div>
                <div className="form-group">
                    <label><input {...radio} id="radio" type="radio" value="Checked" />&nbsp;Check</label>
                </div>
                <div className="form-group">
                    <select {...select} className="form-control">
                        <option value="NHL" aria-checked={"true"}>NHL</option>
                        <option value="NBA">NBA</option>
                        <option value="NFL">NFL</option>
                    </select>
                </div>
                <div className="form-group">
                    <label><input {...checkbox} type="checkbox" value="Checked" />&nbsp;Check</label>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn" value="Submit" />
                </div>
                <div className="form-group">
                    <input type="reset" className="btn" onClick={resetForm} value="Reset this form" />
                </div>
                
            </form>
            { showTable ? <FormResults values={
                { "First Input": firstInput.value,
                    "Second Input": secondInput.value,
                    "Radio": radio.value,
                    "Selected": select.value,
                    "Checkbox": checkbox.value
                } }/> : <></>
            }
        </>
    );
}