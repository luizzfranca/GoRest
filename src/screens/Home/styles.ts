import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  
  
`;

export const InputText = styled.TextInput`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  background-color: #dde6ed;
  margin-top: 10px;
  padding: 10px;
`;

export const InputContent = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ContentFlat = styled.View`
    width: '100%';
    height: 170px;
`;

export const IconSearch = styled(Feather)`
  font-size: 20px;
  position: absolute;
  left: 340px;
  bottom: 10px;
`;





