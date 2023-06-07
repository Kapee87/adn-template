
export default function Contacto() {

    return (
        <section className="contacto">
            <h2>Contacto</h2>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" placeholder="Juenito Hernan"/>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" placeholder="juenito@coldmail.moc"/>
                <label htmlFor="message">Mensaje:</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Hola, les escribo para.."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}