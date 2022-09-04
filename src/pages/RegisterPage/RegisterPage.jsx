import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authentication/operations';

export function RegisterPage() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('This field cannot be empty'),
    email: yup.string().min(6).max(18).required('This field cannot be empty'),
    password: yup
      .string()
      .min(6)
      .required('Password should be of minimum 8 characters length'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">
            Name:
            <div>
              <Field
                name="name"
                type="text"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
              <ErrorMessage name="name" render={message => <p>{message}</p>} />
            </div>
          </label>
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
