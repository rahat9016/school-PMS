import * as yup from "yup";

const preRegisterSchema = yup.object().shape({
  parentName: yup.string().required("Parent's name is required"),
  parentEmail: yup.string().email("Invalid email").required("Email is required"),
  parentContactNumber: yup.string().required("Contact number is required"),
  studentName: yup.string().required("Student's name is required"),
  studentGender: yup.string().oneOf(["Male", "Female"], "Gender is required").required("Gender is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  studentDOB: yup.string().required("Date of birth is required"),
  studentNationality: yup.string().required("Student's nationality is required"),
  currentSchool: yup.string().required("Current school is required"),
  grade: yup.string().required("Grade is required"),
  additionalInfo: yup.string().required("Additional Info required"),
});

export {preRegisterSchema}