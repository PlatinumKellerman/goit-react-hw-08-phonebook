import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from '../../services/contacts-api';
import { Container } from '../../components/Container/Container';
import { Contacts } from '../../components/Contacts/Contacts';
import { Filter } from '../../components/Filter/Filter';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <Filter></Filter>
      <Contacts></Contacts>
    </Container>
  );
};
