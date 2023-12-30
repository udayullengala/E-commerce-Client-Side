import { Route, Routes } from 'react-router-dom';
import "./scss/index.scss"
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Account from './views/Accounts';
import SignUp from './views/SignUp';
import Index from './views/Index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/account/' element={<Account />} />
        <Route path='/account/sign-up/' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
