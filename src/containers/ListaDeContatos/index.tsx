import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import { MainContainer } from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map(
          (contact: {
            tell: string
            email: string
            id: number
            name: string
          }) => (
            <li key={contact.name}>
              <Contato
                id={contact.id}
                name={contact.name}
                email={contact.email}
                tell={contact.tell}
              />
            </li>
          )
        )}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
