import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const ImageDetail = styled.Image`
  width: 410px;
  height: 410px;
  border-radius: 60px;
  margin-top: 5px;
`;
export const Content = styled.View`
  padding: 10px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #0f0f0f;
`;
export const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #322f3d;
`;

export const ContainerInformationFood = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 9px;
  justify-content: space-around;
`;

export const Mins = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffd966;
  padding: 9px;
  border-radius: 20px;
  gap: 2px;
`;
export const IconMins = styled(Feather)`
  font-size: 26px;
  background-color: white;
  padding: 5px;
  border-radius: 20px;
`;
export const Minutes = styled.Text`
  font-size: 15px;
`;
export const TextMinutes = styled.Text`
  font-size: 15px;
`;

export const TextIngredient = styled.Text`
  color: black;
  font-size: 17px;
  margin-left: 9px;
  margin-top: 10px;
  font-weight: bold;
`;

export const ContentMeasure = styled.View`
  margin-left: 5px;
`;

export const TextMeasure = styled.Text`
  color: #c69749;
  font-size: 17px;
  margin-left: 9px;
  margin-top: 10px;
  font-weight: bold;
`;

export const TextInstructions = styled.Text`
  color: #61677a;
  font-size: 19px;
  font-weight: bold;
  align-items: center;
  margin-top: 8px;
  padding: 10px;
`;

export const TextModoPreparo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ButtonBack = styled(TouchableOpacity)`
  background-color: #ffd966;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const TextButton = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 15px;
`;
