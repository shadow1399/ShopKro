import { items } from './item.js'
import React, { useState } from 'react'
import Navbar from './components/Navbar.js'
import Banner from './components/Banner.js'
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/Home.js';
import Women from './components/Women.js';
import Men from './components/Men.js';
import Kids from './components/Kids.js';
import PersonalCare from './components/PersonalCare.js';
import Household from './components/Household.js';
import Snacks from './components/Snacks.js';
import Cart from './components/Cart.js';
import MenDes from './components/MenDes.js';
import WomenDes from './components/WomenDes.js';
import KidsDes from './components/KidsDes.js';
import PersonalCareDes from './components/PersonalCareDes.js';
import SnacksDes from './components/SnacksDes.js';
import HouseholdDes from './components/HouseholdDes.js';
import Mobiles from './components/Mobiles.js';
import MobilesDes from './components/MobilesDes.js';
import Laptop from './components/Laptop.js';
import LaptopDes from './components/LaptopDes.js';
import Camera from './components/Camera.js';
import CameraDes from './components/CameraDes.js';
import WishList from './components/WishList.js';
function App() {
  const [cartItems, setcartItems] = useState([])
  const [wishList, setwishList] = useState([])

  const onWish = (product) => {
    const exist = wishList.find(x => x.id === product.id)
    if (!exist) {
      setwishList([...wishList, { ...product }]);
    }

  }
  const onUnwish = (product) => {
    const exist = wishList.find(x => x.id === product.id)
    // console.log(exist);
    if (exist) {
      setwishList(wishList.filter((x) => x.id !== product.id));
    }

  }
  // console.log(cartItems);
  const onAdd = (product) => {
    alert("Product Added");
    const exist = cartItems.find(x => x.id === product.id)
    // console.log(exist);
    if (exist) {

      setcartItems
        (
          cartItems.map((x) =>
            x.id == product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );

    }
    else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);

    }
    // console.log(product.qty);

  }
  const onRemove = (product) => {
    // console.log(product);
    const exist = cartItems.find(x => x.id === product.id)
    // console.log(exist);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));

    }
    else {
      setcartItems
        (
          cartItems.map((x) =>
            x.id == product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );

    }

    console.log(product.qty);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Fashion/Men"><Men onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Fashion/Men/:id"><MenDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Fashion/Women"><Women onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Fashion/Women/:id"><WomenDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Fashion/Kids" ><Kids onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Fashion/Kids/:id"><KidsDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Electronics/Mobiles"><Mobiles onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Electronics/Mobiles/:id"><MobilesDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Electronics/Laptops"><Laptop onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Electronics/Laptops/:id"><LaptopDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Electronics/Cameras"><Camera onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Electronics/Cameras/:id"><CameraDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Grocery/PersonalCare"><PersonalCare onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Grocery/PersonalCare/:id"><PersonalCareDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Grocery/Household"><Household onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Grocery/Household/:id"><HouseholdDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Grocery/Snacks" ><Snacks onWish={onWish} onUnwish={onUnwish} wishList={wishList} /></Route>
        <Route exact path="/Grocery/Snacks/:id" ><SnacksDes onAdd={onAdd} cartItem={cartItems} /></Route>
        <Route exact path="/Cart"><Cart cartItem={cartItems} onAdd={onAdd} onRemove={onRemove} /></Route>
        {/* <Route exact path="/WishList"><WishList wishList={wishList} onUnwish={onUnwish}/></Route> */}

      </Switch>
    </BrowserRouter>

  )
}

export default App
