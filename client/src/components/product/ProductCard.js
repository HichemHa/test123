import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { addToCard } from '../../JS/actions/'

function ProductCard({ product, key }) {
    const dispatch = useDispatch()

    const cardData = useSelector(state => state.cardReducer.card);
    const qtn = 1;
    const addtocard = (input) => {
        const serachResult = cardData.find(el => el.name == input.name)
        serachResult ? alert('produit deja dans le pannier') : dispatch(addToCard(input));

    }

    const filterName = useSelector(state => state.filterReducer.filterByName);
    return (
        <Container fluid >
            <Row >
                <Col sm style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center" }}>
                    {filterName == null ?
                        product.map((e, i) =>
                            <Card style={{ width: '22rem', margin: "10px" }}>
                                <Link to={`/product/${e._id}`} style={{ textDecoration: "none", color: "black" }} >
                                    <Card.Img variant="top" src={e.p_imageUrl} />
                                </Link>
                                <Card.Body style={{ textAlign: "center", }}>
                                    <Card.Title>{e.name} </Card.Title>
                                    <Card.Text style={{ fontSize: "large" }}>
                                        {e.price} DT {key}
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: "large" }}>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addtocard({ "id": e._id, "name": e.name, "image": e.p_imageUrl, "prix": e.price, "quantit": qtn })}>Add to Card</Button>
                                </Card.Body>
                            </Card>) : product.filter((el) => el.name.toLowerCase().includes(filterName.toLowerCase())).map((e) => <Card style={{ width: '22rem', margin: "10px" }}>
                                <Link to={`/product/${e._id}`} style={{ textDecoration: "none", color: "black" }} >
                                    <Card.Img variant="top" src={e.p_imageUrl} />
                                </Link>
                                <Card.Body style={{ textAlign: "center", }}>
                                    <Card.Title>{e.name} </Card.Title>
                                    <Card.Text style={{ fontSize: "large" }}>
                                        {e.price} DT {key}
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: "large" }}>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addtocard({ "id": e._id, "name": e.name, "image": e.p_imageUrl, "prix": e.price, "quantit": qtn })}>Add to Card</Button>
                                </Card.Body>
                            </Card>)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ProductCard
