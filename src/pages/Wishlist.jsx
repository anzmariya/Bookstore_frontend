import React, { useEffect, useState } from 'react'
import { deletewishlist, getwishlist } from '../services/allAPI'
import { Button } from 'react-bootstrap'
function Wishlist() {
    const [allWish,setAllWish] = useState({})

    const viewWishlist = async ()=>{
        const response = await getwishlist()
        // console.log(response);
        const{data} = response
        // console.log(data);
        setAllWish(data)
    }
    console.log(allWish);

    const deletewish=async(id)=>
    {
        const response=await deletewishlist(id)
        console.log(response);
    }

    useEffect(()=>{
        viewWishlist()
        deletewish()
    },[deletewish])
  return (
    <div className="row">
    
    { allWish?.length>0?

    allWish?.map((item)=>(
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
                <Button className='btn btn-warning' onClick={()=>deletewish(item?.id)}><i class="fa-solid fa-trash"></i></Button>
            </div>
        </div>
        </div>    
    )):
    <p>Nothing to display</p>
    }
</div>

  )
}

export default Wishlist