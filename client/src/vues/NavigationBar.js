import React, { useState, useEffect } from 'react'
import './stylenav.css';
import { Navbar, Nav, NavDropdown, FormControl, Button, Form, InputGroup } from 'react-bootstrap';
import Card from '../components/product/Card';
import { useDispatch } from 'react-redux';
import { filterName } from "../JS/actions";
import { useHistory } from "react-router-dom";

function NavigationBar({ isAuth, user, loading }) {
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const submitHandler = () => {
        dispatch(filterName(name));
        console.log(name)
    }

    const onSubmit = data => console.log(data);

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.clear();
    }

    return (

        <>
            {loading ? <h1>Please wait </h1> :
                <>
                    <div className="topnav">
                        <div style={{ width: "800px", display: "flex", justifyContent: 'space-between', alignContent: 'center' }}>
                            <Button href="/contact">+216 71 000 000</Button>
                            {/* <button>login in</button>
                    <button>register</button> */}

                            {user == null ?
                                <>
                                    <Button className="allBtn" href="/register">Register</Button>
                                    <Button href="/Login">Log in</Button>
                                    {/* <NavDropdown.Divider /> */}
                                </>

                                : user.isAdmin ?
                                    <NavDropdown title={user.name} style={{ textAlign: "center !important" }}>

                                        {/* <NavDropdown.Item href="/addproduct" >Add product</NavDropdown.Item> */}
                                        <NavDropdown.Item href="/editproduct" >gestion product</NavDropdown.Item>
                                        <NavDropdown.Item href="/editcategory" >gestion category</NavDropdown.Item>
                                        <NavDropdown.Item href="/order" >Order</NavDropdown.Item>
                                        <NavDropdown.Item href="/addlivreur" >Add livreur</NavDropdown.Item>
                                        <NavDropdown.Item href="/editlivreur" >Edit livreur</NavDropdown.Item>
                                        <NavDropdown.Item href='/' onClick={logOut}>Logout</NavDropdown.Item>
                                    </NavDropdown> :
                                    <NavDropdown title={user.name} style={{ textAlign: "center !important" }}>
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="/card">Card</NavDropdown.Item>
                                        <NavDropdown.Item href='/' onClick={logOut}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                            }
                        </div>
                    </div>
                    <div className="navPrincipale">
                        <h1 > <a id="headerOne" href="/">FENETRE STORE</a></h1>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="text" placeholder="Search" onChange={(e) => setName(e.target.value)}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={submitHandler}>Recherche</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div>
                            <a onClick={() => setModalShow(true)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 22" fill="black !important" width="35px" height="40px"><path d="M0 0h24v24H0z" fill="none" /></svg></a>
                            {user == null ? <Card show={modalShow} onHide={() => setModalShow(false)} /> : user.isAdmin ? "" : <Card show={modalShow} onHide={() => setModalShow(false)} />}

                        </div>
                    </div>
                    <div style={{ width: "60%", textAlign: "center", margin: "auto" }}>
                        <ul className="listnav">

                            <li><a style={{ padding: "15px" }} href='/'>Home</a></li>

                            <li>
                                <NavDropdown title="Categorie" id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item href="/produit/bureautique">PC BUREAUTIQUE</NavDropdown.Item>
                                    <NavDropdown.Item href="/produit/portatif">PC PORTABLE</NavDropdown.Item>
                                    <NavDropdown.Item href="/produit/smartphone">SMARTPHONE</NavDropdown.Item>
                                    <NavDropdown.Item href="/produit/accessoire">ACCESSOIRES</NavDropdown.Item> */}


                                </NavDropdown>

                            </li>
                            <li><a style={{ padding: "15px" }} href='/contact'>Contact</a></li>
                            <li><a style={{ padding: "15px" }} href='/checkout'>Checkout page</a></li>
                        </ul>
                    </div>
                </>
            }

        </>
    )
}

export default NavigationBar
