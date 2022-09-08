import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import {
  getContactsAsync,
  addContactAsync,
  deleteContactAsync,
} from './operations';

const items = createReducer([], {
  [getContactsAsync.fulfilled]: (_, { payload }) => payload,

  [addContactAsync.fulfilled]: (_, { payload }) => payload,

  [deleteContactAsync.fulfilled]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsAsync.pending]: () => true,
  [getContactsAsync.fulfilled]: () => false,
  [getContactsAsync.rejected]: () => false,
  [addContactAsync.pending]: () => true,
  [addContactAsync.fulfilled]: () => false,
  [addContactAsync.rejected]: () => false,
  [deleteContactAsync.pending]: () => true,
  [deleteContactAsync.fulfilled]: () => false,
  [deleteContactAsync.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
