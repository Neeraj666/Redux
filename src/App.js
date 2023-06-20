// import ProductData from "./ProductData";
import NavBar from './Components/NavBar';
import ProductCart from './Components/ProductCart'
import CartPage from './Components/cartPage'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ProductCart />} />
                    <Route path='/cart' element={<CartPage />} /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;