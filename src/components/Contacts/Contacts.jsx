import { ContactsItem } from './ContactsItem/index';
import { FilterLabel, List, MessageWrapper, Message } from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAsync } from '../../redux/contacts/operations';
import PhonelinkEraseOutlinedIcon from '@mui/icons-material/PhonelinkEraseOutlined';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <FilterLabel>Contacts</FilterLabel>
      {filteredContacts.length > 0 ? (
        <List sx={{ width: 500, backgroundColor: '#ffffff' }}>
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
