import wapIcon from '../assets/whatsapp.svg'

import githubIcon from '../assets/github-alt.svg'

import instaIcon from '../assets/instagram.svg'


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

    const handleHover = (e) => {
        console.log('mouse uo');
    }
    return (
        <>
            <section className="home">
                <div className="logo-container">
                    <img src='https://media.discordapp.net/attachments/1113855362106413086/1114599922939994140/logoAdn.png' alt="Logo de Adn" className="logo-home" />
                    <h1 className="logo-text-home">
                        Web Solutions
                    </h1>
                </div>
                <div className="skew-container" >
                    <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50JTIwZm9uZG8lMjBkZSUyMHBhbnRhbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

                </div>
                <aside className="redesFloater" >
                    {
                        mockRedes.map(({ img, url}) => (
                            <img src={img} alt="wasap icon"
                                key={url} />
                        ))
                    }
                </aside>
            </section>

        </>
    )
}