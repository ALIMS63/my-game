import styled from 'styled-components';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
export const TableTableContainerUI = styled(TableContainer)`
  /* margin-top: 20px; */
`;
export const TableUI = styled(Table)`
  /* background: linear-gradient(90deg, #3d9aa7 10%, #0ec6ccf5 25%); */
  min-width: 650;
`;
export const ThemeCellUI = styled(TableCell)`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background: linear-gradient(0deg, #1ec2f8 100%, #0ec6ccf5 100%);
  /* filter: brightness(75%); */
  &.MuiTableCell-root {
    text-align: center;
  }
`;
export const QuestionCellUI = styled(TableCell)`
  cursor: pointer;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background: linear-gradient(0deg, #3d9aa7, #0ec6ccf5);
  &.MuiTableCell-root {
    text-align: center;
  }
  :active {
    box-shadow: inset 0 0 6px;
  }
`;
