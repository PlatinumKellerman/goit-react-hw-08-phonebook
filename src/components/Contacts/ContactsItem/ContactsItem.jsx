import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
  Wrapper,
} from './ContactsItem.styled';

export function ContactsItem({ delContact, name, number }) {
  return (
    <ListItem>
      <Wrapper>
        <ItemName>
          <SentimentSatisfiedAltOutlinedIcon sx={{ marginRight: '10px' }} />
          {name}:
        </ItemName>
        <ItemNumber>
          <PhoneOutlinedIcon sx={{ marginRight: '10px' }} />
          {number}
        </ItemNumber>
      </Wrapper>
      <DeleteButton onClick={delContact}>
        <PersonRemoveOutlinedIcon sx={{ fontSize: 30 }} />
      </DeleteButton>
    </ListItem>
  );
}
