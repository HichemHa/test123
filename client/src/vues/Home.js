import React from 'react';
import GetProduct from '../components/product/GetProduct';
import { Container, Row, Col } from 'react-bootstrap';
import Carossel from './Carossel';
import { useSelector } from 'react-redux';


function Home({ isAuth, user,product }) {
    

    return (
        <>
            <div style={{ backgroundColor: "rgba(248, 249, 250, 1)" }}><Carossel /></div>
            
            <Container fluid style={{ backgroundColor: "rgba(248, 249, 250, 1)" }}>
                <Row style={{ backgroundColor: '#f8f9fa' }}>
                    <Col xs={12} md={12}><GetProduct product={product}  /></Col>
                </Row>
            </Container>
 
        </>
    )
}

export default Home
