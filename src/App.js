import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Category from './pages/Category';
import Listbook from './components/Listbook';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/category' element={<Category/>}/>
      <Route path='/listbook' element={<Listbook/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>

    </Routes>
    </>
  );
}

export default App;
