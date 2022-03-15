import { ButtonProps } from "./button.dto";
import { ButtonContainer, ButtonText } from "./button.styles";

export function Button({ onPress, bgColor, title }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.6} onPress={onPress} bgColor={bgColor}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
