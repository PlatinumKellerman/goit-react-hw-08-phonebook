import { authApi } from './auth-api';

export async function getContacts() {
  const { data } = await authApi.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await authApi.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await authApi.delete(`/contacts/${contactId}`);
  return data;
}
export async function patchContact(contact, contactId) {
  const { data } = await authApi.patch(`/contacts/${contactId}`, contact);
  return data;
}
