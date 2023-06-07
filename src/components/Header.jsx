import { faArrowsRotate, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Header({ logoChangeRef, logoA, logoB }) {
    const [isDropOn, setIsDropOn] = useState(false)
    const [logoChange, setlogoChange] = useState(logoChangeRef.current)


    const handleDropdown = () => {
        setIsDropOn(!isDropOn)
    }
    const handleLogoChange = () => {
        setlogoChange(!logoChange)
        logoChangeRef.current = !logoChange
    }
    return (
        <header>
            <nav>
                <span className="changeLogoText">cambiar logo
                    <FontAwesomeIcon icon={faArrowsRotate} alt='Cambiar logo' className="logo-changer" onClick={handleLogoChange} />
                </span>
                <Link to="/" className={!logoChange ? 'logoContainerA' : 'logoContainerB'} >
                    <img

                        src={!logoChange ? logoA : logoB}
                        alt="Logo del website"
                        className={!logoChange ? 'logoA' : 'logoB'}
                    />
                    <span className="logo-text">Web Solutions</span>
                </Link>
                <ul className="bigNav">
                    <li><Link to="/" className="team"> Inicio </Link></li>
                    <li><Link to="/nosotros" className="team"> Nosotros </Link></li>
                    <li><Link to="/proyectos" className="about">Proyectos</Link> </li>
                    <li><Link to="/contacto" className="contact">Contacto</Link> </li>
                </ul>
                <i className="burgerButton" >
                    <FontAwesomeIcon icon={!isDropOn ? faBars : faX} onClick={handleDropdown} />
                </i>
                {isDropOn &&
                    <ul className="dropNav">
                        <li><Link to="/" className="team"> Inicio </Link></li>
                        <li><Link to="/nosotros" className="team"> Nosotros </Link></li>
                        <li><Link to="/proyectos" className="about">Proyectos</Link> </li>
                        <li><Link to="/contacto" className="contact">Contacto</Link> </li>
                    </ul>}
            </nav>
        </header >
    )


}