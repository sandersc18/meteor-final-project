import React from 'react';

import {Navigate} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export const PublicRoute = ({children}) => {
    
    if (!!Accounts.userId()) {
        return <Navigate to="/App" replace />;
    }

    return children;
};

export const Privateroute = ({children}) => {
    
    if (!Accounts.userId()) { // if they do not have a userID (null becomes true)
      return <Navigate to="/" replace />;   // send them to root/login
    }
    return children;
};