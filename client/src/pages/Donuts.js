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
    const [isAte, setAte] = useState([])
    const [formObject, setFormObject] = useState({})


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
        API.getDonuts({ ate: true })
            .then(res => setAte([isAte]))
            .catch(err => console.log(err));
    };

    function eatDonut(id) {
        API.updateDonut(id)
            .then(res => loadAte())
            .catch(err => console.log(err));
    };

    function deleteDonut(id) {
        API.deleteDonut(id)
            .then(res => loadDonuts())
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
                                    {donut.title}
                                    <EatBtn onClick={eatDonut} />
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
                    {/* <List>
                        <ListItem >
                        <p>No Results to Display<DeleteBtn /></p>
                        
                        </ListItem>
                    </List> */}

                    {/* 
                    Display List of doutes.ate.true
                    */}
                    {/* {isAte.length ? (
                        <List>
                            {isAte.map(ate => (
                                <ListItem key={ate == true}>
                                    {donut.title}
                                    <DeleteBtn onClick={(_id) => deleteDonut(donut._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )} */}
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
                            placeholder="Random"
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