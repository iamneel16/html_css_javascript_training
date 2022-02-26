import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onProductAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {/* {products.map((product) => ( */}
          <Product onProductAdd={onProductAdd}></Product>
        {/* ))} */}
      </div>
    </main>
  );
}