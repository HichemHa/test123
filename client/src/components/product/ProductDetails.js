import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import './productStyle.css'
import { getProductById } from '../../JS/actions';
import Button from 'react-bootstrap/Button'
import { addToCard } from '../../JS/actions'
function ProductDetails() {

    const dispatch = useDispatch();

    const product = useSelector((state) => state.filterReducer.product);
    const cardData = useSelector(state => state.cardReducer.card);

    const { _id } = useParams();
    useEffect(() => {
        dispatch(getProductById(_id))
    }, [])
    const qtn = 1;

    const addtocard = (input) => {
        const serachResult = cardData.find(el => el.name == input.name)
        serachResult ? alert('produit deja dans le pannier') : dispatch(addToCard(input));

    }
    useEffect(() => {
        localStorage.setItem("card", JSON.stringify(cardData))
    }, [])

    return (
        <div style={{ marginTop: "200px" }}>
            {!product ? <h2>loading</h2> :

                <Container  >
                    <Row xl={8} className='row-ps'>
                        <Col className='col1-ps' sm={8}>
                            <div className="image-P" >
                                <img src={product.p_imageUrl} width="85%" />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="info">
                                <h1>{product.name}</h1>
                                <p>{product.description}</p>
                                <span> Matière : {product.matter}</span>
                            </div>
                            <p id="prix"> Prix :{product.price}</p>
                            <Button variant="primary" size="lg" block
                                onClick={() => addtocard({ "id": product._id, "name": product.name, "image": product.p_imageUrl, "prix": product.price, "quantit": qtn })}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 25"
                                    color="white"
                                >
                                    <path fill="none" d="M0 0h24v24H0zm18.31 6l-2.76 5z"></path>
                                    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                                </svg>Ajouter au panier
                            </Button>
                            <div id="ps">
                                VOS SERVICES INCLUS
                                Retour GRATUIT
                                30 jours pour changer d'avis
                                Garantie 2 ans par E-Silver
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default ProductDetails
