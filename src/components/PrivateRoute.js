import { useContext } from "react";
import UserContext from "../context/User/UserContext";

import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
    const { auth } = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={(props) => auth
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        />
    )
}