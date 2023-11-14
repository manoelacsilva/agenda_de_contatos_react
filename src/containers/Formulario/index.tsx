import { FormEvent, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Campo } from '../../styles'
import * as Style from './styles'
import { RootReducer } from '../../store'
import { cadastrar } from '../../store/reducers/contatos'
import adicionar from '../../images/adicionar.png'

const Formulario = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const [name, setName] = useState('')
  const [tell, setTell] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        name,
        email,
        tell
      })
    )
  }

  const limparCampos = () => {
    setTimeout(() => {
      setName('')
      setTell('')
      setEmail('')
    }, 100)
  }

  return (
    <>
      <Style.Header>
        <h1>AGENDA DE CONTATOS</h1>
        <h2>{itens.length} contatos cadastrados</h2>
      </Style.Header>
      <Style.Form onSubmit={cadastrarContato}>
        <Campo
          value={name}
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setName(event.target.value)
          }
          type="text"
          placeholder="Nome"
          required
        />
        <Campo
          value={tell}
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setTell(event.target.value)
          }
          type="text"
          placeholder="Telefone"
          required
        />
        <Campo
          value={email}
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setEmail(event.target.value)
          }
          type="email"
          placeholder="E-mail"
          required
        />
        <Button type="submit" onClick={limparCampos}>
          <img src={adicionar} alt="Adicionar Contato" />
        </Button>
      </Style.Form>
    </>
  )
}

export default Formulario
