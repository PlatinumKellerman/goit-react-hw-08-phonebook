import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authentication/operations';

export function LogInPage() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().min(6).max(18).required('This field cannot be empty'),
    password: yup
      .string()
      .min(6)
      .required('Password should be of minimum 8 characters length'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">
            Email:
            <div>
              <Field
                name="email"
                type="email"
                title="Enter the right email address"
              />
              <ErrorMessage render={message => <p>{message}</p>} name="email" />
            </div>
          </label>
          <label htmlFor="password">
            Password:
            <div>
              <Field
                name="password"
                type="password"
                title="Password should be of minimum 8 characters length"
              />
              <ErrorMessage
                render={message => <p>{message}</p>}
                name="password"
              />
            </div>
          </label>
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
    </>
  );
}
