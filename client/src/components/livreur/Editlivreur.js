import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Switch from "react-switch";
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { deletelivreur, getAlllivreur } from '../../JS/actions/index';



function Editlivreur() {
    const dispatch = useDispatch();
    const deleteLivreurHandler = (id) => {
        //  x ? dispatch(deleteproduct(id))
        let xx = window.confirm('are you sure ?')

        if (xx) {
            dispatch(deletelivreur(id))
        }
    }
    const livreur = useSelector((state) => state.livreurReducer.livreur) || [];
    useEffect(() => {
        dispatch(getAlllivreur())
    }, [])
    const [avaible, setAvaile] = useState();
    return (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-around", height: "80vh", marginTop: "150px" }} >
            <Table striped bordered hover style={{ textAlign: "center", width: "80%", fontSize: "large" }} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>adress</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {livreur.map((el, i) =>
                        <tr >
                            <td style={{ width: "15%" }}>{el._id}</td>
                            <td>{el.name} </td>
                            <td>{el.address} </td>
                            <td>{el.numberPhone} </td>


                            <td>  <Link to={`/editlivreur/more/${el._id}`} style={{ marginRight: "25px" }}><i class="fa fa-pencil-square-o" aria-hidden="true">  </i>  </Link>  <a onClick={() => deleteLivreurHandler(el._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></a>   </td>
                        </tr>
                    )}
                </tbody>
            </Table >
        </div >
    )
}

export default Editlivreur


{/* <span> avaible: </span> {el.isAvaible ? <p>yes</p> : <p>non</p>}  <div>  <Button onClick={() => dispatch(editlivreur(el._id))} >reserve</Button> </div> */ }