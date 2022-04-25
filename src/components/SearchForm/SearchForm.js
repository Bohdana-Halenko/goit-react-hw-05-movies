import { Form, Btn, Input, Wrap } from './SearchForm.styled';
// import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchForm({ handleSetQuery, handleSubmit, value }){

  // const [searchParams, setSearchParams] = useSearchParams();

  //   const handleSubmit = e => {
  //       e.preventDefault();
  //       const searchQuery = e.target.trim();

  //       if (!searchQuery) {
  //         toast('Empty request!', { position: 'top-center' });
  //         setSearchParams('');
  //         return;
  //     }
  //   };
  const notify = () => {
    if(!value.trim()){
      toast("Error!")
    }
  };
  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="movie name"
          onChange={handleSetQuery}
          value={value}
        />
        <button type="submit" onClick={notify}>Search</button>
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
