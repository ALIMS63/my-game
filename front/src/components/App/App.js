import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableCards from '../TableCards/TableCards';
import Navigation from '../Navigation/Navigation';
import PersonalPage from '../PersonalPage/PersonalPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import PersonalRoute from '../PersonalRoute/PersonalRoute';
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <>
      <Router>
        <Navigation />

        <Switch>

          <PersonalRoute path="/gameCard" exact>
            <TableCards />
          </PersonalRoute>

          <PersonalRoute path="/personalPage" exact>
            <PersonalPage />
          </PersonalRoute>

          <Route path="/" exact>
            {isAuthenticated && <PersonalPage />}
            {!isAuthenticated && <Login />}
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/registration" exact>
            <Registration />
          </Route>

          <Route path="/logout" exact>
            <Logout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
