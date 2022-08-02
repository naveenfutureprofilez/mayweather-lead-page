import Menu from "../Menu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../img/Logo.png";
export default function Header() {
    // const [open, setOpen] = useState(false);
    // function handleMenu() {
    //     var tmp = open;
    //     setOpen(!tmp);
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setOpen(false);
    //     });
    // }, []);
    return <>
        <header id="header"  >
            <div className="container d-flex flex-wrap justify-content-between align-items-center" >
                <div className="logoWrap" >
                    <img alt="logo" src={logo} />
                </div>
                {/* <div className="rightMenus d-flex flex-wrap align-items-center" >
                    <ul className='menulinks desktopLinks d-flex flex-wrap m-0 ps-0 ps-sm-3 pe-3 pe-sm-5 ' >
                        <Menu />
                        <li className="signup" ><Link to="/">SIGN UP TODAY!</Link></li>
                    </ul>
                    <div className="menuToggle" onClick={handleMenu}>
                        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="4" fill="white" />
                            <rect y="18" width="40" height="4" fill="white" />
                        </svg>
                    </div>
                </div> */}
            </div>
        </header>
    </>
}