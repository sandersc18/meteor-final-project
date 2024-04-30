import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Accoutns} from 'meteor/accounts-base';

export const Logout = () =>{
    let navigate = useNavigate();

    function logoutCallback() {
        navigate("/");
    }

    function onLogout() {

        Accounts.logout(logoutCallback);
        console.log('Accounts.logout');
    }
    return (
        <>
            <button onClick={onLogout}>Logout</button>
        </>
    )
}