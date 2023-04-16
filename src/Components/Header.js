import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

export function Headers() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      {/* first header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <h3 className="logo">Ecommerce</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
              id="navbarSupportedContent"
            >
              <div className="center">
                <div className="box">
                  <input
                    type="text"
                    className="input1"
                    placeholder="Product name Category name etc..."
                  />
                  <button className="search">Search</button>
                </div>
              </div>

              <div className="log-cart">
                <a href="login.html">
                  <button className="login">login</button>
                </a>
                <a href="cart.html " className='cart'>
                  <FontAwesomeIcon className="fa-solid fa-cart-shopping fa-2x cart" icon={faCartShopping} />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* header1 end */}
        {/* header2 starts */}
        <div className="nav2">
          <ul>
            <li className="nav-item" id="firstitem">
              <a
                className="alignment"
                style={{ textDecoration: "none", marginLeft: 35 }}
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="alignment"
                style={{ textDecoration: "none" }}
                href="all_products.html"
              >
                AllProducts
              </a>
            </li>
            <li className=" dropdown">
              <a
                className="nav-item dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none" }}
              >
                Women
              </a>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    style={{ textDecoration: "none" }}
                    href="all_products.html"
                  >
                    All Products
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Dresses
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Pants
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Skirts
                  </a>{" "}
                </li>
              </ul>
            </li>
            <li className=" dropdown">
              <a
                className="nav-item dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none" }}
              >
                Men
              </a>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <a className="dropdown-item" href="Men.html">
                    All Products{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Dresses
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Pants
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="all_products.html">
                    Skirts
                  </a>{" "}
                </li>
              </ul>
            </li>
            <li className=" dropdown">
              <a
                className="nav-item dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ textDecoration: "none" }}
              >
                Men
              </a>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <a className="dropdown-item" href="Men.html">
                    All Products{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="Men.html">
                    Shirts
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="Men.html">
                    Pants
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="Men.html">
                    Hoddies
                  </a>{" "}
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="alignment"
                style={{ textDecoration: "none" }}
                href="kids.html"
              >
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a
                className="alignment"
                style={{ textDecoration: "none" }}
                href="Contact.html"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* header2 ends */}
    </>
  );
}

