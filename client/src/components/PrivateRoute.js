import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userReducer.user);

  if (!user==null) return <Redirect to="/login" />;

  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
};

export default PrivateRoute;
