const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

function checkName(name, setErrors) {
    if (name === '') {
        setErrors(errors => {
            return {...errors, ...{ name: "Name is required."}}
        });
        return false;
    } else {
        setErrors(errors => {
            return {...errors, ...{ name: ""}}
        });
        return true
    }
}

function checkSurname(name, setErrors) {
    if (name === '') {
        setErrors(errors => {
            return {...errors, ...{ surname: "Surname is required."}}
        });
        return false;
    } else {
        setErrors(errors => {
            return {...errors, ...{ surname: ""}}
        });
        return true;
    }
}

function checkEmail(email, setErrors, usersData) {
    if (Object.keys(usersData).includes(email)) {
        setErrors(errors => {
            return {...errors, ...{ email: "This email is already taken"}}
        });
        return false;
    }
    if (!emailRegex.test(email)) {
        setErrors(errors => {
            return {...errors, ...{ email: "Please enter a correct email"}}
        });
        return false;
    } else {
        setErrors(errors => {
            return {...errors, ...{ email: ""}}
        });
        return true;
    }
}

function checkPassword(password, setErrors) {
    if (password.length < 6) {
        setErrors(errors => {
            return {...errors, ...{ password: "Weak password"}}
        });
        return false;
    } else if (!/[\d]/.test(password)) {
        setErrors(errors => {
            return {...errors, ...{ password: "Weakish password"}}
        });
        return false;
    } else if (!/[\W]/.test(password)) {
        setErrors(errors => {
            return {...errors, ...{ password: "" }}
        });
        return true;
    }
}

function checkBirthDate(birthday, setErrors) {
    const dateParts = birthday.split('-');
    if (new Date() < new Date(dateParts[0], dateParts[1] - 1, dateParts[2])) {
        setErrors(errors => {
            return {...errors, ...{ birthday: "Birthday cannot be later than today"}}
        });
        return false;
    }
    setErrors(errors => {
        return {...errors, ...{ birthday: ""}}
    });
    return true;
}

function checkTerms(accept, setErrors) {
    if (accept !== "true") {
        setErrors(errors => {
            return {...errors, ...{ accept: "Accept the terms"}}
        });
        return false;
    }
    setErrors(errors => {
        return {...errors, ...{ accept: ""}}
    });
    return true;
}

module.exports = {
    checkName,
    checkSurname,
    checkEmail,
    checkPassword,
    checkBirthDate,
    checkTerms
}
