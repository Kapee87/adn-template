const mockUsers = [
    {
        ghName: 'debiabril',
        github: 'https://github.com/debiabril'
    },
    {
        ghName: 'arielLevita',
        github: 'https://github.com/arielLevita'
    },
    {
        ghName: 'MarcosCakin',
        github: 'https://github.com/MarcosCakin'
    },
    {
        ghName: 'JaCastro125',
        github: 'https://github.com/JaCastro125'
    },
    {
        ghName: 'Josenov',
        github: 'https://github.com/Josenov'
    },
    {
        ghName: 'JessicaJunco',
        github: 'https://github.com/JesicaJunco'
    },
    {
        ghName: 'leocoiradas',
        github: 'https://github.com/leocoiradas'
    },
    {
        ghName: 'tsuramii',
        github: 'https://github.com/tsuramii'
    },
    {
        ghName: 'Franco-Miguez',
        github: 'https://github.com/Franco-Miguez'
    },
    {
        ghName: 'Kapee87',
        github: 'https://github.com/Kapee87'
    },
    {
        ghName: 'MarceloZych',
        github: 'https://github.com/MarceloZych'
    },

]

export default function Nosotros() {

    return (
        <section className="nosotros">
            <h2>Nosotros</h2>
            <article className="nosotrosTextContainer">
                <p>
                    Somos un equipo de desarrollo de páginas web. Seguimos aprendiendo, porque el mundo tecnológico no para, así que nosotros tampoco.
                    Buscamos generar productos de calidad que transmitan todo lo que nuestros clientes quieren y necesitan.
                </p>
            </article>
            <h4>Integrantes del equipo </h4>
            <div className="avataresContainer">
                {
                    mockUsers.map(user => (
                        <div className="avatarContainer" key={user.github}>
                            <a href={user.github} target="_blank">
                                <img src={`https://unavatar.io/github/${user.ghName}`} alt="" />
                                <h2>{user.ghName}</h2>
                            </a>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}