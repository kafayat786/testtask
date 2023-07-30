import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";

const TaskForm = ({ addTask }) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    group: yup.string().required(),
  });

  const handleSubmit = (values) => {
    addTask(values);
    console.log(values, "scsc");
  };

  return (
    <Container>
      <Row>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            title: "",
            description: "",
            group: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                  isInvalid={errors.title}
                  placeholder="Title"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Select
                  className="my-3"
                  name="group"
                  value={values.group}
                  onChange={handleChange}
                  isInvalid={errors.group}
                  aria-label="Default select example"
                >
                  <option>Select Group</option>
                  <option value="1">Group 1</option>
                  <option value="2">Group 2</option>
                  <option value="3">Group 3</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.group}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  as="textarea"
                  name="description"
                  onChange={handleChange}
                  rows={3}
                  value={values.description}
                  placeholder="Description"
                  isInvalid={errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" className="mb-4" type="submit">
                Add Task
              </Button>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};
export default TaskForm;
