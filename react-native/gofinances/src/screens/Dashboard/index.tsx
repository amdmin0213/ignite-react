import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://github.com/diegohfcelestino.png' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Diego</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 10.000,00"
          lastTransaction="Ultima entrada de teste"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 5.000,00"
          lastTransaction="Ultima saída de teste"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 5.000,00"
          lastTransaction="Saldo Final de teste"
        />
      </HighlightCards>
    </Container>
  )
}
