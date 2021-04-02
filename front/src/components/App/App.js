import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableCards from '../TableCards/TableCards';
import { Navigation } from '../Navigation';
import PersonalPage from '../PersonalPage/PersonalPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { PrivateRoute } from '../PrivateRoute';
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';
import Question from '../Question/Question';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <PrivateRoute path="/gameCard" component={TableCards} exact />
          <PrivateRoute path="/personalPage" component={PersonalPage} exact />
          <Route path="/" exact>
            {isAuthenticated && <PersonalPage />}
            {!isAuthenticated && <Login />}
          </Route>
          <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/question/:question" component={Question} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
