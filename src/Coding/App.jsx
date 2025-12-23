import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <CartProvider>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </CartProvider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
      { path: "about/profile", element: <Profile /> },
      { path:"cart", element: <Cart/> }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
