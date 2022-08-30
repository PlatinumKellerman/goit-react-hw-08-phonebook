import { useDispatch } from 'react-redux';
import { addContactAsync } from '../../redux/contacts/operations';
import { Formik, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import {
  MainForm,
  PhonebookFormLabel,
  PhonebookInput,
  SubmitButton,
  ErrorText,
  Wrapper,
} from './PhonebookForm.styled';

export function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const schema = yup.object().shape({
    name: yup.string().required('This field cannot be empty'),
    number: yup.string().min(6).max(18).required('This field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const foundContact = contacts.filter(contact => {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });
    if (foundContact.length > 0) {
      toast.error('This contact already exists');
      return;
    }
    dispatch(addContactAsync(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <MainForm>
          <PhonebookFormLabel htmlFor="name">
            Name:
            <Wrapper>
              <PhonebookInput
                name="name"
                type="text"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMessage
                name="name"
                render={message => <ErrorText>{message}</ErrorText>}
              />
            </Wrapper>
          </PhonebookFormLabel>
          <PhonebookFormLabel htmlFor="number">
            Number:
            <Wrapper>
              <PhonebookInput
                name="number"
                type="tel"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMessage
                render={message => <ErrorText>{message}</ErrorText>}
                name="number"
              />
            </Wrapper>
          </PhonebookFormLabel>
          <SubmitButton type="submit">Add contact</SubmitButton>
        </MainForm>
      </Formik>
    </>
  );
}
