import { Form, Formik } from "formik";

import Input from "../Input";
import Button from "../Button";

function MyForm() {
  return (
    <>
      <Formik
        initialValues={{
          phone: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Input
            id="phone"
            type="text"
            name="phone"
            placeholder="+7(999) 999-99-99"
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="example@jim.com"
          />
          <Button type="submit" text="Начать" />
        </Form>
      </Formik>
    </>
  );
}

export default MyForm;
