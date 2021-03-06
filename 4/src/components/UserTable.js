import React from "react";

export default function UserTable({ email, userInfo }) {
    return (
        <table>
            <thead style={{}}>
                <tr>
                    <td><b>E-mail</b></td>
                    <td><b>Name</b></td>
                    <td><b>Surname</b></td>
                    <td><b>Birthday</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{email}</td>
                    <td>{userInfo['name']}</td>
                    <td>{userInfo['surname']}</td>
                    <td>{userInfo['birthday']}</td>
                </tr>
            </tbody>
        </table>
    );
}