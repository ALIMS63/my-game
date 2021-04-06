import React, { useState } from 'react';
import {
  Avatar,
  CssBaseline,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser, deleteUser } from '../../redux/actions';
import Copyright from '../Copyright/Copyright';
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  failedBox: {
    marginTop: '0px',
    marginBottom: '20px',
    width: '397px',
    height: '20px',
  },
  failed: {
    color: 'red',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  inp: {
    backgroundColor: 'white',
    borderRadius: '5px',
    opacity: '0.8',
  },
}));

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [failed, setFailed] = useState(null);

  async function handleSubmit(event) {
    const { email, password } = inputs;
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const finalResult = await response.json();
    if (response.status === 200) {
      console.log(finalResult);
      dispatch(setUser(finalResult));
      dispatch({
        type: 'AUTHENTICATED_SUCCESSFULLY',
      });
      return history.push('/personalPage');
    } else {
      setFailed(finalResult.message);
    }
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const { email, password } = inputs;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Электронная почта"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <TextField
            variant="outlined"
            required
            name="password"
            label="Пароль"
            type="password"
            onChange={handleChange}
            value={password}
          />
          <Button type="submit" children="Войти" />
          {failed && (
            <Box className={classes.failedBox}>
              <h4 className={classes.failed}>{failed}</h4>
            </Box>
          )}
          <Grid container justify="center">
            <Grid item>
              <Link to="/registration" variant="body2">
                {'Нет аккаунта? Зарегистрируйтесь.'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
