import { IoIosSearch } from 'react-icons/io'
import './App.css'

function App() {
  return (
    <>
      <main>
        <div id='pesquisa'>
          <p id='icone-busca'>
            <IoIosSearch className='info-estilo' />
          </p>
          <form action="">
            <input type="text" name="cidade" id="cidade" placeholder='Digite o nome da cidade... ' />
          </form>
        </div>

        <div id='clima-atual'>
          <div>
            <h1 id='nome-cidade'>Fortaleza, CE</h1>
            <h2 id='data-atual' className='info-estilo'>Segunda-feira, 27 de Maio</h2>
          </div>
          <div id='temperatura-atual'>
            <img src='/src/assets/icons/clouds_sun_sunny_weather.svg' alt='icone do clima atual' />
            <p id='temperatura'>27°C</p>
          </div>
        </div>

        <div id='info-clima'>
          <div>
            <p>Sensação: </p>
          </div>
          <div>
            <p>Umidade: </p>
          </div>
          <div>
            <p>Vento: </p>
          </div>
          <div>
            <p>Pressão: </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
