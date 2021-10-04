import React, { useEffect } from 'react';
import { confirmCard, getAllOrder } from './../JS/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { useState } from 'react';
import { deleteproduct } from './../JS/actions/index';

function OrderManagment() {


    const orders = useSelector((state) => state.cardReducer.allcard) || [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrder())
    }, [dispatch])
    const deleteProductHandler = (id) => {
        //  x ? dispatch(deleteproduct(id))
        let xx = window.confirm('are you sure ?')

        if (xx) {
            dispatch(deleteproduct(id))
        }
    }
    const [id, setId] = useState()
    const [newConfirm, setNewConfrim] = useState();

    // let x = orders.filter(e => e._id == id).map((el) => el.confirm)
    // if (x[0] === "true") {
    //     x[0] = "false"
    // } else {
    //     x[0] = "true"
    // }
    // console.log('iddd', id, x[0])
    // const handelchange = () => {
    //     dispatch(confirmCard({
    //         _id: id,
    //         confirm: x[0]
    //     }))
    // }
    const handerlsubmitconfirm = (event) => {
        setId(event);
    }
    console.log('iddd', id)
    return (
        <div>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "space-around", marginTop: "150px" }} >
                <Table striped bordered hover style={{ textAlign: "center", width: "80%", fontSize: "large" }} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>client </th>
                            <th>price</th>
                            <th>product list</th>
                            <th>Etat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((el, i) =>
                            <tr >
                                <td style={{ width: "15%" }}>{el._id}</td>
                                <td><ul style={{ listStyle: "none" }}>
                                    <li> {el.client.name} </li>
                                    <li> {el.client.email} </li>
                                    <li> {el.client.phoneNumber} </li>
                                </ul> </td>
                                <td>{el.somme} </td>
                                <td>{el.cardList.map((e) =>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>{e.name} <span style={{ color: "red" }}>x</span> {e.quantit}</li>
                                    </ul>
                                )} </td>
                                <td> {el.confirm == true ? <p>confirmé </p> : <p>non confirmé</p>} </td>
                                {/* <td> <Link to={`/editorder/more/${el._id}`} style={{ marginRight: "25px" }}><i class="fa fa-pencil-square-o" aria-hidden="true">  </i>  </Link> <a onClick={() => deleteProductHandler(el._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></a>   </td> */}

                                <td>
                                    <DropdownButton title="Confirmation" id="bg-nested-dropdown">
                                        <Dropdown.Item ><Link to={`/order/confirm/${el._id}`} > {el.confirm ? <p>Annulé comfirmation / supp</p> : <p>confimré / supp</p>}</Link> </Dropdown.Item >

                                    </DropdownButton>
                                </td>



                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div >
    )
}

export default OrderManagment
