import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCat }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="mb-3">
      <Col sm="12" className="d-flex justify-content-center">
        {allCat.length >= 1
          ? allCat.map((cat) => {
              return (
                <div>
                  <Button
                    onClick={() => onFilter(cat)}
                    className="mx-2 btn btn-danger"
                  >
                    {cat}
                  </Button>
                </div>
              );
            })
          : null}
      </Col>
    </Row>
  );
};

export default Category;
