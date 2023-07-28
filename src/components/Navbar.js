import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import  "../styles/navbar.css"
import Logo from  "../assets/pizzaLogo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

export const navItems = [
  { label: "Home", route: "", style: { marginRight: "auto" } },
  { label: "Menu", route: "menu" },
  { label: "About", route: "about" },
  { label: "Contact", route: "contact" },
];


const Navbar = () => {
  const [onsmallScreen, setonsmallScreen] = useState(false);

  const toggleNavbar = () =>{
    setonsmallScreen(!onsmallScreen);
  }



  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="leftside" id={onsmallScreen ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <ul>
            {navItems.map(({ label, route }) => (
              <li
                key={label}
                onClick={() => {
                  navigate(`/${route}`);
                }}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='rightSide'>
        <ul>
          {navItems.map(({ label, route }) => (
            <li
              key={label}
              onClick={() => {
                navigate(`/${route}`);
              }}
            >
              {label}
            </li>
          ))}
        </ul>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar
