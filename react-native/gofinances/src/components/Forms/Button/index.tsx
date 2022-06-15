import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
