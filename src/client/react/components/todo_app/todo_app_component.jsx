import React from "react";
import TodoList from "./todo_list";
import TodoForm from "./todo_form";
import { Container, Row, Col } from "react-bootstrap";

const TodoAppComponent = ({
  handleChange,
  handleSubmit,
  currentText,
  items
}) => {
  return (
    <Container>
      <h3>TODO</h3>
      <Row>
        <Col lg={6} xs={12}>
          <TodoForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            nextPosition={items.length + 1}
            currentText={currentText}
          />
        </Col>
        <Col lg={6} xs={12}>
          <TodoList items={items} />
        </Col>
      </Row>
    </Container>
  );
};

export default TodoAppComponent;
