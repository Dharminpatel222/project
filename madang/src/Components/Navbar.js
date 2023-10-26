import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const token = useSelector((state) => state.authslice.token);

    return (
      <>
        <header className="main_menu home_menu container-fluid bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 ">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand logo" to="/">
                    {" "}
                    <img
                      src="img/logo.png"
                      alt="logo"
                      style={{ height: "30px", width: "180px  " }}
                    />{" "}
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      {token? <>
                      <li className="nav-item">
                        <Link className="nav-link" to="deshbord">
                          Deshbord
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="product">
                          Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="order">
                          Order
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="user">
                          User
                        </Link>
                      </li></>
                      :<>
                      <li className="nav-item">
                        <Link className="nav-link" to="home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="menu">
                          Menu
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="chefs">
                          Chefs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="singleblog">
                          Single blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="contact">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="about">
                          About
                        </Link>
                      </li>
                      </>}
                    </ul>
                    
                    <ul className="navbar-nav">
                      
                    </ul>
                  </div>
                  <div className="menu_btn">
                    <Link to="#" className="btn_1 d-none d-sm-block">
                      book a tabel
                    </Link>
                  </div>
                  <div
                    className="login_btn d-flex ml-4"
                    style={{ justifyContent: "center" }}
                  >
                    <NavLink to={"/login"}>
                      <i class="fa-solid fa-user"></i>
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}
export default Navbar;