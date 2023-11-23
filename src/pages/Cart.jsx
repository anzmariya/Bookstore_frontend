import React, { useEffect, useState } from 'react'
import { deleteCart, getCart } from '../services/allAPI'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Cart() {
    const [allCart,setAllCart] = useState({})

    const viewCart = async ()=>{
        const response = await getCart()
        // console.log(response);
        const{data} = response
        // console.log(data);
        setAllCart(data)
    }
    console.log(allCart);

    const dltcart=async(id)=>
    {
        const response=await deleteCart(id)
        console.log(response);
    }

    useEffect(()=>{
        viewCart()
        dltcart()
    },[dltcart])
  return (
    <div className="row">
    
    { allCart?.length>0?

    allCart?.map((item)=>(
        <div className="col-md-3 mb-3">
        <div class="card">
            <div class="card-image" >
                <img height={200} className='w-100' src={item.url} />
            </div>
            <div class="card-text w-100" style={{ margin: '2px' }} >

                <h6 >{item.bookName}</h6>
                <p style={{ color: 'grey', fontSize: '14px' }}>{item.author}</p>
                <h6>₹ {item.amount}</h6>
            </div>

            <div className='d-flex justify-content-between align-items-center p-4'>
                <Button className='btn btn-warning' >Add to Cart</Button>
                <Button className='btn btn-warning' onClick={()=>dltcart(item?.id)}><i class="fa-solid fa-trash"></i></Button>
            </div>
        </div>
        </div>    
    )):
    <p>Nothing to display</p>
    }
    <div className='text-center mt-5'>
        <Button className='btn btn-warning w-25 p-2 rounded'><Link to={'/checkout'} style={{textDecoration:'none'}}>Check Out</Link></Button>
    </div>
</div>

  )
}

export default Cart