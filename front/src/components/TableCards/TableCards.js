import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
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
  },
  cont: {
    marginTop: '20px',
  }
});


function TableCards() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch('/api');
      const json = await response.json();
      setData(json);
      dispatch(addGame(json));
    })();
  }, []);
  // console.log(useSelector(state => state));
  console.log(data);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                      <TableCell onClick={handleClickOpen} key={el.price} align="right" className={classes.cell}>{el.price}</TableCell>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{obj.theme}{' '}{el.price}</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            {el.question}
                          </DialogContentText>
                          {el.variants.map(one => <div>{one}</div>)}
                          {/* <div></div> */}
                          <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Введите ответ"
                            type="text"
                            fullWidth
                          />
                        </DialogContent>
                        <DialogActions>

                          <Button onClick={handleClose} color="primary">
                            Проверить
          </Button>
                        </DialogActions>
                      </Dialog>
                    </>
                  )
                })}

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableCards;
