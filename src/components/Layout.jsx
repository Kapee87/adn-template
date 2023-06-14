import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { useRef } from "react";
import { LOGOS_PATH } from "../utilities/logoPath";


export default function Layout() {
    const logoChangeRef = useRef()
    logoChangeRef.current = logoChangeRef.current ?? false
    return (
        <>
            <Header logoChangeRef={logoChangeRef} logoA={LOGOS_PATH.logoA} logoB={LOGOS_PATH.logoB} />
            <main className="layout">
                <Outlet>
                </Outlet>
            </main>
            <Footer />
        </>
    )
}