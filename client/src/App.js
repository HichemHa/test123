import { Switch, Route, Redirect } from "react-router-dom";
import React from 'react';
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { getProductList, getProfile } from "./JS/actions";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./vues/Home";
import NavigationBar from './vues/NavigationBar'
import ProductDetails from "./components/product/ProductDetails";
import { addToCard } from './JS/actions'
import Addproduct from './admin/Addproduct';
import ProduitPcBureau from './components/product/ProduitPcBureau'
import ProductPortatif from './components/product/ProductPortatif';
import ProductSmartphone from './components/product/ProductSmartphone';
import Footer from "./vues/Footer";
import EditProduct from './admin/EditProduct';
import EditProductMore from './admin/EditProductMore';
import OrderManagment from './admin/OrderManagment';
import ContactPage from './vues/ContactPage';
import ProductAccessoire from './components/product/ProductAccessoire';
import Checkout from './vues/Checkout';
import AddLivreur from './components/livreur/AddLivreur';
import Editlivreur from './components/livreur/Editlivreur';
import EditLivreurMore from './components/livreur/EditLivreurMore';
import Confirmorder from './admin/Confirmorder';
import AddCategory from './components/category/AddCategory.js';
import EditCategory from './components/category/EditCategory';
import EditCategoryMore from './components/category/EditCategoryMore';
import { useHistory } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const cardData = useSelector(state => state.cardReducer.card);
  // const test = []
  // useEffect(() => {
  var test2 = localStorage.getItem('card');
  var test = test2 ? JSON.parse(test2) : []
  localStorage.setItem('card', JSON.stringify(test));
  // }, [])
  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);
  const cardlocaldata = JSON.parse(localStorage.getItem('card') || []);
  useEffect(() => {
    dispatch(addToCard(cardlocaldata))
  }, [])
  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(cardData))
  }, [cardlocaldata])


  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  const product = useSelector((state) => state.productReducer.product);
  const history = useHistory();

  return (
    <div className="App" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="navigation-bar" >
        <NavigationBar isAuth={isAuth} user={user} />
      </div>
      <div style={{ marginTop: "30px", backgroundColor: "rgba(248, 249, 250, 1)", width: "100%" }} >
        <Switch>
          <Route exact path="/" render={() => <Home isAuth={isAuth} user={user} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/register" render={() => <Register isAuth={isAuth} user={user} loading={loading} />} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/addproduct" component={Addproduct} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editproduct" component={EditProduct} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editproduct/more/:_id" component={EditProductMore} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/order" component={OrderManagment} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/addlivreur" component={AddLivreur} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editlivreur" component={Editlivreur} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editlivreur/more/:_id" component={EditLivreurMore} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/order/confirm/:_id" component={Confirmorder} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/addcategory" component={AddCategory} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editcategory" component={EditCategory} /> : ""}
          {user == null ? "" : user.isAdmin ? <PrivateRoute exact path="/editcategory/more/:_id" component={EditCategoryMore} /> : ""}



          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/produit/bureautique" render={() => <ProduitPcBureau />} />
          <Route exact path="/produit/portatif" render={() => <ProductPortatif />} />
          <Route exact path="/produit/smartphone" render={() => <ProductSmartphone />} />
          <Route exact path="/produit/accessoire" render={() => <ProductAccessoire />} />

          <Route exact path="/product/:_id" render={() => <ProductDetails />} />

        </Switch>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
