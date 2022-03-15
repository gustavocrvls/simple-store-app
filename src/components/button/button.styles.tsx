import styled from "styled-components/native";
import { ButtonContainerProps } from "./button.dto";

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  margin-vertical: 40px;
  width: 120px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props: ButtonContainerProps) => props.bgColor};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
