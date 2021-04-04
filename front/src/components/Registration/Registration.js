import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser, deleteUser } from '../../redux/actions';
import Copyright from '../Copyright/Copyright';
import { Link } from 'react-router-dom';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    padding: '0px',
    margin: '0px',
    height: '50px',
    width: '397px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [failed, setFailed] = useState(null);

  async function handleSubmit(event) {
    const { name, email, password } = inputs;
    console.log(inputs);
    event.preventDefault();
    const response = await fetch('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const finalResult = await response.json();
    if (response.status === 200) {
      dispatch(setUser(finalResult));
      dispatch({
        type: 'AUTHENTICATED_SUCCESSFULLY',
      });
      return history.push('/gameCard');
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

  const { name, email, password } = inputs;
  console.log(name, email, password);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.inp}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                id="name"
                label="Имя"
                autoFocus
                onChange={handleChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inp}
                variant="outlined"
                required
                id="email"
                label="Электронная почта"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inp}
                variant="outlined"
                required
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}>
            Зарегистрироваться
          </Button>
          {failed && (
            <Box className={classes.failedBox}>
              <h4 className={classes.failed}>{failed}</h4>
            </Box>
          )}
          <Grid container justify="center">
            <Grid item>
              <Link to="/login" variant="body2">
                Есть аккаунт? Войдите.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Registration;
