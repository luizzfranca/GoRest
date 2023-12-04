import React from "react";
import { CardImage, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ImageCardProps extends TouchableOpacityProps {
  image: string;
  title: string;
}

export function ImageCard({ image, title, ...rest }: ImageCardProps) {
  return (
    <Container {...rest}>
      <CardImage source={{ uri: image }} resizeMode="cover" />
      <Title>{title}</Title>
    </Container>
  );
}
