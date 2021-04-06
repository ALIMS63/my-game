import styled from 'styled-components';

export const LeftSide = styled.div``;
export const RightSide = styled.div``;
export const Container = styled.div`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Header = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #333;
  & > a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;
export const A = styled.a`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  :hover {
    background-color: #ddd;
    color: black;
  }
  :active {
    background-color: #4caf50;
    color: white;
  }
`;
