import { Route, Routes } from 'react-router-dom';
import "./scss/index.scss"
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Account from './views/Accounts';
import SignUp from './views/SignUp';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account/' element={<Account />} />
        <Route path='/account/sign-up/' element={<SignUp />} />
        <Route path='/product_detail/' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
