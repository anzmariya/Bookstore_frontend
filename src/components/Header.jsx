import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Badge, NavDropdown } from 'react-bootstrap';
import { getCart, getwishlist } from '../services/allAPI';

function Header() {
    
  const [allWish,setAllWish] = useState({})

  const [allCart,setAllCart] = useState({})

    const viewWish = async ()=>{
        const response = await getwishlist()
        // console.log(response);
        const{data} = response
        // console.log(data);
        setAllWish(data)
    }
    console.log(allWish);

    const viewCart = async ()=>{
      const response = await getCart()
      // console.log(response);
      const{data} = response
      // console.log(data);
      setAllCart(data)
  }
  console.log(allCart);

    

    useEffect(()=>
    {
      viewWish()
      viewCart()
    },[allCart])

    return (
      <div>
        <Navbar expand="lg" className=" container">
       
          <Navbar.Brand href="#home">              
            <h1 style={{ fontFamily: 'Ephesis', fontWeight: 'bold', marginLeft: '40px' }}>The Book Shelf</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">   
            <Nav.Link href="/" style={{  fontSize: "15px" ,marginLeft: '15px' }}>HOME</Nav.Link>
            <Nav.Link href="/category" style={{  fontSize: "15px", marginLeft: '15px' }}>CATEGORIES</Nav.Link>
            <Nav.Link href="/book" style={{ fontSize: "15px", marginLeft: '15px' }}>BOOKS</Nav.Link>
  
            <NavDropdown title="ACCOUNT"   style={{  fontSize: "15px", marginLeft: '15px' }} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    <span className="me-5"></span>
                    <h5  className='text-center' style={{ fontFamily: 'Ephesis', fontWeight: 'bold' }} >Welcome to The Book Shelf </h5>
                    <p className='text-center' >Take charge of your buying<br></br>  and selling</p>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.2">
                    <span > <Link to='' style={{textDecoration:'none',color:'black'}} ><i class="fa-solid fa-book"></i>Start Selling</Link> </span>
                
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <span > <i class="fa-solid fa-bag-shopping"></i> Orders</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <span> <i class="fa-solid fa-heart"></i> Wishlist</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <span> <i class="fa-solid fa-cart-shopping"></i> Cart</span>
                
                </NavDropdown.Item>
              
                <NavDropdown.Item href="#action/3.4" className='d-flex justify-content-center align-items-center'>
                    <Link to='/login'><button type="button" className="btn btn-dark ms-3 " ><i class="fa-solid fa-user"></i> Sign in/Join</button></Link>
                            
                    <button  type="button" className="btn btn-dark ms-3"><i class="fa-solid fa-power-off"></i> Logout</button>
                            
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" style={{ fontSize: "15px", marginLeft: '15px' }}>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
  
        <Navbar  style={{backgroundColor:'black'}}>
        <Container>
          <Navbar.Brand className='wishlistcart d-flex ms-auto'>
            <Nav.Link href="#link"  style={{ color: 'white', marginLeft: '15px',fontSize: "15px"}}><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>WISHLIST</Link> <Badge bg="secondary"> <i style={{color:'red'}} class="fa-solid fa-heart"></i>{allWish.length}</Badge>
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white', marginLeft: '15px',fontSize: "15px" }}><i class="fa-solid fa-cart-shopping"></i><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>MY CART: {allCart.length}</Link></Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
     
      </div>
    )
  } 
  
  export default Header