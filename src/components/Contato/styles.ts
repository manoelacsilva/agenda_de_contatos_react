import styled from 'styled-components'
import { Button } from '../../styles'

export const CardContato = styled.div`
  width: 100%;
  display: block;
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: rgb(245, 246, 250);
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
  background-color: red;
`

export const BotaoEditar = styled(Button)`
  background-color: yellow;
`

export const BotaoSalvar = styled(Button)`
  background-color: green;
`

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
`
