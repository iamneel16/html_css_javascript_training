import React from 'react';
import { useNavigate } from 'react-router';
export default function Header(props) {
  const navigate = useNavigate()
  return (
    <header className="block row center">
      <div>
        
          <h1>Shopping Cart</h1>
        
          <h3><button className='signoutbutton' onClick={()=>navigate('/')}>Sign Out</button></h3>

      </div>
      <div>
        {/* <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '} */}
        {/* <a href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}