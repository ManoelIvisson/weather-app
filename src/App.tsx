import { IoIosSearch, IoIosWater, IoIosSpeedometer } from 'react-icons/io'
import { CiTempHigh } from 'react-icons/ci'
import { RiWindyLine } from 'react-icons/ri'
import { useState } from 'react'
import { formatarDataAtual } from './utils/dataFormatada.ts'
import './App.css'

function App() {
  const [cidade, setCidade] = useState<string>();
  const [dadosClima, setDadosClima] = useState<DadosClima | any>();
  const [cidadePesquisada, setCidadePesquisada] = useState<boolean>();
  const [iconeClima, setIconeClima] = useState<string>();

  type DadosClima = {
    name: string;
    weather: {
      main: string;
    };
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    wind_speed: number;
  }

  async function pesquisarClima(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const dadosClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&unit=metric&appid=68aa71aa4032bc13f58232f35768d2c7&units=metric`)
    .then(res => res.json())
    console.log(dadosClima);
    setDadosClima({
      name: dadosClima.name,
      main: {
        temp: dadosClima.main.temp,
        sensation: dadosClima.main.feels_like,
        humidity: dadosClima.main.humidity,
        pressure: dadosClima.main.pressure
      },
      wind_speed: dadosClima.wind.speed
    });
    setCidadePesquisada(true);
    selecionarIconeClima(dadosClima.weather[0].description)
  }

  function selecionarIconeClima(descricaoClima: string) {
    alert(descricaoClima)
    switch(descricaoClima) {
      case 'overcast clouds': {
        setIconeClima("./assets/icons/overcast_clouds.svg");
        break;
      }
      case 'clear sky': {
        setIconeClima("./assets/icons/clear_sky.svg");
        break;
      }
      case 'haze': {
        setIconeClima("./assets/icons/haze.svg");
        break;
      }
      case 'mist': {
        setIconeClima("./assets/icons/mist.svg");
        break;
      }
      case 'broken clouds': {
        setIconeClima("./assets/icons/overcast_clouds.svg");
        break;
      }
      case 'light rain': {
        setIconeClima("./assets/icons/light_rain.svg");
        break;
      }
      case 'scattered clouds': {
        setIconeClima("./assets/icons/overcast_clouds.svg");
        break;
      }
      default: {

      }
    }
  }

  return (
    <>
      <main>
        <div id='pesquisa'>
          <p id='icone-busca'>
            <IoIosSearch className='info-estilo' />
          </p>
          <form onSubmit={pesquisarClima}>
            <input type="text" name="cidade" id="cidade" placeholder='Digite o nome da cidade... ' onChange={(cidade) => setCidade(cidade.target.value)} />
          </form>
        </div>

        {!cidadePesquisada ? 
          <p>Pesquise o clima de uma cidade</p>
        : 
        <>
          <div id='clima-atual'>
            <div>
              <h1 id='nome-cidade'>{dadosClima?.name}</h1>
              <h2 id='data-atual' className='info-estilo'>{formatarDataAtual()}</h2>
            </div>
          <div id='temperatura-atual'>
            <img src={iconeClima} alt='icone do clima atual' />
            <p id='temperatura'>{Math.round(dadosClima?.main.temp)}°C</p>
          </div>
        </div>

        <div id='info-clima'>
          <div>
            <CiTempHigh className='info-estilo' />
            <p>Sensação: <span className='info-estilo'>{dadosClima?.main.sensation}°C</span></p>
          </div>
          <div>
            <IoIosWater className='info-estilo' />
            <p>Umidade: <span className='info-estilo'>{dadosClima?.main.humidity}%</span></p>
          </div>
          <div>
            <RiWindyLine className='info-estilo' />
            <p>Vento: <span className='info-estilo'>{dadosClima?.wind_speed} km/h</span></p>
          </div>
          <div>
            <IoIosSpeedometer className='info-estilo' />
            <p>Pressão: <span className='info-estilo'>{dadosClima?.main.pressure} hPa</span></p>
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
        </>
        }
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
