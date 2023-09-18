export const CardPersonaje = ({ nombre, edad, region, rol, apodo, equipo, imagen }) => {
    return (
        <div className="cardPersonaje">
            <img src={`/img/${imagen}`} alt="" width={300} height={300} />
            <div>
                <h2>{nombre}</h2>
                <h2>{apodo}</h2>
                <p>{edad}</p>
                <p>{region}</p>
                <p>{rol}</p>
                <p>{equipo}</p>
            </div>
        </div>
    )
}