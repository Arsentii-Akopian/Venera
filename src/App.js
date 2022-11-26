import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import AnotherAccount from "./Pages/AnotherAccount/AnotherAccount";
import Product from "./Pages/Product/Product";
import Favorite from "./Pages/Favorite/Favorite";
import './scss/style.scss'
import Header from "./layout/Header/Header";
import {useEffect, useState} from "react";

function App() {
    const [user,setUser]=useState({})
useEffect( () =>{
    if(JSON.parse(localStorage.getItem('user')) !== null ){
        setUser(JSON.parse(localStorage.getItem('user')))

    }
},[])


    return (
    <div className="App">

        <Header user={user} setUser={setUser} />
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/favorite' element={<Favorite/>}/>
    <Route path='/myaccount' element={<MyAccount/>}/>
    <Route path='/annotheraccount' element={<AnotherAccount/>}/>
</Routes>
    </div>
  );
}

export default App;
