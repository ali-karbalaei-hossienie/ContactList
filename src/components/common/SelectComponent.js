const SelectComponent = ({formik,selectOptions}) => {
  return (
    <div className="formControl">
      <select {...formik.getFieldProps("nationality")}>
        {selectOptions.map((item) => (
          <option
            name="nationality"
            key={item.value}
            value={item.value && item.label}
          >
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors.nationality && formik.touched.nationality && (
        <p className="error">{formik.errors.nationality}</p>
      )}
    </div>
  );
};

export default SelectComponent;
