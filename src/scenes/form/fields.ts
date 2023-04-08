export const fields = [
  {
    name: "firstName",
    label: "First Name",
    span: 2,
  },
  {
    name: "lastName",
    label: "Last Name",
    span: 2,
  },
  {
    name: "email",
    label: "Email",
    span: 4,
  },
  {
    name: "address1",
    label: "Address 1",
    span: 4,
  },
  {
    name: "address2",
    label: "Address 2",
    span: 4,
  },
];

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
};

export const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
