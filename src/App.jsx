import { useCounter } from "./hooks/useCounter"
import { useCustomFetch } from "./hooks/useCustomFetch"
import './css/App.css'

function App() {

  const { counter, incrementCount, decrementCount } = useCounter(1)
  const { data, loading, error } = useCustomFetch(`https://rickandmortyapi.com/api/character/${counter}`)

  const { name, image, location, species } = !!data && data

  return (
    <>
      <h1>Rick and Morty <span className="span-series">series</span></h1>
      <hr />

      {
        loading ?
          (
            <div>
              Loading...
            </div>
          )
          :
          (
            <main className="container">
              <div className="text-container">
                <p className="nombre">
                  Nombre : <span>{name}</span>
                </p>
                <p className="nacimiento">
                  Nacimiento :
                  <span>
                    {JSON.stringify(location['name'])}
                  </span>
                </p>
                <p className="especie">
                  Especie :
                  <span> {species}</span>
                </p>
              </div>
              <img className="img-container" src={image} alt={name} />
            </main>
          )
      }
      <div className="btn-container">
        <button className="btn" onClick={decrementCount}>After personaje</button>
        <button className="btn" onClick={incrementCount}>Next personaje</button>
      </div>
    </>
  )
}

export default App
