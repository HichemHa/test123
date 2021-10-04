import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { editproduct, getProductList } from '../JS/actions';
import { Button, Form, Row, Container, Col, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { editlivreur, editCategory } from './../../JS/actions/index';

function EditCategoryMore() {
    const history = useHistory();
    const { _id } = useParams();
    console.log("id", _id)
    const [cat, setCat] = useState();
    const categ = useSelector((state) => state.categoryReducer.categ) || [];
    const dispatch = useDispatch();
    const submitHandler = () => {
        dispatch(editCategory({
            _id: _id,
            "categoryName": cat,

        }))

        history.push('/editcategory');
    };
    return (
        <div>
            <Container style={{ height: "70vh", marginTop: "150px", marginBottom: "50px" }}>
                < h2 > Edit product </h2>
                {categ.filter((el) => el._id == _id).map((el, i) =>
                    <Row>
                        <Col>
                            <form >
                                <Form.Group>
                                    <Form.Label>nom de la category</Form.Label>

                                    <Form.Control size="lg" type="text" name="name" defaultValue={el.categoryName} id={i} onChange={(e) => setCat(e.target.value)} />

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

export default EditCategoryMore
