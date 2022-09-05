import { useDispatch } from 'react-redux';
import { addContactAsync } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import { Label } from './PhonebookForm.styled';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
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
      name: yup.string().required('This field cannot be empty'),
      number: yup
        .string()
        .min(6)
        .max(18)
        .required('This field cannot be empty'),
    }),
  });

  return (
    <Container
      sx={{
        width: 500,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Label>Phonebook</Label>
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
        <TextField
          variant="outlined"
          id="number"
          name="number"
          label="Number"
          sx={{ mb: '30px', width: '400px' }}
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number}
          helperText={formik.touched.number && formik.errors.number}
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
    </Container>
  );
}
