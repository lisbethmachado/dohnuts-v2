import React from "react";
import Banner from '../components/Banner'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import logo from '../logo.svg';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Banner />
          <Jumbotron>
            <h1>404: No Donuts Here <span role="img" aria-label="sad-emoji">😢</span></h1>
          </Jumbotron>
          <div className="donut" size="md-12"><img src={logo} styles={{align: 'center'}} className="App-logo" alt="logo" /></div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
