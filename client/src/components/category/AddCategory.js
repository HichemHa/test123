import React from 'react'
import { useState } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import { addCategory } from '../../JS/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddCategory() {
    const history = useHistory();
    const [cat, setCat] = useState("");
    console.log(cat)
    const dispatch = useDispatch()
    const handelSubmit = () => {
        if (cat === '') {
            return null;
        } else {
            dispatch(addCategory({ "categoryName": cat }));
            history.push('/editcategory');
        }

    }
    return (
        <Container>
            <Row>

                <h3 style={{ margin: "40px" }}>
                    Ajouter une nouvelle catégorie
                </h3>
                <Form.Control style={{ margin: "40px" }} size="lg" type="text" placeholder="category
                " onChange={(e) => setCat(e.target.value)} required />
                <Button style={{ margin: "40px" }} onClick={handelSubmit}  >
                    Ajouté
                </Button>
            </Row>
        </Container>
    )
}

export default AddCategory
