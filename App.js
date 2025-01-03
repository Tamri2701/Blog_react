import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/header/Details";
import Create  from "./components/header/Create";
import Account  from "./components/header/Account";
import Profile  from "./components/header/Profile";
import Card from "./components/header/Card";
import Login from "./components/header/Login"
import Aboutus from "./components/header/Aboutus";
import Register from "./components/header/Register";
import Contact from "./components/header/Contact";
import Trending from "./components/header/Trending";
import Logout from "./components/header/Logout";
const App = () => {
  return (
    <>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/card/:category" element={<Card/>}/>
         <Route path="/" element={<Login/>}/> 
         <Route path="/about" element={<Aboutus/>}/> 
         <Route path="/register" element={<Register/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/blog" element={<Trending/>}/>
         <Route path="/logout" element={<Logout/>}/>
        </Routes>
    </>
  )
}
export default App;