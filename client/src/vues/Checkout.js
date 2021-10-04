import React, { useState } from 'react'
import { Form, Button, Col, InputGroup, Row, ListGroup, Container, Table } from 'react-bootstrap'
import Paypal from './Paypal';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from './../JS/actions/index';
import { useHistory } from 'react-router-dom';
function Checkout() {
    const cardData = useSelector(state => state.cardReducer.card) || [];
    const [validated, setValidated] = useState(false);
    const user = useSelector(state => state.userReducer.user) || [];
    const [city, setCity] = useState(null);
    const [State, setState] = useState(null);
    const [Zip, setZip] = useState(null);
    console.log(city, State, Zip);
    const dispatch = useDispatch()
    const somme = cardData.reduce((s, el) => s + el.prix * el.quantit, 0)
    const sommelistcard = cardData.reduce((s, el) => s + 1, 0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();

        } else {

            setValidated(true);
        }
        dispatch(placeOrder({ "cardList": cardData, "client": user, "somme": somme }));

    };

    return (
        <>
            <Container >
                <Row>
                    <Col>
                        <h2>Récapitulatif de commande</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>produit name</th>
                                    <th>prix</th>
                                    <th>quantité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cardData.map((el, i) =>
                                    <tr>
                                        <td> {i + 1} </td>
                                        <td> {el.name} </td>
                                        <td> {el.prix} </td>
                                        <td> {el.quantit} </td>
                                    </tr>
                                )}
                                <td> {somme} </td>
                            </tbody>
                        </Table>
                    </Col>
                    {/* </Container>
            <Container> */}
                    {/* {!user ? <p>wait</p> : user.map((el) => */}
                    <Col>

                        <Form noValidate validated={validated} >
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"

                                        defaultValue={user.name}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        defaultValue={user.phoneNumber}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required onChange={(e) => setCity(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
            </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required onChange={(e) => setState(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
            </Form.Control.Feedback>

                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="Number" required onChange={(e) => setZip(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
            </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        </Form>
                        {/* )} */}
                    </Col>
                </Row>
            </Container>
            <Row>
                <Button style={{ width: "100px", margin: "auto" }} onClick={handleSubmit}>Submit form</Button>
            </Row>
            <Container>
                <Row >
                    <div >

                        {validated ? <Paypal /> : null}
                    </div>

                </Row>
            </Container>

        </>
    );
}

export default Checkout
