import type { FormikProps } from "formik";

export const Input = ({
  name,
  label,
  formik,
}: {
  name: string;
  label: string;
  formik: FormikProps<any>;
}) => {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;
  const touched = formik.touched[name];
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={value}>{label}</label>
      <br />
      <input
        type="text"
        value={value.text}
        onChange={(e) => formik.setFieldValue(name, e.target.value)}
        onBlur={() => formik.setFieldTouched(name, true)}
        name={name}
        id={name}
      />
      {touched && error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
