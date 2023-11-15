import styled from 'styled-components'
import { Button } from '../../styles'

export const CardContato = styled.div`
  width: 100%;
  display: block;
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.35) 1px 2px 3px;

  img {
    height: 48px;
    width: 48px;
  }
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const BotaoCancelarEDeletar = styled(Button)`
  background-color: #f1f1f1;
  padding: 0px;

  img {
    max-width: 30px;
    max-height: 30px;
  }
`

export const BotaoEditar = styled(Button)`
  background-color: #f1f1f1;
  padding: 0px;

  img {
    max-width: 30px;
    max-height: 30px;
  }
`

export const BotaoSalvar = styled(Button)`
  background-color: #f1f1f1;

  img {
    max-width: 30px;
    max-height: 30px;
  }
`

export const Descricao = styled.textarea`
  display: inline;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
  resize: none;
  border: none;
  background-color: transparent;
  outline: none;
`
