import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionCardProps
} from '../../components/TransactionCard'
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
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de sistemas',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzi',
      amount: 'R$ 100,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '13/04/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 1.100,00',
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: '13/04/2022'
    }
  ]

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
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
