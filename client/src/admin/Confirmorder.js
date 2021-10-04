import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { confirmCard, getAllOrder, deleteOrder } from './../JS/actions/index';
import { useState } from 'react';

function Confirmorder() {
    const { _id } = useParams();
    const orders = useSelector((state) => state.cardReducer.allcard) || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrder())
    }, [dispatch])
    const x = orders.find((e) => e._id == _id)
    const [cc, setCC] = useState(x)
    return (
        <Container fluid style={{ margin: "auto" }}>

            <Row style={{ margin: "auto" }}>
                <Col style={{ margin: "auto" }}>
                    <Button onClick={() => dispatch(confirmCard({ _id }))}>{cc.confirm ? <p>Annulé comfirmation</p> : <p>confimré</p>}</Button>
                </Col>
                <Col style={{ margin: "auto" }}>
                    <Button onClick={() => dispatch(deleteOrder({ _id }))}>supprimé commande</Button>
                </Col>
            </Row>

        </Container>
    )
}

export default Confirmorder
