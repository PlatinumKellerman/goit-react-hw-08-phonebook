import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/api';
import { toast } from 'react-toastify';

export const getContactsAsync = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getContacts();
      return data;
    } catch (error) {
      toast.error(error);
      return rejectWithValue(error);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsAPI.addContact(contact);
      toast.success(`Contact added successfully`);
      return await contactsAPI.getContacts();
    } catch (error) {
      toast.error(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(contactId);
      toast.success(`Contact deleted successfully`);
      return await contactsAPI.getContacts();
    } catch (error) {
      toast.error(error);
      return rejectWithValue(error);
    }
  }
);
