import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return( 
    <Row>
      <Col>
        <div sm="12" className="my-2 justify-content-center text-center title">
          قائمة الطعام
        </div>
        <div className="justify-content-center d-flex">
            <p className="line"></p>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
