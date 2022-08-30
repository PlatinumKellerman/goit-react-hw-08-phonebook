import axios from 'axios';
axios.defaults.baseURL = 'https://630514a3697408f7edc16d5f.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};
