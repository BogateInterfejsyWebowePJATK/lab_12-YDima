import React from "react";

export default function FormResults({ values }) {
    return (
        <table>
            <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Value</b></td>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(values).map(
                        (key, i) => {
                            return <tr key={i}>
                                <td>{key}</td>
                                <td>{values[key]}</td>
                            </tr>
                        }
                    )
                }
            </tbody>
        </table>
    );
}