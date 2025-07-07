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
    onSubmit: (values) => {
      console.info("Submited", values);
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
