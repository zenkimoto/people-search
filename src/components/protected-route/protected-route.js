import { Route, Redirect } from 'react-router-dom';
import authService from '../../services/auth/auth.service';

const ProtectedRoute = ({ children, rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return authService.isAuthenticated ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
