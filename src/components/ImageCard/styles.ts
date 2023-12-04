import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100px;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  align-self: flex-start;
  
`;

export const CardImage = styled.Image`
  width: 70px;
  height: 70px;
  background-color: #e3f4f4;
  border-radius: 10px;
  
`;
export const Title = styled.Text`
  color: black;
  font-weight: bold;
`;
