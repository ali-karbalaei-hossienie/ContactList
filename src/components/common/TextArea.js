const TextArea = ({ formik }) => {
  return (
    <div className="formControl">
      <textarea
        rows="3"
        placeholder="Address"
        name="address"
        {...formik.getFieldProps("address")}
      />
      {formik.errors.address && formik.touched.address && (
        <p className="error">{formik.errors.address}</p>
      )}
    </div>
  );
};

export default TextArea;
