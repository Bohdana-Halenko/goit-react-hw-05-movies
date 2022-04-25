import { Form, Btn, Input, Wrap } from './SearchForm.styled';
import PropTypes from 'prop-types';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function SearchForm({ handleOnSubmit }) {
  const [movieName, setMovieName] = useState('');

  const onNameChange = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const onSubmit = e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      toast('Empty request!');
      return;
    }

    handleOnSubmit(movieName);

    setMovieName('');
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Movie name"
          type="text"
          autoComplete="off"
          name="movieName"
          onChange={onNameChange}
          value={movieName}
        />

        <Btn type="submit">Search</Btn>

        <ToastContainer />
      </Form>
    </Wrap>
  );
}
SearchForm.propTypes = {
  handleOnSubmit: PropTypes.func,
};