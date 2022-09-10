import { useDispatch } from 'react-redux';
import { addContactAsync } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { StyledContainer } from './PhonebookForm.styled';
import { Title } from '../ui/Title/Title';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

export function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: (values, { resetForm }) => {
      const foundContact = contacts.filter(contact => {
        return contact.name.toLowerCase() === values.name.toLowerCase();
      });

      if (foundContact.length > 0) {
        toast.error('This contact already exists');
        return;
      }
      dispatch(addContactAsync(values));
      resetForm();
    },

    validationSchema: yup.object().shape({
      name: yup
        .string()
        .matches(/[a-zA-Zа-яА-Я]+/, {
          message: 'This field must contain at least 1 letter',
        })
        .required('This field cannot be empty'),
    }),
  });

  return (
    <StyledContainer
      sx={{
        width: 500,
        display: 'flex',
      }}
    >
      <form
        id="formx"
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title>Phonebook</Title>
        <TextField
          variant="outlined"
          id="name"
          name="name"
          label="Name"
          sx={{ mb: '20px', width: '400px' }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name}
          helperText={formik.touched.name && formik.errors.name}
        />
        <PhoneInput
          country={'ua'}
          placeholder={'Enter phone number'}
          inputStyle={{
            marginBottom: '20px',
            width: '400px',
          }}
          value={formik.values.number}
          inputProps={{
            name: 'number',
            required: true,
            autoFocus: true,
            onChange: formik.handleChange,
          }}
        />
        <Button
          sx={{
            width: '50px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#d55448',
            '&:hover': {
              backgroundColor: '#c29545',
            },
          }}
          variant="contained"
          size="medium"
          type="submit"
        >
          <PersonAddAltOutlinedIcon />
        </Button>
      </form>
    </StyledContainer>
  );
}
