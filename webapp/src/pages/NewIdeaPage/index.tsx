import { Input } from "../../components/Input";
import { Segment } from "../../components/Segment";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      nick: "",
      description: "",
      content: "",
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.nick.match(/^[a-zA-Z0-9-]+$/)) {
        errors.nick = "Nick must contain only letters, numbers and hyphens";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (values.content.length < 10) {
        errors.content = "Content must be at least 10 characters long";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.info("Submited", values);
      console.info("Errors", formik);
    },
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="content" label="Content" formik={formik} />
        <button type="submit">Отправить</button>
      </form>
    </Segment>
  );
};
