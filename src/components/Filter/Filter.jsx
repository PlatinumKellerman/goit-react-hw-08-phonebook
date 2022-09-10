import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/actions';
import { Title } from '../ui/Title/Title';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export function Filter({ title }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <Container
      sx={{
        width: 500,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Title>Filter</Title>
      <TextField
        variant="outlined"
        sx={{ width: '400px' }}
        fullWidth
        name="filter"
        label="Find contacts by name"
        type="text"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

Filter.propTypes = {
  title: PropTypes.string,
};
