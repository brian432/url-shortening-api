import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState("");
    return (
        <header className="flex paddinglr-10 mtb-5 width">
            <div className="flex">
                <div className="div-logo mr-5">
                    <img src="images/logo.svg" alt="logo" />
                </div>
                <a className="span mrl-5 barra-header" href="#" >Features</a>
                <a className="span mrl-5 barra-header" href="#" >Pricing</a>
                <a className="span mrl-5 barra-header" href="#" >Resources</a>
            </div>
            <div className="barra-header">
                <span className="span mrl-5 cursor">Login</span>
                <span className="button ml-5 cursor">Sign Up</span>
            </div>
            <div className="none">
                <div id="hamburguesa" onClick={() => menu === "" ? setMenu("encendido") : setMenu("")}>
                    <div className={menu === "" ? "" : "linea1"}></div>
                    <div className={menu === "" ? "" : "linea2"}></div>
                    <div className={menu === "" ? "" : "linea3"}></div>
                </div>
                <div id="url-hamburguesa" className={menu==="encendido"?"none":""}>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>
            </div>
        </header>
    )
}

export default Header;