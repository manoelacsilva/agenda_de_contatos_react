import { useDispatch } from 'react-redux'
import { SetStateAction, useEffect, useState } from 'react'

import contato from '../../images/contato.png'
import lixeira from '../../images/excluir.png'
import lapis from '../../images/editar.png'
import salvar from '../../images/salvar.png'
import cancelar from '../../images/cancelar.png'

import * as Style from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  id,
  name: nameOriginal,
  email: emailOriginal,
  tell: tellOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)

  useEffect(() => {
    if (
      nameOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      tellOriginal.length > 0
    ) {
      setName(nameOriginal)
      setEmail(emailOriginal)
      setTell(tellOriginal)
    }
  }, [nameOriginal, emailOriginal, tellOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setName(nameOriginal)
    setTell(tellOriginal)
    setEmail(emailOriginal)
  }

  return (
    <>
      <Style.CardContato>
        <Style.ContainerStatus>
          <img src={contato} alt="Contato" />
          <ul>
            <Style.Descricao
              disabled={!estaEditando}
              value={name}
              onChange={(evento: {
                target: { value: SetStateAction<string> }
              }) => setName(evento.target.value)}
            />
            <Style.Descricao
              disabled={!estaEditando}
              value={tell}
              onChange={(evento: {
                target: { value: SetStateAction<string> }
              }) => setTell(evento.target.value)}
            />
            <Style.Descricao
              disabled={!estaEditando}
              value={email}
              onChange={(evento: {
                target: { value: SetStateAction<string> }
              }) => setEmail(evento.target.value)}
            />
          </ul>
        </Style.ContainerStatus>
        <Style.ContainerButtons>
          {estaEditando ? (
            <>
              <Style.BotaoSalvar
                onClick={() => {
                  dispatch(editar({ name, tell, email, id }))
                  setEstaEditando(false)
                }}
              >
                <img src={salvar} alt="Salvar Edição" />
              </Style.BotaoSalvar>
              <Style.BotaoCancelarEDeletar onClick={cancelarEdicao}>
                <img src={cancelar} alt="Cancelar Edição" />
              </Style.BotaoCancelarEDeletar>
            </>
          ) : (
            <>
              <Style.BotaoCancelarEDeletar
                onClick={() => dispatch(remover(id))}
              >
                <img src={lixeira} alt="Excluir Contato" />
              </Style.BotaoCancelarEDeletar>
              <Style.BotaoEditar onClick={() => setEstaEditando(true)}>
                <img src={lapis} alt="Editar Contato" />
              </Style.BotaoEditar>
            </>
          )}
        </Style.ContainerButtons>
      </Style.CardContato>
    </>
  )
}

export default Contato
