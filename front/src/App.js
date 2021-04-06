import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import Logout from './components/Logout/Logout';
import { Navigation } from './pages/Navigation';
import { PrivateRoute } from './components/PrivateRoute';
import Question from './components/Question/Question';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { PersonalPage } from './pages/PersonalPage';
import { GamePage } from './pages/GamePage';

export const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <PrivateRoute path="/gameCard" component={GamePage} exact />
          <PrivateRoute path="/personalPage" component={PersonalPage} exact />
          <Route path="/" exact>
            {isAuthenticated && <PersonalPage />}
            {!isAuthenticated && <Login />}
          </Route>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/question/:question" component={Question} exact />
        </Switch>
      </Router>
    </>
  );
};
