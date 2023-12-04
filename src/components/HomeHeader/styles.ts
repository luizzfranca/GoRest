import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons";

export const Container = styled.SafeAreaView`
  margin-top: 50px;
  
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const UserInfo = styled.View``;


export const ImageUser = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;
export const NameText = styled.Text`
    color: #22092C;
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const Title = styled.Text`
    color: #4F4A45;
    margin-top: 10px;
    
    font-size: 20px;
    font-weight: bold;
`

export const TextColor = styled.Text`
  color: #ED7D31;
`;


export const Icon = styled(Feather)`
    margin-right: 10px;
    font-size: 30px;
`;







