import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FORM, BUTTON, INPUT } from './styled/FormaSearch.styled';

export const FormaSearch = ({ submitInput }) => {
  const [search, setSearch] = useState('');

  const hendleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return toast.info('Введіть пошуковий запит', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    submitInput(search);
    setSearch('');
  };

  return (
    <FORM onSubmit={hendleSubmit} autoComplete="off">
      <BUTTON>Search</BUTTON>
      <INPUT
        type="text"
        name="search"
        onChange={e => setSearch(e.currentTarget.value.toLowerCase())}
      />
      <ToastContainer />
    </FORM>
  );
};
