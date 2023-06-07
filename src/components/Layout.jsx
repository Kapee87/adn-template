import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { useRef } from "react";

const logoA = 'https://media.discordapp.net/attachments/1113855362106413086/1114599922939994140/logoAdn.png'
const logoB = 'https://media.discordapp.net/attachments/1113855362106413086/1116026887446204547/image-adn.png?width=512&height=534'

export default function Layout() {
    console.log('renderiza');
    const logoChangeRef = useRef()
    logoChangeRef.current = logoChangeRef.current ?? false
    console.log(logoChangeRef);
    return (
        <>
            <Header logoChangeRef={logoChangeRef} logoA={logoA} logoB={logoB} />
            <main className="layout">
                <Outlet>
                    {logoA}
                </Outlet>
            </main>
            <Footer />
        </>
    )
}