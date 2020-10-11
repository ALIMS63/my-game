import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function Question() {
  const history = useHistory();
  const [inp, setInp] = useState('');
  const [open, setOpen] = useState(false);
  let { user, game } = useSelector(state => state);
  const { question } = useParams();
  let object;
  for (let one of game.game) {
    for (let two of one) {
      let isIt = two.questions.find(obj => obj.question === (question + '?'))
      if (isIt) object = isIt;
    }
  }

  const handleClose = async (el) => {
    console.log(object.correct === inp);
    if (object.correct === inp) {
      console.log(user);
      const response = await fetch("/api/userScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          price: object.price
        }),
      });
      const json = await response.json();
      console.log(json);
    } else {
      const response = await fetch("/api/userScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          price: -object.price,
        }),
      });
      const json = await response.json();
      console.log(json);
    }
    setInp('');
    history.push('/gameCard');
  };

  return (
    <div>
      <div>{object.price}</div>
      <div>
        <div>
          {object.question}
        </div>
        {object.variants.map(one => <div>{one}</div>)}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Введите ответ"
          type="text"
          fullWidth
          onChange={(event) => setInp(event.target.value)}
          value={inp}
        />
      </div>

      <div>
        <Button onClick={handleClose} color="primary">
          Проверить
        </Button>
      </div>
    </div>
  )
}

export default Question;
