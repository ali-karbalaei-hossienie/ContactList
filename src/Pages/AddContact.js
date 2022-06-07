import React, { Component, useState, useMemo } from "react";
import blob1 from "../blob1.svg";
import blob2 from "../blob2.svg";
import usericon from "../usericon.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import Select from "react-select";
import Input from "../components/common/Input";
import SelectComponent from "../components/common/SelectComponent";
import TextArea from "../components/common/TextArea";

let validationSchema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .min(3, "The minimum length of the name is 4")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),
  phoneNumber: yup
    .string()
    .required("phoneNumber is required")
    .matches(/^[0-9]{11}$/, "invalid phone number")
    .nullable(),
  address: yup.string().required("address is required"),
  nationality: yup.string().required("nationality is required"),
});
const AddContact = ({ AddContacts, onedit }) => {
  const options = useMemo(() => countryList().getData(), []);

  const selectOptions = [
    {
      label: "Select Nationality ...",
      value: "",
    },
    ...options,
  ];
  const initialValues = {
    name: onedit ? onedit.name : "",
    email: onedit ? onedit.email : "",
    phoneNumber: onedit ? onedit.phoneNumber : "",
    address: onedit ? onedit.address : "",
    nationality: onedit ? onedit.nationality : "",
  };
  const Navigate = useNavigate();

  const submitHandler = (values, { resetForm }) => {
    AddContacts(values);
    resetForm({ values: "" });
    Navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <img src={blob1} alt="blob1" className="circle1" />
      <img src={blob2} alt="blob2" className="circle2" />
      <form className="form" onSubmit={formik.handleSubmit}>
        <img src={usericon} className="usericon" />
        <Input formik={formik} name="name" placeholder="Name" />
        <Input formik={formik} name="email" placeholder="Email" />
        <Input formik={formik} name="phoneNumber" placeholder="Phone Number" />
        <SelectComponent formik={formik} selectOptions={selectOptions} />
        <TextArea formik={formik} />
        <div className="formControl">
          <button type="submit" className="submit" disabled={!formik.isValid}>
            {onedit ? "Update Contact" : "Add Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
