import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid navbar__items">
        <Link class="navbar-brand" to="/">SHOP KRO</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar__ul">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                FASHION
            </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/Fashion/Women">WOMEN</Link></li>
                <li><Link class="dropdown-item" to="/Fashion/Men">MEN</Link></li>
                <li><Link class="dropdown-item" to="/Fashion/Kids">KIDS</Link></li>
              </ul>
            </li> <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ELECTRONICS
            </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/Electronics/Mobiles">MOBILES</Link></li>
                <li><Link class="dropdown-item" to="/Electronics/Laptops">LAPTOP</Link></li>
                <li><Link class="dropdown-item" to="/Electronics/Cameras">CAMERA</Link></li>
              </ul>

            </li> <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                GROCERY
            </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/Grocery/PersonalCare">PERSONAL CARE</Link></li>
                <li><Link class="dropdown-item" to="/Grocery/Household">HOUSEHOLD ITEMS</Link></li>

                <li><Link class="dropdown-item" to="/Grocery/Snacks">SNACKS & BEVERAGES</Link></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
            <div className="navbar__icons">
              <Link to="/WishList" className="Navbar__link"><FavoriteIcon /></Link>

            </div>
            <div className="navbar__icon">

              <Link to="/Cart" className="Cart__link"><ShoppingCartIcon /></Link>
            </div>
          </form>

        </div>
      </div>
    </nav>
  )

}
