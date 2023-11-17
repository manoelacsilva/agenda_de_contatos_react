import React, { FormEvent, SetStateAction, useState } from 'react'
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
  const [tell, setTell] = useState(0)
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

    setName('')
    setTell(0)
    setEmail('')
  }

  return (
    <>
      <Style.Header>
        <h1>AGENDA DE CONTATOS</h1>
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
          value={tell === 0 ? '' : tell.toString()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = event.target.value
            const numericValue = parseInt(inputValue, 10)

            if (!isNaN(numericValue)) {
              setTell(numericValue)
            } else if (inputValue === '') {
              setTell(0)
            }
          }}
          type="tel"
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
        <Button type="submit">
          <img src={adicionar} alt="Adicionar Contato" />
        </Button>
      </Style.Form>
      <Style.QuantidadeDeContatosSalvos>
        <h2>{itens.length} contato(s) cadastrado(s)</h2>
      </Style.QuantidadeDeContatosSalvos>
    </>
  )
}

export default Formulario
