import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default validationSchema;
