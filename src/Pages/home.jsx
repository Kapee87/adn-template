import wapIcon from '../assets/whatsapp.svg'

import githubIcon from '../assets/github-alt.svg'

import instaIcon from '../assets/instagram.svg'
import { useRef, useState } from 'react'
import { LOGOS_PATH } from '../utilities/logoPath'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


const mockRedes = [
    {
        url: "wap",
        img: wapIcon,
    },
    {
        url: "github",
        img: githubIcon,
    },
    {
        url: "insta",
        img: instaIcon,
    },
]


export default function Home() {
    const logoChangeRef = useRef()
    logoChangeRef.current = logoChangeRef.current ?? false
    const [logoChange, setlogoChange] = useState(logoChangeRef.current)

    const handleLogoChange = () => {
        setlogoChange(!logoChange)
        logoChangeRef.current = !logoChange
    }
    return (
        <>
            <section className="home">
                <div className="logo-container">
                    <span className="changeLogoText">cambiar logo
                        <FontAwesomeIcon icon={faArrowsRotate} alt='Cambiar logo' className="logo-changer" onClick={handleLogoChange} />
                    </span>
                    <img
                        src={!logoChange ? LOGOS_PATH.logoA : LOGOS_PATH.logoB}
                        alt="Logo de Adn"
                        className={!logoChange ? 'logoA' : 'logoB'}
                    />
                    <h1 className="logo-text-home">
                        Web Solutions
                    </h1>
                </div>
                <div className="skew-container" >
                    <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50JTIwZm9uZG8lMjBkZSUyMHBhbnRhbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

                </div>
                <aside className="redesFloater" >
                    {
                        mockRedes.map(({ img, url }) => (
                            <img src={img} alt="wasap icon"
                                key={url} />
                        ))
                    }
                </aside>
            </section>

        </>
    )
}