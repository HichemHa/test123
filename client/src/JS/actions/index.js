import {
  USER_REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PRODUCT,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_SUCCESS,
  GET_PRODUCT_BY_FAIL,
  ADD_TO_CARD,
  GET_CARD,
  DELETE_FROM_CARD,
  UPDATE_CARD,
  QUANT_INCRIMENT,
  QUANT_DECRIMENT,
  PALCE_ORDER,
  PALCE_ORDER_SUCCESS,
  PALCE_ORDER_FAIL,
  FILTER_NAME,
  DELETE_PRODUCT_FAIL,
  GET_ORDER_FAIL,
  ADD_LIVREUR,
  GET_LIVREUR,
  DELETE_LIVREUR,
  UPDATE_LIVREUR,
  CONFIRM_ORDER,
  CONFIRM_ORDER_SUCCESS,
  CONFIRM_ORDER_FAIL,
  DELETE_ORDER, DELETE_ORDER_SUCC, DELETE_ORDER_FAIL,
  ADD_CATEGORY,
  GET_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants/actionsTypes";
import axios from "axios";
import { EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, DELETE_PRODUCT, DELETE_PRODUCT_SECCESS, GET_ORDER, GET_ORDER_SUCCESS } from './../constants/actionsTypes';

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const addResult = await axios.post("/user/register", newUser);

    dispatch({ type: REGISTER_SUCCESS, payload: addResult.data });
  } catch (error) {
    // error.response.data.errors.map((el) => alert(el.msg));

    dispatch({ type: REGISTER_FAIL, payload: error.response.data });
  }
};

export const userLogin = (userLog) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const loginResult = await axios.post("/user/login", userLog);

    // console.log(loginResult);
    localStorage.setItem("token", loginResult.data.token);

    dispatch({ type: LOGIN_SUCCESS, payload: loginResult.data });
  } catch (error) {
    // console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const user = await axios.get("/user/current", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response });
  }
};
//product 
export const filterName = (payload) => async (dispatch) => {
  dispatch({ type: FILTER_NAME, payload: payload })
}
export const addProduct = (product) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT });
  try {
    const addProductRegister = await axios.post('/product/add', product);
    await dispatch({ type: ADD_PRODUCT_SUCCESS, payload: addProductRegister.response })
  } catch (error) {
    await dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data });
  }
}

export const getProductList = () => async (dispatch) => {
  await dispatch({ type: GET_PRODUCT });
  try {
    const products = await axios.get('/product/');
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: products.data });

  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.response.data })
  }
}
export const getProductById = (id) => async (dispatch) => {
  await dispatch({ type: GET_PRODUCT_BY_ID });
  try {
    const productID = await axios(`/product/product/${id}`);
    dispatch({ type: GET_PRODUCT_BY_SUCCESS, payload: productID.data })
  } catch (error) {
    dispatch({ type: GET_PRODUCT_BY_FAIL, payload: error.response.data })

  }
}
export const editproduct = (editprod) => async (dispatch) => {
  await dispatch({ type: EDIT_PRODUCT })
  try {
    const editResult = await axios.put(`/product/update/${editprod._id}`, editprod);
    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: editResult.response });
  } catch (error) {
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error.response })
  }
}

export const deleteproduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });
  try {
    const deleteResult = await axios.delete(`/product/delete/${id}`);
    dispatch({ type: DELETE_PRODUCT_SECCESS, payload: deleteResult.response.data })

  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.response })
  }
}


//card 
export const addToCard = (payload) => async (dispatch) => {
  await dispatch({ type: ADD_TO_CARD, payload });

}
export const getCard = () => async (dispatch) => {
  await dispatch({ type: GET_CARD });

}
export const deleteFromCard = (payload) => async (dispatch) => {
  await dispatch({ type: DELETE_FROM_CARD, payload });

}

export const updateCard = (payload) => async (dispatch) => {
  await dispatch({ type: UPDATE_CARD, payload });
}

export const quantIncriment = (payload) => (dispatch) => {
  dispatch({ type: QUANT_INCRIMENT, payload })
}
export const quantDecriment = (payload) => (dispatch) => {
  dispatch({ type: QUANT_DECRIMENT, payload })
}

