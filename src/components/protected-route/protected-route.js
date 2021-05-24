import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth';

const ProtectedRoute = ({ children, rest }) => {
  const isAuthenticated = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
