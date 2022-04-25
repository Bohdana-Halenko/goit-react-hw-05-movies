import { Form, Btn, Input, Wrap } from './SearchForm.styled';
import PropTypes from 'prop-types';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SearchForm({ handleSetQuery, handleSubmit, value }){
  

  const notify = () => {
    if(!value.trim()){
      toast("Empty request!")
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Movie name"
          onChange={handleSetQuery}
          value={value}
        />
        <Btn type="submit" onClick={notify} >Search</Btn>
		    <ToastContainer />
      </Form>
    </Wrap>
  );
}
SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
