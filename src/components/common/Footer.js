import { useState } from "react";
import { useEffect } from "react";
import boxingclasses from "../../img/boxingclasses.png";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../img/Logo.png";
const Footer = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return <>
    <div className={`scrollSc ${scroll ? 'scroll' : ''}`} >
      <p>SCROLL</p>
      <div className="scrollarrow" >
        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75003 10.625H4.81753L4.96753 10.7825C5.03725 10.8528 5.1202 10.9086 5.2116 10.9467C5.30299 10.9847 5.40102 11.0043 5.50003 11.0043C5.59904 11.0043 5.69707 10.9847 5.78846 10.9467C5.87986 10.9086 5.96281 10.8528 6.03253 10.7825L6.18253 10.625H6.25003V10.5575L10.5325 6.2825L9.46753 5.2175L6.25003 8.4425V0.5H4.75003V8.4425L1.53253 5.2175L0.467529 6.2825L4.75003 10.5575V10.625Z" fill="#C7211A" />
        </svg>
      </div>
    </div>

    <div className={`scrollSc ${!scroll ? 'scroll' : ''}`} >
      <p className="text-uppercase" >Go To Top</p>
      <a href="#header" className="scrollarrow" >
        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75003 10.625H4.81753L4.96753 10.7825C5.03725 10.8528 5.1202 10.9086 5.2116 10.9467C5.30299 10.9847 5.40102 11.0043 5.50003 11.0043C5.59904 11.0043 5.69707 10.9847 5.78846 10.9467C5.87986 10.9086 5.96281 10.8528 6.03253 10.7825L6.18253 10.625H6.25003V10.5575L10.5325 6.2825L9.46753 5.2175L6.25003 8.4425V0.5H4.75003V8.4425L1.53253 5.2175L0.467529 6.2825L4.75003 10.5575V10.625Z" fill="#C7211A" />
        </svg>
      </a>
    </div>

    <footer className="position-relative bgimage" style={{ backgroundImage: `url(${boxingclasses})` }} >
      <div className="overlay" ></div> 
      <div className="container" >

        <div className="footerbar" ></div>
        <div className="footerLogo mt-4 d-flex justify-content-center justify-content-lg-start" >
          <img alt="logo" src={logo} />
        </div>
        <div className="my-4 d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center">
          <h2 className="heading text-center text-lg-start md sm mb-4 mb-lg-0">Train Like The <strong> CHAMP!</strong></h2>
          <ul className="p-0 mt-3 mt-lg-0 footerLinks d-flex flex-wrap justify-content-center justify-content-lg-end" >
            <li><a className="footerlink" >CLASSES</a></li>
            <li><a className="footerlink" >TRAINERS</a></li>
            <li><a className="footerlink" >ABOUT</a></li>
            <li><a className="footerlink" >SIGN UP TODAY!</a></li>
          </ul>
        </div>

        <div className="copyright text-center text-lg-start " >
          <p>© 2022 Mayweatheroffers Inc. All rights reserved.</p>
        </div> 

        <div className="gototopwrap" >
          <a href="#home" className={`gototop`} >
            <p>GO TO TOP</p>
            <div className="scrollarrow" >
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75003 10.625H4.81753L4.96753 10.7825C5.03725 10.8528 5.1202 10.9086 5.2116 10.9467C5.30299 10.9847 5.40102 11.0043 5.50003 11.0043C5.59904 11.0043 5.69707 10.9847 5.78846 10.9467C5.87986 10.9086 5.96281 10.8528 6.03253 10.7825L6.18253 10.625H6.25003V10.5575L10.5325 6.2825L9.46753 5.2175L6.25003 8.4425V0.5H4.75003V8.4425L1.53253 5.2175L0.467529 6.2825L4.75003 10.5575V10.625Z" fill="#C7211A" />
              </svg>
            </div>
          </a>
        </div>


      </div>
    </footer>

    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
}
export default Footer;