import { Form, Formik } from "formik";
import { FunctionComponent } from "react";

type ChildrenType = {
  children?: JSX.Element | JSX.Element[];
};

const MyForm: FunctionComponent<ChildrenType> = ({ children }) => {
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
};

export default MyForm;
