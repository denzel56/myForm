import { Form, Formik } from "formik";

type ChildrenType = {
  children?: JSX.Element | JSX.Element[];
};

function MyForm({ children }: ChildrenType) {
  return (
    <>
      <Formik
        initialValues={{
          phone: "",
          email: "",
          nickname: "",
          name: "",
          surname: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>{children}</Form>
      </Formik>
    </>
  );
}

export default MyForm;
