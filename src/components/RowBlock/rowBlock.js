import React from "react/cjs/react.production.min";
import { Col, Row } from "reactstrap";

const RowBlock = ({ left, right }) => {
  return (
    <Row>
      <Col md="6" className="mb-5">
        {right}
      </Col>
      <Col md="6">{left}</Col>
    </Row>
  );
};

export default RowBlock;
