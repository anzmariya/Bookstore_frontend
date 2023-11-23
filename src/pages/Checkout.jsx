import React, { useEffect, useState } from 'react'
import { getCart } from '../services/allAPI'
import { Button } from 'react-bootstrap'

function Checkout() {

  const [allCheck,setAllCheck] = useState([])

  const [total,setTotal] = useState(0)

  const viewCheckout = async ()=>{
      const response = await getCart()
      // console.log(response);
      const{data} = response
      // console.log(data);
      console.log(typeof(amount));
      setAllCheck(data)
  }
  console.log(allCheck);

  const getTotal = () => {
    const totalprice = allCheck
      .map((item) => parseFloat(item.amount)).reduce((n1, n2) => n1 + n2, 0);
    setTotal(totalprice);
  };
  
  useEffect(()=>{
    viewCheckout()
    getTotal()
  },[allCheck])
  return (
    <>
      {allCheck.length>0?<div className="row">
      <h1>Order Summary</h1>
      <h4>Total number of items : {allCheck.length}</h4>
      <h3>Price : {total}</h3>
  </div>:
  <p>Nothing to display</p>}
  <div className='text-center'>
    <Button className='btn btn-success'>Payment</Button>
  </div>
    </>
  )
  }

export default Checkout