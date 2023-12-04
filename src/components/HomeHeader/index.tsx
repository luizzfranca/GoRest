import React from "react";
import {
  Container,
  Content,
  Icon,
  ImageUser,
  NameText,
  UserInfo,
  Title,
  TextColor,
} from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content>
        <UserInfo>
          <ImageUser
            source={{ uri: "https://github.com/luizzfranca.png" }}
            alt="perfil"
          />
          <NameText>Olá,Luiz</NameText>
        </UserInfo>

        <Icon name="bell" />
      </Content>
      <Title>Faça seu pedido,{'\n'}nos melhores restaurantes da sua <TextColor>cidade</TextColor></Title>
    </Container>
  );
}
