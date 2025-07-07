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
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
        onChange={(e) => formik.setFieldValue(name, e.target.value)}
        value={value.text}
        name={name}
        id={name}
      />

    </div>
  );
};
