import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsAsync } from 'redux/contacts/operations';
import { getIsLoggedIn } from 'redux/authentication/selectors';
import { Contacts } from '../../components/Contacts/Contacts';
import { Filter } from '../../components/Filter/Filter';
import { PhonebookForm } from '../../components/PhonebookForm/PhonebookForm';
import { StyledContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <StyledContainer sx={{ width: 500 }}>
          <PhonebookForm></PhonebookForm>
          <Filter></Filter>
          <Contacts></Contacts>
        </StyledContainer>
      ) : null}
    </>
  );
};

export default ContactsPage;
