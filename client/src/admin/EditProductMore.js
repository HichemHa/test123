import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { editproduct, getProductList } from '../JS/actions';
import { Button, Form, Row, Container, Col, InputGroup } from 'react-bootstrap';
import Axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useHistory } from "react-router-dom";

function EditProductMore() {
    const history = useHistory();
    const { _id } = useParams();
    console.log("id", _id)
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [stock, setStock] = useState();

    const product = useSelector((state) => state.productReducer.product) || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList())
    }, [product])

    const submitHandler = () => {
        dispatch(editproduct({
            _id: _id,
            name,
            description,
            p_imageUrl: image,
            price,
            category,
            stock,
        }))

        history.push('/admin/editproduct/');
    };
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
    return (
        <div>
            <Container style={{ height: "70vh", marginTop: "150px" }}>
                < h2 > Edit product </h2>
                {product.filter((el) => el._id == _id).map((el, i) =>
                    <Row>
                        <Col>
                            <form >
                                <Form.Group>
                                    <Form.Label>nom</Form.Label>

                                    <Form.Control size="lg" type="text" name="name" defaultValue={el.name} id={i} onChange={(e) => setName(e.target.value)} />
                                    <Form.Label>descripton</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="description" defaultValue={el.description} onChange={(e) => setDescription(e.target.value)} />
                                    <Form.Label>prix</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>

                                            <InputGroup.Text>Prix</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control size="lg" type="number" defaultValue={el.price} name="price" onChange={(e) => setPrice(e.target.value)} />
                                        <InputGroup.Append>
                                            <InputGroup.Text>DT </InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Form.Label>categorie</Form.Label>

                                    <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='category' size="lg" defaultValue={el.category} onChange={(e) => setCategory(e.target.value)} >
                                        <option></option>
                                        <option>PC_BUREAU</option>
                                        <option>PC_PORTATIF</option>
                                        <option>SMARTPHONE</option>
                                        <option>ACCESSOIRE</option>
                                    </Form.Control>
                                    <Form.Label> Stock </Form.Label>
                                    {/* 
                            <Form.Control style={{ lineHeight: "1.9rem" }} as="select" name='stock' size="lg"  > */}
                                    <Form.Control size="lg" type="number" placeholder="stock" name="stock" onChange={(e) => setStock(e.target.value)}></Form.Control>
                                </Form.Group>
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
                )}
            </Container>

        </div >
    )
}

export default EditProductMore
