import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";


const GuestRouter = ({ component: Component, ...rest }) => {
    const user = useSelector(({user}) => user);
    return (
        <Route
            {...rest}
            render={props =>
                !user.isAuthentifacated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/remember" />
                )
            }
        />
    )
}

export default GuestRouter;
