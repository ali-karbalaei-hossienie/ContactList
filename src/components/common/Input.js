const Input = ({ placeholder, type = "text", name, formik }) => {
  return (
    <div className="formControl">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className="error">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
