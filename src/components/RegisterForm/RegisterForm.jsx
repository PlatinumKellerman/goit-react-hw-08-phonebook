import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { register } from '../../redux/authentication/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StyledForm } from './RegisterForm.styled';
import { Title } from '../ui/Title/Title';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('This field cannot be empty'),
      email: yup.string().min(6).max(28).required('This field cannot be empty'),
      password: yup
        .string()
        .min(6)
        .required('Password should be of minimum 8 characters length'),
    }),
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Title>Please, register:</Title>
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
        id="email"
        name="email"
        label="Email"
        type="email"
        sx={{ mb: '20px', width: '400px' }}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="outlined"
        id="password"
        name="password"
        label="Password"
        type="password"
        sx={{ mb: '30px', width: '400px' }}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        sx={{
          width: '200px',
          backgroundColor: '#d55448',
          '&:hover': {
            backgroundColor: '#c29545',
          },
        }}
        variant="contained"
        size="medium"
        type="submit"
      >
        Register
      </Button>
    </StyledForm>
  );
};
