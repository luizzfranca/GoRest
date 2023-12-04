import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  padding: 10px;
  
`;

export const CardImage = styled.Image`
  width: 180px;
  height: 200px;
  border-radius: 50px;
  
`;
export const Title = styled.Text`
  color: black;
  font-weight: bold;
  text-align: center;
`;
