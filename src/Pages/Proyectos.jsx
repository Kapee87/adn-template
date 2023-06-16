import { thumbnail } from '../assets/thumbnail.json'
import debbiWeb from '../assets/debbiWeb.gif'
import arielWeb from '../assets/arielWeb.gif'
import marcosWeb from '../assets/marcosWeb.gif'
import lucaWeb from '../assets/lucaWeb.gif'
import francoWeb from '../assets/francoWeb.gif'
import kapeeWeb from '../assets/kapeeWeb.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'




const proyectsMock = [
    {
        url: 'https://debiabril.github.io/portfolio/',
        img: debbiWeb
    },
    {
        url: 'https://mockup-portfolio-hardcoded-ooi0e023a-ariellevita.vercel.app',
        img: arielWeb
    },
    {
        url: 'https://marcoscakin.github.io/amazingEvents_Maidana/',
        img: marcosWeb
    },
    {
        url: 'https://tsuramii.github.io/ADN-Solutions-Mockup/',
        img: lucaWeb
    },
    {
        url: 'http://www.franco-miguez.com',
        img: francoWeb
    },
    {
        url: 'https://kapee87.github.io/Barberia-Alura/',
        img: kapeeWeb
    }
]

export default function Proyectos() {

    return (
        <section className="projects">
            <h2>Proyectos</h2>
            <p>Todavía no tenemos proyectos terminados para mostrar, pero de tenerlos, la grilla se vería más o menos así:
            </p>
            <div className="projectContainer">
                {
                    proyectsMock.map(({ url, img }) => (
                        <div className="project" key={url}>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img src={img || thumbnail} alt="" />
                                <p>{url}</p>
                            </a>
                            <FontAwesomeIcon icon={faUpRightFromSquare} size='2xl' className="arrow" />
                        </div>

                    ))
                }
            </div>

        </section>
    )
}