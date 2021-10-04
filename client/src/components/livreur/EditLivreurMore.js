import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { editproduct, getProductList } from '../JS/actions';
import { Button, Form, Row, Container, Col, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { editlivreur } from './../../JS/actions/index';


function EditLivreurMore() {
    const history = useHistory();
    const { _id } = useParams();
    console.log("id", _id)
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [numberPhone, setNumberPhone] = useState();
    const [address, setAddress] = useState();
    const [avaible, setIsAvaible] = useState();


    const livreur = useSelector((state) => state.livreurReducer.livreur) || [];
    const dispatch = useDispatch();


    const submitHandler = () => {
        dispatch(editlivreur({
            _id: _id,
            name,
            address,
            numberPhone,
            avaible,
        }))

        history.push('/editlivreur');
    };


    return (
        <div>
            <Container style={{ height: "70vh", marginTop: "150px" }}>
                < h2 > Edit product </h2>
                {livreur.filter((el) => el._id == _id).map((el, i) =>
                    <Row>
                        <Col>
                            <form >
                                <Form.Group>
                                    <Form.Label>nom</Form.Label>

                                    <Form.Control size="lg" type="text" name="name" defaultValue={el.name} id={i} onChange={(e) => setName(e.target.value)} />
                                    <Form.Label>descripton</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="description" defaultValue={el.address} onChange={(e) => setAddress(e.target.value)} />
                                    <Form.Label>prix</Form.Label>
                                    <InputGroup className="mb-3">

                                        <Form.Control size="lg" type="number" defaultValue={el.numberPhone} name="price" onChange={(e) => setNumberPhone(e.target.value)} />
                                        <Form.Label> Avaible</Form.Label>
                                        <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='avaible' size="lg" defaultValue={el.isAvaible} onChange={(e) => setIsAvaible(e.target.value)} >
                                            <option></option>
                                            <option>yes</option>
                                            <option>nb</option>
                                        </Form.Control>
                                    </InputGroup>

                                    <Button variant="primary" size="lg" onClick={submitHandler}>
                                        Enregistrer
                                     </Button>
                                </Form.Group>
                            </form>

                        </Col>
                    </Row>
                )}
            </Container>

        </div >
    )
}

export default EditLivreurMore
