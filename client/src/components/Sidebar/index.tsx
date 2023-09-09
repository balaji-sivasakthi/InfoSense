import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from './../../assets/images/logo.png'
type Props = {};

function SideBar({}: Props) {
  const {pathname} = useLocation()
  const navlist = [
    {
      label: "Dashboard",
      path: "/app/dashboard",
      active: pathname == "/app/dashboard"
    },
    {
      label: "Go to Home",
      path: "/",
      active: pathname == "/"
    },
  ];

  return (
    <div className="flex-[0.2] border-2 rounded-lg p-2">
      <div>
        <img src={logo} className="p-5" alt="infosense logo" />
      </div>
      <ul>
        {navlist.map((item) => {
          return (
            <li key={item.path} className={`${item.active ? "bg-blue-600 text-white":""} p-2  rounded-lg  text-center mb-2`}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
