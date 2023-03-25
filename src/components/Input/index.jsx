import { IconContainer, InputContainer, InputText } from "./styled";

export default function Input({ leftIcon, name, ...rest }) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText name={name} {...rest} />
    </InputContainer>
  );
}
