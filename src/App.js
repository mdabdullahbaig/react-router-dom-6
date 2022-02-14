import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Admin from "./components/Admin";
import { AuthContextProvider } from "./components/AuthContext";
import Contact from "./components/Contact";
import FeaturesProduct from "./components/FeaturesProduct";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProduct from "./components/NewProduct";
import Order from "./components/Order";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order" element={<Order />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />

        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="products" element={<Product />}>
          {/* for automatic load the FeaturesProduct */}
          <Route index element={<FeaturesProduct />} />
          <Route path="features" element={<FeaturesProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
