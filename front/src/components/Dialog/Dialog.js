import Button from '@material-ui/core/Button';
import { Dialog as DialogUI } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React from 'react';

export const Dialog = ({ open, handleClickOpen, handleClose, question }) => {
  console.log('Dialog ~ question', question);
  return (
    <>
      <DialogUI open={open} onClose={handleClose}>
        <DialogTitle>
          {question.category} на {question.price}
        </DialogTitle>
        <DialogContent>
          <p>{question.question}</p>
          <ul>
            {question.variants?.map((variant) => {
              return <li>{variant}</li>;
            })}
          </ul>
          <TextField
            autoFocus
            margin="dense"
            label="Ваш ответ:"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ОТменить
          </Button>
          <Button onClick={handleClose} color="primary">
            Ответить
          </Button>
        </DialogActions>
      </DialogUI>
    </>
  );
};
