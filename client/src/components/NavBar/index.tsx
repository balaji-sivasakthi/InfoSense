import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
import Button from '../Button';
import { useState } from 'react';
import { useEffect } from 'react';
type Props = {};

function NavBar({}: Props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        console.log(scrollY);
        if(scrollY>0){
            setS(1);
        }
        else{
            setS(0);
        }
      };
    const [s, setS] = useState<number>(0);
    const nav:any = s === 1
  ? {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "white",
      background: "rgba(231, 227, 227, 0.35)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(6.5px)",
      webkitBackdropFilter: "blur(11px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      zIndex: 999,
    }
  : {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "",
    //   paddingTop: '20px',
      zIndex: 999,
    };
    const NavList = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'About',
            path: 'https://github.com/balaji-sivasakthi/InfoSense',
        },
        {
            label: 'Features',
            path: 'https://github.com/balaji-sivasakthi/InfoSense',
        },
        {
            label: 'How to use',
            path: 'https://github.com/balaji-sivasakthi/InfoSense',
        },
        {
            label: 'Contribute',
            path: 'https://github.com/balaji-sivasakthi/InfoSense',
        },
    ];
    return (
        <div style={{position:"sticky",zIndex:"5 ",top:0,backgroundColor:"",paddingTop:"0px"}}>
        <div className="flex items-center justify-between py-3 px-5" style={nav}>
            <div className="flex items-center justify-between">
                <img src={logo} alt="" />
            </div>
            <ul>
                {NavList.map((list) => {
                    return (
                        <Link
                            className={`p-2 ${
                                list.path == pathname ? 'text-blue-700' : ''
                            } hover:text-blue-700`}
                            to={list.path}
                        >
                            {list.label}
                        </Link>
                    );
                })}
            </ul>
            <div>
                <Button
                    onClick={() => {
                        navigate('/app/dashboard');
                    }}
                >
                    Try Now
                </Button>
            </div>
        </div>
        </div>
    );
}

export default NavBar;
