import type { FormikProps } from "formik";

export const Textarea = ({
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
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        onChange={(e) => formik.setFieldValue(name, e.target.value)}
        onBlur={() => formik.setFieldTouched(name, true)}
        value={value.text}
        name={name}
        id={name}
      />
      {touched && error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
