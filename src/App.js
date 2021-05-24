import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AuthContext from './context/auth';
import ProtectedRoute from './components/protected-route/protected-route';
import Main from './components/main/main';
import Login from './components/login/login';
import AuthService from './services/auth/auth.service';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const authService = new AuthService(setAuthenticated);

  return (
    <AuthContext.Provider value={authenticated}>
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login authService={authService} />
        </Route>
        <ProtectedRoute path="/main">
          <Main></Main>
        </ProtectedRoute>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
