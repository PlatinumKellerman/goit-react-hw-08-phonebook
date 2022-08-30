import { ContactsItem } from './ContactsItem/index';
import { List, ListWrapper } from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAsync } from '../../redux/contacts/operations';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ListWrapper>
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
    </ListWrapper>
  );
}
