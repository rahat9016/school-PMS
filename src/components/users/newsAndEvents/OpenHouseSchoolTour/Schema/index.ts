import * as Yup from 'yup';

const letUsCallValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  gradeLevel: Yup.string().required('Grade level is required'),
  preferredCallDate: Yup.date().required('DD/MM/YYYY date is required').nullable(),
  preferredCallTime: Yup.string().required('Time is required'),
  subject: Yup.string().required('Subject is required'),
  additionalMessage: Yup.string().required('Additional message is required'),
});


const visitFormSchema = Yup.object().shape({
  parentName: Yup.string()
    .required('Parent name is required'),

  studentName: Yup.string()
    .required('Student name is required'),

  studentCurrentSchool: Yup.string()
    .required('Student current school is required'),

  studentCurrentGrade: Yup.string()
    .required('Student current grade is required'),

  studentBirthDate: Yup.date()
    .required('Student birth date is required')
    .typeError('Invalid birth date'),

  schoolTourDate: Yup.date()
    .required('School tour date is required')
    .typeError('Invalid tour date'),

  preferredTime: Yup.string()
    .required('Preferred time is required'),

  mobileNumber: Yup.string()
    .required('Mobile number is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export {letUsCallValidationSchema, visitFormSchema};