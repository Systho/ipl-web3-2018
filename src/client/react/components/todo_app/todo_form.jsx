import React from "react";
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const TodoForm = ({
  handleSubmit,
  handleChange,
  nextPosition,
  currentText
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Feed the cat" onChange={handleChange} value={currentText} />
        <Form.Text className="text-muted">
          What needs to be done?
        </Form.Text>
      </Form.Group>

       <Button variant="primary" type="submit">
        Add #{nextPosition}
      </Button>
    </Form>
  );
};

export default TodoForm;
