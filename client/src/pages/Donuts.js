import API from "../utils/API";
import Banner from '../components/Banner'
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";
import DonutSpinner from "../components/DonutSpinner"
import EatBtn from "../components/EatBtn";
import Homer from "../components/Homer"
import { Input, FormBtn } from "../components/Form"
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import React, { useState, useEffect } from "react";

function Donuts() {
    // Setting our component's initial state
    const [donuts, setDonuts] = useState([])
    const [formObject, setFormObject] = useState({})
    const [ate, setAte] = useState([])


    useEffect(() => {
        loadDonuts()
    }, [])

    useEffect(() => {
        loadAte()
    }, [])

    function loadDonuts() {
        API.getDonuts()
            .then(res => setDonuts(res.data))
            .catch(err => console.log(err));
    };

    function loadAte() {
        API.getDonuts()
            .then(res => setAte(res.data))
            .catch(err => console.log(err));
    };

    function deleteDonut(id) {
        API.deleteDonut(id)
            .then(res => loadDonuts())
            .catch(err => console.log(err));
    };

    function eatDonut(id) {
        API.getDonut(id)
            .then(res => setAte(res.data + console.log("Click")))
            .then(res => loadAte())
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            API.saveDonut({
                title: formObject.title,
            })
                .then(res => loadDonuts())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    {/* <Jumbotron>
                        <h1>Dohnuts <span role="img" aria-label="fire-emoji">🔥</span></h1>
                    </Jumbotron> */}
                    <Banner />
                    </Col>
                    </Row>
            <Row>
                <Col size="md-4 sm-12">
                    <Jumbotron>
                        <h1>Bake? <span role="img" aria-label="yum-emoji">😋</span></h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <FormBtn
                            disabled={!(formObject.title)}
                            onClick={handleFormSubmit}
                        >
                            Bake
              </FormBtn>
                    </form>
                    <DonutSpinner />
                    
                </Col>
                <Col size="md-4 sm-12">
                    <Jumbotron><h1>Ready! <span role="img" aria-label="donut-emoji">🍩</span></h1></Jumbotron>
                    {donuts.length ? (
                        <List>
                            {donuts.map(donut => (
                                <ListItem key={donut._id}>
                                    <strong>
                                        {donut.title}
                                    </strong>
                                    <EatBtn onClick={() => eatDonut(donut._id)}/>
                                    <DeleteBtn onClick={() => deleteDonut(donut._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
                <Col size="md-4 sm-12">
                    <Jumbotron>
                        <h1>Gone. <span role="img" aria-label="heartbreak-emoji">💔</span></h1>
                    </Jumbotron>
                    {ate.length ? (
                        <List>
                            {/* {ate.map(donut => (
                                <ListItem key={donut._id}>
                                    <strong>
                                        {donut.title}
                                    </strong>
                                    <DeleteBtn onClick={() => deleteDonut(donut._id)} />
                                </ListItem>
                            ))} */}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Surprise Me! <span role="img" aria-label="present-emoji">🎁</span></h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Random Donut"
                        />
                        <FormBtn
                            disabled={true}
                            onClick={handleFormSubmit}
                        >
                            Surprise
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Homer />
                </Col>
            </Row>
        </Container>
    );
}


export default Donuts;