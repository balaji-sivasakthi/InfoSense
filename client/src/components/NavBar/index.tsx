import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import Button from "../Button";
type Props = {};

function NavBar({}: Props) {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  console.log(pathname);
  
  const NavList = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "https://github.com/balaji-sivasakthi/InfoSense",
    },
    {
      label: "Features",
      path: "https://github.com/balaji-sivasakthi/InfoSense",
    },
    {
      label: "How to use",
      path: "https://github.com/balaji-sivasakthi/InfoSense",
    },
    {
      label: "Contribute",
      path: "https://github.com/balaji-sivasakthi/InfoSense",
    },
  ];
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center justify-between">
          <img src={logo} alt="" />
      </div>
      <ul>
          {NavList.map((list) => {
            return (
              <Link className={`p-2 ${list.path == pathname ? "text-blue-700":""} hover:text-blue-700`} to={list.path}>
                {list.label}
              </Link>
            );
          })}
        </ul>
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
