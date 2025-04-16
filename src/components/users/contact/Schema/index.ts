import * as Yup from 'yup';

export const feedbackValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required'),

  lastName: Yup.string()
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .required('Phone number is required'),

  isRelativeStudying: Yup.string()
    .oneOf(['Yes', 'No'], 'Please select Yes or No')
    .required('Please select if your relative is currently studying'),

  subject: Yup.string()
    .required('Subject is required'),

  message: Yup.string()
    .required('Additional message is required'),
});
