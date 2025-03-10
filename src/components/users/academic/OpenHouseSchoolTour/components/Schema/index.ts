import * as Yup from 'yup';

const letUsCallValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  mobileNumber: Yup.string().required('Mobile number is required'),
  gradeLevel: Yup.string().required('Grade level is required'),
  callDate: Yup.date().required('DD/MM/YYYY date is required').nullable(),
  callTime: Yup.string().required('Time is required'),
  subject: Yup.string().required('Subject is required'),
  additionalMessage: Yup.string().required('Additional message is required'),
});


const visitFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobileNumber: Yup
    .string()
    .matches(/^[0-9]+$/, "Mobile number must contain only digits")
    .required("Mobile Number is required"),
  date: Yup.date().required("Please select a date"),
  time: Yup.string().required("Please select a time slot"),
  grade: Yup.string().required("Grade level is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Additional Message is required"),
});

export {letUsCallValidationSchema, visitFormSchema};