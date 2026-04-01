import './styles/global.css';
import './styles/themes.css';
import {Heading}from'./components/Heading'
import{Container} from './components/Container';
import {Logo} from './components/Logo'
import {Menu}from './components/Menu'
import {CountDown} from './components/CountDown'
import { DefaultInput } from './components/DefaultInput';
import {Cycles} from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { CirclePlay,CircleStop } from 'lucide-react';
import { Footer } from './components/Footer';
export function App() {
  return (
    <>
          <Container>
            <Logo />
          </Container>

          <Container>
            <Menu />
          </Container>

          <Container>
              <CountDown />
          </Container>
              <Container>
                <form className="form" action = ''>

                  <div>
                    <label htmlFor="">task</label>
                    <input id = "meuInput"type="text" 
                    placeholder='Digite Algo'/>
                   </div>
                   <div className="formRow">
                      <DefaultInput 
                      id='meuInput' 
                      type='text'
                      labelText='task'
                      placeholder='BatatinhaFrita'
                      />
                   </div>
                    <div className="formRow">
                    linha verde
                  </div>
                  <div className='formRow'>
                    <Cycles />
                  </div>
                  <div className="formRow">
                    <DefaultButton icon = {<CirclePlay />} color = 'green' />
                    <DefaultButton icon = {<CircleStop />} color='red' />
                  </div>
                  <button>Enviar</button>
                </form>
              </Container>

          <Container>
            <Footer />
          </Container>
    </>
  )
}