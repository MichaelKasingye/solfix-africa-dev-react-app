import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import { IconContext } from "react-icons";
// import { useStateValue } from "./ContextAPI/StateProvider";

// import { auth } from "./Firebase/firebase";
// import { useHistory } from "react-router-dom";
// import "./navbar.css";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);
  //   const [{ user }, dispatch] = useStateValue();
  // const user = "null";
  //   const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  const showBurger = () => {
    if (window.innerWidth <= 765) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener("resize", showBurger);

  const changeBackground = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // console.log(user);

  return (
    <>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div className={navbar ? "navbar active" : "navbar"}>
          {burger ? (
            <Link to="#" className="menu-bars">
              <FaBars onClick={showSidebar} />
            </Link>
          ) : (
            <Link to="/" className="logo">
              <img
                src="assets/img/solfixlogos/solfixlogo3.jpeg"
                // style={{height:"100%"}}
                alt="The Solfix logo"
              />
            </Link>
          )}

          {burger ? (
            ""
          ) : (
            <div className="nav-menu">
              <Link to="/">Home</Link>
              <a href="/#services"> Services</a>
              <Link to="/Pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/Contact">Contact</Link>
              <a
                className="buttons-filled "
                href="https://dashboard.solfixafrica.com/register"
              >
                Sign Up
              </a>
              <a
                className="buttons-outlined mx-1"
                href="https://dashboard.solfixafrica.com/login"
              >
                Sign In
              </a>
            </div>
          )}

          {burger ? (
            <Link to="/" className="logo">
              <img
                src="assets/img/solfixlogos/solfixlogo3.jpeg"
                // style={{height:"100%"}}
                alt="The solfix logo"
              />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
          <ul className="sidebar-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose
                  style={{ color: "black" }}
                  onClick={showSidebar}
                />
              </Link>
            </li>
            <li className="sidebar-text">
              <a href="/#services">
                {/* {item.icon} */}
                <span>Services</span>
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="sidebar-text">
              <a
                className="buttons-filled "
                href="https://dashboard.solfixafrica.com/register"
              >
                Sign Up
              </a>
            </li>
            <li className="sidebar-text">
              <a
                className="buttons-outlined mx-1"
                href="https://dashboard.solfixafrica.com/login"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
