import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';
import {
  getContactsAsync,
  addContactAsync,
  deleteContactAsync,
  patchContact,
} from './operations';

const items = createReducer([], {
  [getContactsAsync.fulfilled]: (_, { payload }) => payload,

  [addContactAsync.fulfilled]: (_, { payload }) => payload,

  [deleteContactAsync.fulfilled]: (_, { payload }) => payload,

  [patchContact.fulfilled]: (state, { payload }) =>
    state.reduce((acc, contact) => {
      contact.id === payload.id ? acc.push(payload) : acc.push(contact);
      return acc;
    }, []),
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
  [patchContact.pending]: () => true,
  [patchContact.fulfilled]: () => false,
  [patchContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
