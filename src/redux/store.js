import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