export const confirmCard = (confirm) => async (dispatch) => {

  await dispatch({ type: CONFIRM_ORDER })
  try {
    const editResult = await axios.put(`/card/confirm`, confirm);
    dispatch({ type: CONFIRM_ORDER_SUCCESS, payload: editResult.response });
  } catch (error) {
    dispatch({ type: CONFIRM_ORDER_FAIL, payload: error.response })
  }
}
//commande

export const placeOrder = (order) => async (dispatch) => {
  await dispatch({ type: PALCE_ORDER });
  try {
    const orderResult = await axios.post('/card/addcard', order);
    dispatch({ type: PALCE_ORDER_SUCCESS, payload: orderResult.data })
  } catch (error) {
    dispatch({ type: PALCE_ORDER_FAIL, payload: error.response.data });

  }
}

export const getAllOrder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER })
  try {
    const getorderResult = await axios('/card/getall');
    dispatch({ type: GET_ORDER_SUCCESS, payload: getorderResult.data })
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.response.data })

  }
}

// livreur
export const addLivreur = (livreur) => async (dispatch) => {
  dispatch({ type: ADD_LIVREUR });
  try {
    const addProductRegister = await axios.post('/livreur/addlivreur', livreur);
    await dispatch({ type: ADD_LIVREUR, payload: addProductRegister.response })
  } catch (error) {
    console.log('erreur', error)
  }
}

export const getAlllivreur = () => async (dispatch) => {
  dispatch({ type: GET_LIVREUR })
  try {
    const getorderResult = await axios('/livreur/getalllivreur');
    dispatch({ type: GET_LIVREUR, payload: getorderResult.data })
  } catch (error) {

    console.log('erreur', error)
  }
}
export const deletelivreur = (id) => async (dispatch) => {
  dispatch({ type: DELETE_LIVREUR });
  try {
    const deleteResult = await axios.delete(`/livreur/deletelivreur/${id}`);
    dispatch({ type: DELETE_LIVREUR, payload: deleteResult.response.data })

  } catch (error) {
    console.log('erreur', error)
  }
}

export const editlivreur = (editliv) => async (dispatch) => {
  await dispatch({ type: UPDATE_LIVREUR })
  try {
    const editResult = await axios.put(`/livreur/editlivreur/${editliv._id}`, editliv);
    dispatch({ type: UPDATE_LIVREUR, payload: editResult.response });
  } catch (error) {
    console.log('erreur', error)
  }
}


export const deleteOrder = (del) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER })
  try {
    const deleteResult = await axios.delete(`/card/delete/${del._id}`);

    dispatch({ type: DELETE_ORDER_SUCC, payload: deleteResult.response })
  } catch (error) {
    console.log('err delete', error)
    dispatch({ type: DELETE_ORDER_FAIL, payload: error.response })
  }
}
//category

export const addCategory = (category) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY });
  try {
    const addProductRegister = await axios.post('/category/addcategory', category);
    await dispatch({ type: ADD_CATEGORY, payload: addProductRegister.response })
  } catch (error) {
    console.log('erreur', error)
  }
}

export const getAllcategory = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY })
  try {
    const getorderResult = await axios('/category/getallcategory');
    dispatch({ type: GET_CATEGORY, payload: getorderResult.data })
  } catch (error) {

    console.log('erreur', error)
  }
}
export const deletelcategory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY });
  try {
    const deleteResult = await axios.delete(`/category/deletecategory/${id}`);
    dispatch({ type: DELETE_CATEGORY, payload: deleteResult.response.data })

  } catch (error) {
    console.log('erreur', error)
  }
}

export const editCategory = (editcategory) => async (dispatch) => {
  await dispatch({ type: UPDATE_CATEGORY })
  try {
    const editResult = await axios.put(`/category/editcategory/${editcategory._id}`, editcategory);
    dispatch({ type: UPDATE_CATEGORY, payload: editResult.response });
  } catch (error) {
    console.log('erreur', error)
  }
}


// export const deleteCategory = (del) => async (dispatch) => {
//   dispatch({ type: DELETE_CATEGORY })
//   try {
//     const deleteResult = await axios.delete(`/category/deletecategory/${del._id}`, del);

//     dispatch({ type: DELETE_CATEGORY, payload: deleteResult.response })
//   } catch (error) {
//     console.log('err delete', error)
//     dispatch({ type: DELETE_CATEGORY, payload: error.response })
//   }
// }