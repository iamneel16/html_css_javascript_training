import React,{useState} from 'react';
import axios from 'axios'

export default function Basket(props) {
  const { cartItems, onProductAdd, onProductRemove } = props;
  const itemsPrice = cartItems.reduce((a, b) => a + b.qty * b.price, 0);
  const taxPrice = itemsPrice * 0.25;
  const shippingPrice = itemsPrice > 2000 ? 0 : 500;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [flag,setFlag] = useState(false)
  const onClickHandle=(e)=>{
    e.preventDefault();
      setFlag(true)
      console.log(cartItems)
      const URL = "http://localhost:5000/order/userorder";
      axios.post(URL,cartItems).then(response=>{
      console.log(response);
     
  });

  }
  var abc = []
  console.log(totalPrice)
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.productid} className="row">
            <div className='col-1'>{item.productid}</div>
            <div className="col-2">{item.productname}</div>
            <div className="col-2">
              <button onClick={() => onProductRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onProductAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ₹{item.price.toFixed(2)}
              {/* {console.log(item.productname,item.qty)} */}
              
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">₹{itemsPrice.toFixed(3)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">₹{taxPrice.toFixed(3)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ₹{shippingPrice.toFixed(3)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice.toFixed(3)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              {/* Address<input type='text' required="required"></input> */}
              <button onClick={(e) => onClickHandle(e)}>
                Checkout
              </button>
              
            </div>
            {flag ?
            "Order Placed Successfully"
            :""}
          </>
        )}
      </div>
    </aside>
  );
}