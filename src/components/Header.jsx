export default function Header() {

    return (
        <header>
            <nav>
                <div className="logo-container">
                    <img
                        // src="https://trello.com/1/cards/646e0abe7b9593a6e3ebe12a/attachments/6471761ea2ac2bb76d9d5f90/previews/6471761fa2ac2bb76d9d5fea/download/logo_ADN_dark.png"
                        src='src\assets\logoAdn.png'
                        alt="Logo del website"
                        className="logo"
                    />
                    <h2 className="header-title">Soluciones Web</h2>
                </div>
                <ul>
                    <li ><a href="#" className="team"> Equipo </a></li>
                    <li><a href="#" className="about">Que Hacemos</a> </li>
                    <li><a href="#" className="contact">Contacto</a> </li>
                </ul>
            </nav>
        </header>
    )
}