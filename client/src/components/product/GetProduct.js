import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../../JS/actions";
import { useEffect } from "react";
import ProductCard from './ProductCard';
import { Spinner, CardGroup } from 'react-bootstrap';


function GetProduct() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList())
    }, [dispatch])
    
    const product = useSelector((state) => state.productReducer.product);
    const loading = useSelector((state) => state.productReducer.loading);
    // console.log(loading);
    return (
        <div  >
            {/* {console.log(product)} */}
            <CardGroup> {!product ? <Spinner animation="border" /> : <ProductCard product={product} />}</CardGroup>
            
        </div>
    )
}

export default GetProduct
