import './styles/global.css';
import './styles/themes.css';
import {Container} from './components/Container';
import {Heading} from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
export function App() {
  return (
    <>
       <Container>
          <Logo />
       </Container>
       <Container>
          < Menu/>
       </Container>
        <Container>
          <Heading>
              Menu
          </Heading>
          </Container>
    </>
  )
}