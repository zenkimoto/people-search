import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/protected-route/protected-route';
import Main from './components/main/main';
import Login from './components/login/login';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="/main">
        <Main></Main>
      </ProtectedRoute>
    </Router>
  );
}

export default App;
