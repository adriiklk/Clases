function TarjetaPelicula({ titulo, director }) {
const handleMarcarVista = () => {
    console.log('¡Click en el botón!')
    console.log('Marcando como vista:', titulo, '-', director)
    alert(`Has marcado como vista: ${titulo}`)
  }
    return (
    <article className="tarjeta-pelicula">
      <h3>{titulo}</h3>
      <p>{director}</p>
      <div className="fila">
        <button onClick={handleMarcarVista}>Marcar como vista</button>
        <button onClick={() => alert(`Marcando ${titulo}`)}>Marcar vista</button>
      </div>
    </article>
  )
}

export default TarjetaPelicula