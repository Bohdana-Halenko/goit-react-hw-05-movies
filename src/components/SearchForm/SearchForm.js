import { Form, Btn, Input, Wrap } from './SearchForm.styled';
// import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';

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

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="movie name"
          onChange={handleSetQuery}
          value={value}
        />
        <Btn type="submit">Search</Btn>
      </Form>
    </Wrap>
  );
}
SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};