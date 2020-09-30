import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Navigation() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {!isAuthenticated && <Link to="/login"><Tab label="Login" /></Link>}
        {!isAuthenticated && <Link to="/registration"><Tab label="Registration" /></Link>}
        {isAuthenticated && <Link to="/logout"><Tab label="Logout" /></Link>}
        {isAuthenticated && <Link to="/personalPage"><Tab label="PersonalPage" /></Link>}
        {isAuthenticated && <Link to="/gameCard"><Tab label="Game Card" /></Link>}

        {!isAuthenticated && <Link to="/"><Tab label="Active" /></Link>}

      </Tabs>
    </Paper>
  );
}

export default Navigation;
