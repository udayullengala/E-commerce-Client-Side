import Account from "../views/Accounts";
import Home from "../views/Home";
import ProductDetail from "../views/ProductDetail";
import SignUp from "../views/SignUp";

{/* <Route path='/' element={<Home />} />
<Route path='/account/' element={<Account />} />
<Route path='/account/sign-up/' element={<SignUp />} />
  <Route path='/product_detail/' element={
    <PrivateRoute>
      <ProductDetail />
    </PrivateRoute>
  } />
<Route path='*' element={<Home />} /> */}

export const AppRoutes = [
    {
        path: "/",
        element: <Home />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/account/",
        element: <Account />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/account/sign-up/",
        element: <SignUp />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/product_detail/",
        element: <ProductDetail />,
        meta: {
            isPrivate: true
        }
    }
]