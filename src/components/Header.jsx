export default function Header() {

    return (
        <header>
            <nav>
                <div className="logo-container">
                    <img
                        src="src\assets\logoAdn.png"
                        // src='src\assets\logoAdn.png'
                        alt="Logo del website"
                        className="logo"
                    />
                    <h2 className="header-title">Soluciones Web</h2>
                </div>
                <ul>
                    <li ><a href="#" className="team"> Inicio </a></li>
                    <li ><a href="#" className="team"> Nosotros </a></li>
                    <li><a href="#" className="about">Proyectos</a> </li>
                    <li><a href="#" className="contact">Contacto</a> </li>
                </ul>
            </nav>
        </header>
    )
}