import { FcPhoneAndroid } from 'react-icons/fc';
import { FaUserCheck } from 'react-icons/fa';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem({ delContact, name, number }) {
  return (
    <ListItem>
      <ItemName>
        <FaUserCheck size="20" style={{ marginRight: '10px' }} />
        {name}:
      </ItemName>
      <ItemNumber>
        <FcPhoneAndroid size="20" style={{ marginRight: '10px' }} />
        {number}
      </ItemNumber>
      <DeleteButton onClick={delContact}>Delete</DeleteButton>
    </ListItem>
  );
}
