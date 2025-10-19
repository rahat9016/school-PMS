import * as Yup from 'yup';

const validationStudentAllInformationSchema = Yup.object().shape({
  // Student Information
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  middleName: Yup.string(),
  nickName: Yup.string(),
  currentSchool: Yup.string(),
  gender: Yup.string().required('Gender is required'),
  nationality: Yup.string().required('Nationality is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  gradeApplyingFor: Yup.string().required('Grade is required'),
  yearApplyingFor: Yup.string().required('Year applying is required'),

  // Parent/Guardian Information
  parentTitle: Yup.string().required('Title is required'),
  parentFirstName: Yup.string().required('Parent first name is required'),
  parentLastName: Yup.string().required('Parent last name is required'),
  parentRelation: Yup.string().required('Relationship is required'),
  parentNationality: Yup.string().required('Nationality is required'),
  parentEmail: Yup.string()
    .email('Invalid email address')
    .required('Parent email is required'),
  parentPhone: Yup.string().optional(),
  parentAddress: Yup.string().required('Address is required'),

  // Additional Information
  // heardFrom: Yup.string().required('This field is required'),
  referralSource: Yup.string().optional(),
  comments: Yup.string().optional()
});


export { validationStudentAllInformationSchema };
