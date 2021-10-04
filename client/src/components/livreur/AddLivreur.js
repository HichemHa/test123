import React, { useState } from 'react';
import { Button, Form, Row, Container, Col, InputGroup } from 'react-bootstrap';



import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addLivreur } from '../../JS/actions';


function AddLivreur() {
    const history = useHistory()
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    const [adresse, setAdresse] = useState();


    const dispatch = useDispatch()
    const submitHandler = (e) => {

        dispatch(addLivreur({ "name": name, "numberPhone": phone, "address": adresse })
        )
        alert("livreur ajoutée avec succées")
        history.push('/');
    };
    //upload file


    return (
        <Container style={{ height: "70vh", marginTop: "150px" }}>
            <h2> Add new Livreur </h2>
            <Row>
                <Col>
                    <form >
                        <Form.Group >
                            <Form.Label>nom</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Product name" name="name" onChange={(e) => setName(e.target.value)} />
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control as="textarea" rows={3} name="adress" onChange={(e) => setAdresse(e.target.value)} />

                            <Form.Label>téléphone</Form.Label>
                            <Form.Control size="lg" type="phone" placeholder="phone  number" name="phone" onChange={(e) => setPhone(e.target.value)} />
                            <Button variant="primary" size="lg" onClick={submitHandler}> Enregistrer</Button>
                        </Form.Group >
                    </form>
                </Col>
            </Row>
        </Container>

    )
}

export default AddLivreur
