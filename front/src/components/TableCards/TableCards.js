import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addGame } from '../../redux/actions.js';
import { Dialog } from '../Dialog';
import {
  QuestionCellUI,
  ThemeCellUI,
  TableTableContainerUI,
  TableUI,
} from './styled';

const useStyles = makeStyles({});

export const TableCards = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [inp, setInp] = useState('');
  let { user } = useSelector((state) => state);
  const history = useHistory();
  const [question, setQuestion] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch('/api');
      const json = await response.json();
      setData(json);
      dispatch(addGame(json));
    })();
  }, []);

  function handleClickOpen(question) {
    setOpen(true);
    setQuestion(question);
    // history.push(`/question/${question}`);
  }
  return (
    <>
      <Dialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        question={question}
      />
      <TableTableContainerUI component={Paper}>
        <TableUI>
          <TableBody>
            {data &&
              data.map((obj, i) => (
                <TableRow key={i}>
                  <ThemeCellUI component="th" scope="row">
                    {obj.theme}
                  </ThemeCellUI>
                  {obj.questions.map((el) => {
                    return (
                      <QuestionCellUI
                        key={el.question}
                        onClick={() =>
                          handleClickOpen({ ...el, category: obj.theme })
                        }>
                        {el.price}
                      </QuestionCellUI>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </TableUI>
      </TableTableContainerUI>
    </>
  );
};
