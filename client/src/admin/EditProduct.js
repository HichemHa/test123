import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../JS/actions';
import { Table, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { deleteproduct } from './../JS/actions/index';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function EditProduct() {
    const history = useHistory()
    const dispatch = useDispatch();
    const deleteProductHandler = (id) => {
        //  x ? dispatch(deleteproduct(id))
        let xx = window.confirm('are you sure ?')

        if (xx) {
            dispatch(deleteproduct(id))
        }
    }
    const product = useSelector((state) => state.productReducer.product) || [];
    useEffect(() => {
        dispatch(getProductList())
    }, [product])


    return (
        <>
            <Container>
                <Row>

                    <Button style={{ width: '200px' }} onClick={() => history.push('/addproduct')}> Ajouter Produit</Button>
                </Row>
            </Container>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "space-around", height: "80vh", marginTop: "15px" }} >

                <Table striped bordered hover style={{ textAlign: "center", width: "80%", fontSize: "large" }} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((el, i) =>
                            <tr >
                                <td style={{ width: "15%" }}>{el._id}</td>
                                <td>{el.name} </td>
                                <td>{el.price} </td>
                                <td>{el.category} </td>
                                <td>{el.stock} </td>

                                <td> <Link to={`/editproduct/more/${el._id}`} style={{ marginRight: "25px" }}><i class="fa fa-pencil-square-o" aria-hidden="true">  </i>  </Link> <a onClick={() => deleteProductHandler(el._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></a>   </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default EditProduct;
