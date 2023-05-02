import logo from './logo.svg';
import AddProduct from './components/AddProduct';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateProduct from './components/UpdateProduct';
import PrivateComponenet from './components/PrivateComponenet';
import {BrowserRouter,Route,Routes,LinkProps, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route element={<PrivateComponenet></PrivateComponenet>}>
        <Route path='/' element={<HomePage></HomePage>} />
        <Route path='/add' element={<AddProduct></AddProduct>} />
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>} />
        <Route path='/productlist' element={<ProductList></ProductList>} />
        
       <Route path='/logout' element={<h1>logout PAGE</h1>} />
        <Route path='/profile' element={<h1>profile PAGE</h1>} />
        </Route>
        <Route path='/*' element={<h1>404 PAGE</h1>} />
        
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}

export default App;
