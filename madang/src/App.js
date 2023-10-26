import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import ChefsPage from './Pages/ChefsPage';
import SingleBlog from './Pages/SingleBlog';
import ContactPage from './Pages/ContactPage';
import Login from './Pages/Login';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import Register from './Pages/Register';
import Deshbord from './Pages/Deshbord';
import User from './Pages/User';
import Order from './Pages/Order';
import Product from './Pages/Product';
import { ToastContainer } from 'react-toastify';
import ProductForm from './Pages/ProductForm';
import Aboutpage from './Pages/Aboutpage';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <ToastContainer /> {/* for error show */}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/chefs" element={<ChefsPage />} />
            <Route path="/singleblog" element={<SingleBlog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/deshbord" element={<Deshbord />} />
            <Route path="/user" element={<User />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productform" element={<ProductForm />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
