import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
      <Route path="/main">
        <Main></Main>
      </Route>
    </Router>
  );
}

export default App;
