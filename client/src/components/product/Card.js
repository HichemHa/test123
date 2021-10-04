import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { quantIncriment, quantDecriment, deleteFromCard, placeOrder } from '../../JS/actions/'
import './productStyle.css';
import { useHistory } from "react-router-dom";
function Card() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();
    const cardData = useSelector(state => state.cardReducer.card)
    const dispatch = useDispatch()
    const somme = cardData.reduce((s, el) => s + el.prix * el.quantit, 0)
    const sommelistcard = cardData.reduce((s, el) => s + 1, 0)

    console.log("somme", somme);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);


    const orderSubmit = () => {
        if (isAuth) {
            // dispatch(placeOrder({ "cardList": cardData, "client": user, "somme": somme }));
            // alert('commande passé avec succée');

            history.push('/checkout')
            setShow(false)
        } else {
            history.push('/login')
            setShow(false)
        }


    }

    return (

        <>
            <Button onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" fill="white !important" width="35px" height="40px"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg> {sommelistcard}
            </Button>

            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Votre panier</Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    {/* <h4>Votre panier</h4> */}
                    <p>
                        {cardData.map((el, i) =>

                            <ListGroup horizontal className="my-2 " style={{ textAlign: "center" }} >
                                <ListGroup.Item className="listcard" style={{ width: "24%" }}>{el.name}</ListGroup.Item>
                                <ListGroup.Item ><img src={el.image} width="50px" style={{ margin: "0", padding: "0" }} /></ListGroup.Item>
                                <ListGroup.Item>{el.prix} DT</ListGroup.Item>
                                <ListGroup.Item ><span><button style={{ backgroundColor: "silver", width: '20px', color: "white" }} onClick={() => dispatch(quantDecriment(i))}>-</button> <span>Quantité : {el.quantit}</span><button style={{ backgroundColor: "silver", width: '20px', margin: "3px", color: "white" }} onClick={() => dispatch(quantIncriment(i))}>+</button></span></ListGroup.Item>
                                <ListGroup.Item>{el.prix * el.quantit} DT</ListGroup.Item>
                                <ListGroup.Item><a onClick={() => dispatch(deleteFromCard(i))}><img src="/x.png" width="20px" /></a></ListGroup.Item>
                            </ListGroup>

                        )}
                        {somme > 0 ?
                            <ListGroup horizontal className="my-2 " style={{ textAlign: "center", width: '100%' }} >
                                <ListGroup.Item className="listcard" style={{ width: "24%" }}> somme : {somme} </ListGroup.Item>
                            </ListGroup> : ""
                        }

                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => orderSubmit()}>Passer la commande</Button>{' '}
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Card
