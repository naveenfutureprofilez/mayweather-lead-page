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
            <div className="container " >
                <div className="logoWrap m-auto d-table d-lg-block" >
                    <img alt="logo" src={logo} />
                </div>
            </div>
        </header>
    </>
}