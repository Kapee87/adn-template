
export default function Header() {

    return (
        <header>
            <nav>
                <a href="/" className="logo-container">
                    <img

                        src='https://media.discordapp.net/attachments/1113855362106413086/1114599922939994140/logoAdn.png'
                        alt="Logo del website"
                        className="logo"
                    />
                    <span className="logo-text">Web Solutions</span>
                </a>
                <ul>
                    <li ><a href="/" className="team"> Inicio </a></li>
                    <li ><a href="/nosotros" className="team"> Nosotros </a></li>
                    <li><a href="/proyectos" className="about">Proyectos</a> </li>
                    <li><a href="/contacto" className="contact">Contacto</a> </li>
                </ul>
            </nav>
        </header>
    )
}