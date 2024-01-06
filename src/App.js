import { Route, Routes } from 'react-router-dom';
import "./scss/index.scss"
// import Home from './views/Home';
// import Navbar from './views/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
// import Account from './views/Accounts';
// import SignUp from './views/SignUp';
// import ProductDetail from './views/ProductDetail';
// import PrivateRoute from './PrivateRoute'
import { AppRoutes } from './routes';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>

        {
          AppRoutes.map((curElem, i) => {
            const routeElement = curElem?.meta?.isPrivate ? <PrivateRoute>{curElem?.element}</PrivateRoute> : curElem?.element
            return <Route key={i} path={curElem?.path} element={routeElement} />

          })
        }
      </Routes>
    </>
  );
}

export default App;
