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

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>

          <Route path="/gameCard" exact>
            <TableCards />
          </Route>

          <PersonalRoute path="/personalPage" exact>
            <PersonalPage />
          </PersonalRoute>

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
