import React, { useState } from 'react';
import { Button, Form, Row, Container, Col, InputGroup } from 'react-bootstrap';
import Axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { addProduct } from '../JS/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllcategory } from './../JS/actions/index';


function Addproduct() {
    const history = useHistory()
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [stock, setStock] = useState();

    const dispatch = useDispatch()
    const submitHandler = (e) => {

        dispatch(
            addProduct({ "name": name, "description": description, "price": price, "p_imageUrl": image, "category": category, "stock": stock }))
        alert("produit ajoutée avec succées")
        history.push('/');
    };
    //upload file
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await Axios.post('/product/uploadimage', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };
    const categ = useSelector((state) => state.categoryReducer.categ) || [];
    useEffect(() => {
        dispatch(getAllcategory())
    }, [dispatch])

    return (
        <Container style={{ height: "70vh", marginTop: "150px" }}>
            <h2> Add new product </h2>
            <Row>
                <Col>
                    <form >
                        <Form.Group >
                            <Form.Label>nom</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Product name" name="name" onChange={(e) => setName(e.target.value)} />
                            <Form.Label>descripton</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" onChange={(e) => setDescription(e.target.value)} />
                            <Form.Label>prix</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>

                                    <InputGroup.Text>Prix</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control size="lg" type="number" placeholder="prix" name="price" onChange={(e) => setPrice(e.target.value)} />
                                <InputGroup.Append>
                                    <InputGroup.Text>DT </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Form.Label>categorie</Form.Label>

                            <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='category' size="lg" onChange={(e) => setCategory(e.target.value)} >
                                <option></option>
                                {categ.map(el => <option>{el.categoryName}</option>)}


                            </Form.Control>
                            <Form.Label> Stock </Form.Label>
                            {/* 
                            <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='stock' size="lg"  > */}
                            <Form.Control size="lg" type="number" placeholder="stock" name="stock" onChange={(e) => setStock(e.target.value)}></Form.Control>

                        </Form.Group>
                        {/* <Form.File id="exampleFormControlFile1" label="choisir image" name="p_imageUrl" onChange={(e)=>uploadFileHandler(e.target.value)} /> */}
                        <div>
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                type="text"
                                placeholder="Enter image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="imageFile">Image File</label>
                            <input
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={uploadFileHandler}
                            ></input>
                            {loadingUpload && <LoadingBox></LoadingBox>}
                            {errorUpload && (
                                <MessageBox variant="danger">{errorUpload}</MessageBox>
                            )}
                        </div>
                        <Button variant="primary" size="lg" onClick={submitHandler}>
                            Enregistrer
                 </Button>
                    </form>
                </Col>
            </Row>
        </Container>

    )
}

export default Addproduct
