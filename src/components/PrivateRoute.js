import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../context/user';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {

   const {currentUser} = React.useContext(AuthContext);
   return (
      <Route
         {...rest}
         render={routeProps =>
            !!currentUser ? (
               <RouteComponent {...routeProps} />
            ) : (
               <Redirect to={'/login'} />
            )
         }
      >
         
      </Route>
   )
}

export default PrivateRoute;

