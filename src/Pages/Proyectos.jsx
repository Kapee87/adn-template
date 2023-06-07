import { thumbnail } from '../assets/thumbnail.json'

const proyectsMock = [
    {
        url: 'https://debiabril.github.io/portfolio/'
    },
    {
        url: 'https://mockup-portfolio-hardcoded-ooi0e023a-ariellevita.vercel.app'
    },
    {
        url: 'https://marcoscakin.github.io/amazingEvents_Maidana/'
    },
    {
        url: 'https://tsuramii.github.io/ADN-Solutions-Mockup/'
    },
    {
        url: 'http://www.franco-miguez.com'
    },
    {
        url: 'https://kapee87.github.io/Barberia-Alura/'
    }

]

export default function Proyectos() {

    return (
        <section className="proyectos">
            <h2>Proyectos</h2>
            <p>Todavía no tenemos proyectos terminados para mostrar, pero de tenerlos, la grilla se vería más o menos así:
            </p>
            <div className="projectContainer">
                {
                    proyectsMock.map(({ url }) => (
                        <div className="projecto" key={url}>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img src={thumbnail} alt="" />
                                {url}
                            </a>
                        </div>

                    ))
                }
            </div>

        </section>
    )
}