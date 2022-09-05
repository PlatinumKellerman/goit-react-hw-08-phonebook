import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsAsync } from 'redux/contacts/operations';
import { getIsLoggedIn } from 'redux/authentication/selectors';
import { Container } from '../../components/Container/Container';
import { Contacts } from '../../components/Contacts/Contacts';
import { Filter } from '../../components/Filter/Filter';
import { PhonebookForm } from '../../components/PhonebookForm/PhonebookForm';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <Container>
          <PhonebookForm></PhonebookForm>
          <Filter></Filter>
          <Contacts></Contacts>
        </Container>
      ) : null}
    </>
  );
};
