import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ItemsList = ({ itemsData }) => {
  const style = {
    height: "200px",
    width: "200px",
  };
  return (
    <Row className="my-3">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Col sm="12" key={item.id} className="mb-3">
              <Card className="d-flex flex-row">
                <Card.Img style={style} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                  </Card.Title>
                  <Card.Text className="my-3">{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد وجبات</h3>
      )}
    </Row>
  );
};

export default ItemsList;
