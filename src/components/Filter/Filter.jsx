import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/actions';
import { FilterLabel, FilterInput } from './Filter.styled';

export function Filter({ title }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilterValue = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      {title}
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={changeFilterValue}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
