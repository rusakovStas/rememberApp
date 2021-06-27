import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";


const UserRoute = ({component: Component, ...rest }) => {
    const user = useSelector(({user}) => user);
    return (
        <Route
            {...rest}
            render={props =>
                user.isAuthentifacated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}

export default UserRoute;
