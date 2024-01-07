import Account from "../views/Accounts";
import Home from "../views/Home";
import ProductDetailPage from "../views/ProductDetailPage";
import SignUp from "../views/SignUp";
import Cart from "../views/CartPage";
import About from "../views/About";
import Shop from "./Collections";

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
        path: "/product_detail/:product_id/",
        element: <ProductDetailPage />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/cart/",
        element: <Cart />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/about/",
        element: <About />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "/collections/",
        element: <Shop />,
        meta: {
            isPrivate: false
        }
    },
    {
        path: "className=:gender/",
        element: <Shop />,
        meta: {
            isPrivate: false
        }
    }
]