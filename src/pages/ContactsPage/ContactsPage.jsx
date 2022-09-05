import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsAsync } from 'redux/contacts/operations';
import { Container } from '../../components/Container/Container';
import { Contacts } from '../../components/Contacts/Contacts';
import { Filter } from '../../components/Filter/Filter';
import { PhonebookForm } from '../../components/PhonebookForm/PhonebookForm';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    // <div>
    //   <h1 style={{ color: 'red', marginTop: '300px' }}>CONTSCTS PAGE</h1>
    // </div>
    <Container>
      <PhonebookForm></PhonebookForm>
      <Filter></Filter>
      <Contacts></Contacts>
    </Container>
  );
};
