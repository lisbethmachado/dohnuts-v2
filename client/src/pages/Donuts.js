import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function Donuts() {
  // Setting our component's initial state
  const [donuts, setDonuts] = useState([])


  useEffect(() => {
    loadDonuts()
  }, [])

  function loadDonuts() {
    API.getDonuts()
      .then(res => setDonuts(res.data))
      .catch(err => console.log(err));
  };

  function deleteDonut(id) {
    API.deleteDonut(id)
      .then(res => loadDonuts())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
    <Row>
      <Col size="md-4 sm-12">
          <Jumbotron><h1>Dohnuts!</h1></Jumbotron>
          {donuts.length ? (
            <List>
              {donuts.map(donut => (
                <ListItem key={donut._id}>
                  <strong>
                    {donut.title}
                  </strong>
                  <DeleteBtn onClick={() => deleteDonut(donut._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
            </Row>
    </Container>
  );
}


export default Donuts;