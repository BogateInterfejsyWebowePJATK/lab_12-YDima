import React, { useState } from "react";
import { useInput } from "../hooks";
import check from "../check";

import Input from "./Input";


export default function RegisterForm({ usersData }) {
    const [errors, setErrors] = useState({
        name: "", surname: "", email: "", password: "", birthday: "", file: "", accept: ""
    });
    const [isFormCorrect, setIsFormCorrect] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [name, resetName] = useInput("");
    const [surname, resetSurname] = useInput("");
    const [email, resetEmail] = useInput("");
    const [password, resetPassword] = useInput("");
    const [birthday, resetDate] = useInput("");
    const [file, resetFile] = useInput("");
    const [accept, resetAccept] = useInput("");
    const onChange = e => {
        const nameValid = check.checkName(name.value, setErrors);
        const surnameValid = check.checkSurname(surname.value, setErrors);
        const emailValid = check.checkEmail(email.value, setErrors, usersData);
        const passwordValid = check.checkPassword(password.value, setErrors);
        const birthDateValid = check.checkBirthDate(birthday.value, setErrors);
        const termsValid = check.checkTerms(accept.value, setErrors);
        if (nameValid && surnameValid && emailValid && passwordValid && birthDateValid && termsValid) {
            setIsFormCorrect(true);
        }
    }
    const onReset = e => {
        resetName();
        resetSurname();
        resetEmail();
        resetPassword();
        resetDate();
        resetFile();
        resetAccept();
    }
    const onSubmit = e => {
        e.preventDefault();
        setShowSuccess(true);
        onReset(null);

        const newUser = {
            name: name.value,
            surname: surname.value,
            password: password.value,
            birthday: birthday.value,
        }

        usersData[email.value] = newUser;

    };

    return (
        <>
        <h3>Sign up</h3>
        <form onSubmit={onSubmit} onChange={onChange}>
            {showSuccess ? <div className="alert alert-success">New account has been created!</div> : <></>}

            <div className="form-group">
                <Input fieldState={name} type="text" placeholder="Enter your name" className="form-control" required/>
                <small>{errors.name}</small>
            </div>

            <div className="form-group">
                <Input fieldState={surname} type="text" placeholder="Enter your surname" className="form-control" required/>
                <small>{errors.surname}</small>
            </div>

            <div className="form-group">
                <Input fieldState={email} type="text" placeholder="Enter your e-mail address" className="form-control" required/>
                <small>{errors.email}</small>
            </div>

            <div className="form-group">
                <Input fieldState={password} type="password" placeholder="Enter your password" className="form-control" required/>
                <small>{errors.password}</small>
            </div>

            <div className="form-group">
                <Input fieldState={birthday} type="date" placeholder="" className="form-control" required/>
                <small>{errors.birthday}</small>
            </div>

            <div className="form-group">
                <Input fieldState={file} type="file" placeholder="" required/>
                <small>{errors.file}</small>
            </div>

            <div className="form-group">
                <label><input {...accept} type="checkbox" value="true" required/>&nbsp;Accept the terms of service</label>
                <small>{errors.accept}</small>
            </div>

            <div className="form-group">
                <button className="btn btn-primary" hidden={!isFormCorrect}>Sign up</button>
            </div>
            <div className="form-group">
                <input onClick={onReset} className="btn" type="reset" value="Reset"/>
            </div>
        </form>
        </>

    );
}