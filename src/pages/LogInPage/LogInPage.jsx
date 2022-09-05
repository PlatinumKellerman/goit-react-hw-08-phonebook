import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authentication/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';

export function LogInPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('This field cannot be empty'),
      password: yup
        .string()
        .min(6)
        .max(28)
        .required('This field cannot be empty'),
    }),
  });

  return (
    <Container
      sx={{
        marginTop: '30px',
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
        <TextField
          variant="outlined"
          id="email"
          name="email"
          label="Email"
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
          Login
        </Button>
      </form>
    </Container>
  );
}
