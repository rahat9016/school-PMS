import * as Yup from 'yup';

export const faqValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required'),

  lastName: Yup.string()
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .required('Phone number is required'),

  question: Yup.string()
    .required('Additional question is required'),
});
