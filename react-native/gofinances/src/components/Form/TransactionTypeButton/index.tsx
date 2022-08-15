import React from "react";
import { Container, Icon, Title, Button } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
};

export function TransactionTypeButton({
  isActive,
  title,
  type,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
