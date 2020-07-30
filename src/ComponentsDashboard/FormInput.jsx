import React from 'react';
import { Form, Col } from 'react-bootstrap';

const FormInput = ({ name, type, placeholder, value, description, onInputChange, ...props }) => {
  const handleChange = event => onInputChange(event.target.name, event.target.value);
  // console.log(event.target.name, event.target.value)

  return (
    <Form.Group>
      <Form.Row>
        <Form.Label column lg={2}>
          {description}
        </Form.Label>
        <Col>
          <Form.Control
            required
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          />
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default FormInput;
