//? react router 
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

//? Components 
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

//? css 
import './styles/global.scss';
import UserDetail from "./pages/userDetail/UserDetail";
import ProductDetail from "./pages/productDetail/ProductDetail";

const Layout = () => {
  return (
    <main className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </main>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
      { path: "/users/:id", element: <UserDetail /> },
      { path: "/products/:id", element: <ProductDetail /> },
    ],
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
