import React, { Component, useState, useMemo } from "react";
import blob1 from "../blob1.svg";
import blob2 from "../blob2.svg";
import usericon from "../usericon.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import Select from "react-select";

// let validationSchema = yup.object({
//   name: yup
//     .string()
//     .required("name is required")
//     .min(6, "name length is not valid"),
//   email: yup
//     .string()
//     .email("invalid email format")
//     .required("email is required"),
//   phoneNumber: yup
//     .string()
//     .required("phoneNumber is required")
//     .matches(/^[0-9]{11}$/, "invalid phone number")
//     .nullable(),
//   address: yup.string().required("address is required"),
//   nationality: yup.string().required("nationality is required"),
// });
const AddContact = ({ AddContacts, onedit }) => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const selectOption = options;
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
    // validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <img src={blob1} alt="blob1" className="circle1" />
      <img src={blob2} alt="blob2" className="circle2" />
      <form className="form" onSubmit={formik.handleSubmit}>
        <img src={usericon} className="usericon" />
        <div className="formControl">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="error">{formik.errors.name}</p>
          )}
        </div>

        <div className="formControl">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div className="formControl">
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <p className="error">{formik.errors.phoneNumber}</p>
          )}
        </div>
        <div className="formControl">
          <select {...formik.getFieldProps("nationality")}>
            {options.map((item) => (
              <option name="nationality" key={item.value} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
          {formik.errors.nationality && formik.touched.nationality && (
            <p className="error">{formik.errors.nationality}</p>
          )}
        </div>
        <div className="formControl">
          <textarea
            rows="3"
            placeholder="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.address && formik.touched.address && (
            <p className="error">{formik.errors.address}</p>
          )}
        </div>
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
