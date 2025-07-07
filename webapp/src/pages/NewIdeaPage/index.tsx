import { Input } from "../../components/Input";
import { Segment } from "../../components/Segment";
import { Textarea } from "../../components/Textarea";
import { useFormik } from "formik";
import { z } from "zod";
import { withZodSchema } from "formik-validator-zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  nick: z
    .string()
    .min(1, "Nick is required")
    .regex(
      /^[a-zA-Z0-9-]+$/,
      "Nick must contain only letters, numbers and hyphens"
    ),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
});

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      nick: "",
      description: "",
      content: "",
    },
    validate: withZodSchema(schema),
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
