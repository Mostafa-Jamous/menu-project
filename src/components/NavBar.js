import React, { useState } from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

const NavBar = ({filterBySearch}) => {
  const [searchVal,setSearchValue] = useState("")
  const onSearch = () => {
    filterBySearch(searchVal)
    setSearchValue("")
  }

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#"><div className="logoColor">مطعم جديد</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث ...."
                className="me-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchVal}
              />
              <Button onClick={() => onSearch()} className="mx-2" variant="outline-success dark danger">بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
