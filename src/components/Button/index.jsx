import { ButtonContainer } from "./style";

export default function Button ({title, variant = 'primary', size="", onClick}){
    return(
        <ButtonContainer variant={variant} size={size} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}