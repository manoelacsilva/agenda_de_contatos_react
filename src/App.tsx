import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import Formulario from './containers/Formulario'
import ListaDeContatos from './containers/ListaDeContatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Formulario />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
