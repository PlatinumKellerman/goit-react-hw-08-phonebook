import { ContactsItem } from './ContactsItem/index';
import { Title, List, MessageWrapper, Message } from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAsync } from '../../redux/contacts/operations';
import PhonelinkEraseOutlinedIcon from '@mui/icons-material/PhonelinkEraseOutlined';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <Title>Contacts</Title>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              delContact={() => {
                dispatch(deleteContactAsync(id));
              }}
              name={name}
              number={number}
            />
          ))}
        </List>
      ) : (
        <MessageWrapper>
          <Message>
            <PhonelinkEraseOutlinedIcon
              sx={{ display: 'flex', marginRight: '10px', fontSize: 40 }}
            />
            contact list is empty
          </Message>
        </MessageWrapper>
      )}
    </>
  );
}
