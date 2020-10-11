import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addGame } from '../../redux/actions.js';
import Question from '../Question/Question';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    background: "linear-gradient(90deg, #3d9aa7 10%, #0ec6ccf5 25%)",
    minWidth: 650,
  },
  cell: {
    border: "2px solid black",
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  cont: {
    marginTop: '20px',
  },
});


function TableCards() {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [inp, setInp] = useState('');
  let { user } = useSelector(state => state);
  const history = useHistory();

  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch('/api');
      const json = await response.json();
      setData(json);
      dispatch(addGame(json));
    })();
  }, []);
  console.log(data);
  const [open, setOpen] = useState(false);

  function handleClickOpen(question) {
    console.log('click');
    history.push(`/question/${question}`);
  };

  // const handleClose = async (el) => {
  //   setOpen(false);
  //   console.log(el.correct === inp);
  //   if (el.correct === inp) {
  //     console.log(user);
  //     const response = await fetch("/api/userScore", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: user.id,
  //         price: el.price
  //       }),
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //     setInp('');
  //   }
  // };
  return (
    <>
      <TableContainer className={classes.cont} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {data && data.map((obj) => (
              <TableRow key={obj._id}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {obj.theme}
                </TableCell>
                {obj.questions.map(el => {
                  return (
                    <>
                      <TableCell key={el.price} onClick={() => handleClickOpen(el.question)} align="right" className={classes.cell}>
                        {el.price}
                      </TableCell>
                    </>
                  )
                })}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Question/> */}
    </>
  );
}

export default TableCards;
