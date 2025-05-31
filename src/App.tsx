import { IoIosSearch, IoIosWater, IoIosSpeedometer } from 'react-icons/io'
import { CiTempHigh } from 'react-icons/ci'
import { RiWindyLine } from 'react-icons/ri'
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
            <CiTempHigh className='info-estilo' />
            <p>Sensação: </p>
          </div>
          <div>
            <IoIosWater className='info-estilo' />
            <p>Umidade: </p>
          </div>
          <div>
            <RiWindyLine className='info-estilo' />
            <p>Vento: </p>
          </div>
          <div>
            <IoIosSpeedometer className='info-estilo' />
            <p>Pressão: </p>
          </div>
        </div>

        <div id="clima-proximos-dias">
          <p>Previsão para os próximos dias</p>
          <div id='proximos-dias'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="info-sol">
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App
