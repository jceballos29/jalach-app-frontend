import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, ...props }) => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn ? (
        <Route {...props}>{children}</Route>
    ) : (
        <Redirect to="/login" />
    );
};
