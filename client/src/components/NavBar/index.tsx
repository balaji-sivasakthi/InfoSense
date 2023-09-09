import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import Button from "../Button";
type Props = {};

function NavBar({}: Props) {
  const navigate = useNavigate();
  const NavList = [
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Features",
      path: "/feature",
    },
  ];
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul>
          {NavList.map((list) => {
            return (
              <Link className="p-2 text-xl" to={list.path}>
                {list.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/app/dashboard");
          }}
        >
          Try Now
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
