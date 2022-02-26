import React, { useState, useEffect } from 'react'
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import AdminPage from '../ShoppingCart/adminpage';
function DummyApp() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onProductAdd = (product) => {
        const exist = cartItems.find((item) => item.productid === product.productid);
        if (exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.productid === product.productid ? { ...exist, qty: exist.qty + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onProductRemove = (product) => {
        const exist = cartItems.find((item) => item.productid === product.productid);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((item) => item.productid !== product.productid));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.productid === product.productid ? { ...exist, qty: exist.qty - 1 } : item
                )
            );
        }
    };
    return(
        <div>
        <div className="App">
            <Header></Header>
            <div className="row">
                <Main products={products} onProductAdd={onProductAdd}></Main>
                <Basket
                    cartItems={cartItems}
                    onProductAdd={onProductAdd}
                    onProductRemove={onProductRemove}
                ></Basket>
            </div>
        </div>
    </div>
    )
}
export default DummyApp