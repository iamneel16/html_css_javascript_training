import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default function Product(props) {
  const [productData, setProductData] = useState([])
 
    const [filter,setFilter] = useState('')
    const searchText = (event)=>{
      setFilter(event.target.value)
      console.log(filter)
    }

    let searchData = productData.filter(item=>{

      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
  useEffect(() => {
    axios.get("http://localhost:5000/product/product").then(response => {
            //     console.log(response)
            //     console.log(response.data)
            console.log(response.data)
            setProductData(response.data)
    })
}, []);
  
  // const { product, onProductAdd } = props;
  return (


    <div>
      <input type='text' className='form-control' value={filter} onChange={searchText.bind(this)} placeholder='Enter Text To Search'></input>
      <div className='imgflex'>
      {searchData.map((product, idx) => (
        <div key={idx}>
          <h3><img className='small' src={product.img} alt={product.productname}/></h3>
          <h3>{product.productname}</h3>
        <div>₹{product.price}</div>
        <div>{product.description}</div>
        <div>

          <button className onClick={() => props.onProductAdd(product)}>Add To Cart</button>
        </div>
        </div>
      ))}
      </div>
      
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      
    </div>
  );
}