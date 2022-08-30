import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 30px;
  background-color: lightsteelblue;
  border-radius: 15px;
`;

export const PhonebookFormLabel = styled.label`
  display: flex;
  margin-bottom: 10px;
  font-weight: 600;
  align-items: baseline;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const PhonebookInput = styled(Field)`
  margin-top: 10px;
  width: 300px;
  border: 1px solid lightsteelblue;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: azure;
  width: 100px;
  border: 1px solid azure;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  :hover,
  :focus,
  :active {
    background-color: limegreen;
    color: aliceblue;
    cursor: pointer;
    border: 1px solid limegreen;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div``;
