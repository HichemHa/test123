import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { addToCard, getProductList } from '../../JS/actions';
import { Spinner, CardGroup, Container } from 'react-bootstrap';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function ProduitPcBureau() {
    const addtocard = (input) => {
        const serachResult = cardData.find(el => el.name == input.name)
        serachResult ? alert('produit deja dans le pannier') : dispatch(addToCard(input));

    }
    const cardData = useSelector(state => state.cardReducer.card);
    const qtn = 1;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])
    const product = useSelector((state) => state.productReducer.product);
    return (
        <CardGroup>
            <Col><h2 style={{ textAlign: "center", margin: "50px" }}>PC Bureau </h2></Col>
            <Container fluid >
                <Row >
                    <Col sm style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center" }}>
                        {!product ? <Spinner animation="border" /> : product.filter((el) => el.category == "PC_BUREAU").map((e) =>
                            <Card style={{ width: '22rem', margin: "10px" }}>
                                <Link to={`/product/${e._id}`} style={{ textDecoration: "none", color: "black" }} >
                                    <Card.Img variant="top" src={e.p_imageUrl} />
                                </Link>
                                <Card.Body style={{ textAlign: "center", }}>
                                    <Card.Title>{e.name} </Card.Title>
                                    <Card.Text style={{ fontSize: "large" }}>
                                        {e.price} DT
                                    </Card.Text>
                                    <Card.Text style={{ fontSize: "large" }}>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addtocard({ "id": e._id, "name": e.name, "image": e.p_imageUrl, "prix": e.price, "quantit": qtn })}>Ajouter au panier</Button>
                                </Card.Body>
                            </Card>)}
                    </Col>
                </Row>
            </Container>
        </CardGroup>
    )
}

export default ProduitPcBureau
