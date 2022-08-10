import logo from "../../img/Logo.png";
export default function Header() {
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