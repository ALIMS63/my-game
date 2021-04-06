import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginPage } from '../LoginPage';

import { Container, Header, A, LeftSide, RightSide } from './styled';

export const Navigation = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Container>
      <Header>
        <LeftSide>
          <A className="active" href="/personalPage">
          Статистика
          </A>
          <A href="/gameCard">Игра</A>

          <A href="#news">News</A>
          <A href="#contact">Contact</A>
          <A href="#about">About</A>
        </LeftSide>
        <RightSide>
          {isAuthenticated ? (
            <A href="/logout">Выход</A>
          ) : (
            <A href="/login">Вход</A>
          )}
        </RightSide>
      </Header>
    </Container>
  );
  return (
    <Paper square>
      <Tabs indicatorColor="primary" textColor="primary">
        {!isAuthenticated && (
          <>
            <Link to="/login">
              <Tab label="Login" />
            </Link>
            <Link to="/registration">
              <Tab label="Registration" />
            </Link>
          </>
        )}
        {/* {!isAuthenticated && (
          <Link to="/registration">
            <Tab label="Registration" />
          </Link>
        )} */}
        {/* {isAuthenticated && (
          <Link to="/logout">
            <Tab label="Logout" />
          </Link>
        )} */}
        {isAuthenticated && (
          <>
            <Link to="/logout">
              <Tab label="Logout" />
            </Link>
            <Link to="/personalPage">
              <Tab label="Personal Page" />
            </Link>
            <Link to="/gameCard">
              <Tab label="Game" />
            </Link>
          </>
        )}
        {/* {isAuthenticated && (
          <Link to="/gameCard">
            <Tab label="Game" />
          </Link>
        )} */}
      </Tabs>
    </Paper>
  );
};
