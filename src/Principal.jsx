import { CardPersonaje } from "./components/CardPersonaje";
import { Navbar } from "./components/Navbar"


export const Principal = () => {
    const personajes = [{ 
        nombre: "Jean Pierre Gonzalez Salazar", apodo: "Chris Luck", edad: 25, region: "South America", rol: "Mid Laner", equipo: "Evil Geniuses", imagen: "c.smile.jpg" }, { 
        nombre: "Crhistian Antony Savina Casanova", apodo: "Pakazs", edad: 22, region: "South America", rol: "Carry", equipo: "Evil Geniuses", imagen: "Pakazs.png"}, { 
        nombre: "Adrián Céspedes Dobles", apodo:"Wisper", edad: 21, region: "South America", rol: "Offlaner", equipo: "Evil Geniuses", imagen:"Wisper.jpg" }, { 
        nombre: "Farith Jeafehe Puente Huamancaja", apodo: "Matthew", edad: 25, region: "South America", rol: "Support Capitan", equipo: "Evil Geniuses", imagen: "COTO.jpg" }, { 
        nombre: "Jose Leonardo Padilla Hernandez", apodo: "Panda", edad: 23, region: "South America", rol: "Support ", equipo: "Evil Geniuses", imagen: "panda.png" }, ];

    return (
        <section className="container">
            <Navbar />
            <div className="containerPersonaje">
                {
                    personajes.map((personaje) => (
                        <CardPersonaje {...personaje} />
                    ))
                }
            </div>
        </section>
    )
}   