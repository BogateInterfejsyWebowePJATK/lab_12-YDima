import React, { useState } from "react";
import { useInput } from "../hooks"

import UserTable from "./UserTable";

export default function LoginForm ({ usersData }) {

    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const [errors, setErrors] = useState({ email: "", password: "" });
    const [showSuccess, setShowSuccess] = useState(false);
    const [emailBug, setEmail] = useState("")
    const [email, resetInput] = useInput("");
    const [password, resetPassword] = useInput("");

    const onSubmit = e => {
        e.preventDefault()
        const isEmailCorrect = emailRegex.test(email.value);

        if(isEmailCorrect) {

            const isEmailCorrect = Object.keys(usersData).includes(email.value);

            if (isEmailCorrect) {
                if (usersData[email.value].password !== password.value) {
                    setErrors({ password: "Password is not correct." });
                } else {
                    setShowSuccess(true);
                    setErrors({ email: "", password: "" })
                    resetInput()
                    resetPassword()
                    setEmail(email.value);
                }

            } else {
                setErrors({ email: "Account with this email does not exist." });
            }

        } else {
            setErrors({ email: "Write correct email." });
        }
    };

    return (
        <>
            <h3>Sign in</h3>
            <form onSubmit={onSubmit}>
                { showSuccess ? <div className="alert alert-success">Sign in successful!</div> : <></>}

                <div className="form-group">
                    <input {...email} className="form-control" type="text" placeholder="Enter email" />
                    <small>{errors.email}</small>
                </div>
                <div className="form-group">
                    <input  {...password} className="form-control" type="password" placeholder="Enter password" />
                    <small>{errors.password}</small>
                </div>

                <div className="form-group">
                    <button className="btn">Sign in</button>
                </div>


            </form>
            { showSuccess ? <UserTable email={emailBug} userInfo={usersData[emailBug]} /> : <></>}
        </>
    );
}

