import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsAsync } from './redux/contacts/operations';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm title="Phonebook" />
      <Filter title="Find contacts by name:" />
      <h2>Contacts</h2>
      <Contacts title="Contacts" />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
