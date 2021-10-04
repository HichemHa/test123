import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Switch from "react-switch";
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { deletelcategory, getAllcategory } from './../../JS/actions/index';
import { useHistory } from 'react-router-dom';




function EditCategory() {
    const history = useHistory();
    const dispatch = useDispatch();
    const categ = useSelector((state) => state.categoryReducer.categ) || [];
    useEffect(() => {
        dispatch(getAllcategory())
    }, [dispatch])
    const handelDelete = (x) => {
        dispatch(deletelcategory(x));
        window.location.reload();
    }
    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-around", height: "80vh", marginTop: "150px" }} >
            <Button onClick={() => history.push('/addcategory')}>Ajouter categorie</Button>
            <Table striped bordered hover style={{ textAlign: "center", width: "80%", fontSize: "large" }} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categ.map((el, i) =>
                        <tr >
                            <td style={{ width: "15%" }}>{el._id}</td>
                            <td>{el.categoryName} </td>


                            <td>  <Link to={`/editcategory/more/${el._id}`} style={{ marginRight: "25px" }}><i class="fa fa-pencil-square-o" aria-hidden="true">  </i>  </Link>  <a onClick={() => handelDelete(el._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></a>    </td>
                        </tr>
                    )}
                </tbody>
            </Table >
        </div >
    )
}

export default EditCategory
