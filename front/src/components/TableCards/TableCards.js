import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addGame } from '../../redux/actions.js';

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
  }
});


function TableCards() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/api');
      const json = await response.json();
      setData(json);
      dispatch(addGame(json));
    })();
  }, []);
  // console.log(useSelector(state => state));
  console.log(data);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {data && data.map((obj) => (
              <TableRow key={obj._id}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {obj.theme}
                </TableCell>
                {obj.questions.map(el => <TableCell key={el.price} align="right" className={classes.cell}>{el.question}</TableCell>)}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableCards;
