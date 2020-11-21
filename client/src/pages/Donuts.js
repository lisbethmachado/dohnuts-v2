import React, { useState, useEffect } from "react";
import EatBtn from "../components/EatBtn";
import DeleteBtn from "../components/DeleteBtn";
import { Input, FormBtn } from "../components/Form"
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import homer from "../images/homer-happy.png"

function Donuts() {
    // Setting our component's initial state
    const [donuts, setDonuts] = useState([])
    const [formObject, setFormObject] = useState({})
    const [ate, setAte] = useState([])


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
    function eatDonut(id) {
        API.getDonut(id)
            .then(res => setAte(res.data + console.log("Click")))
            .then(res => loadDonuts())
            .catch(err => console.log(err));
    }

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
                <Col size="md-4 sm-12">
                    <Jumbotron>
                        <h1>Bake Donuts? <span role="img" aria-label="yum-emoji">😋</span></h1>
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
                </Col>
                <Col size="md-4 sm-12">
                    <Jumbotron><h1>Donuts, yum! <span role="img" aria-label="donut-emoji">🍩</span></h1></Jumbotron>
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
                        <h1>Done Donuts. <span role="img" aria-label="heartbreak-emoji">💔</span></h1>
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
                    <Jumbotron>
                        <h1>Happy Homer! <span role="img" aria-label="clap-emoji">👏</span></h1>
                    </Jumbotron>
                    <div className="homer"><img src={homer} alt="Homer" /></div>
                </Col>
            </Row>
        </Container>
    );
}


export default Donuts;