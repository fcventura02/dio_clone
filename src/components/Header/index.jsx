import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/arrow";
import Logo from "../../assets/logo";
import Button from "../Button";
import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  SearchInputContainer,
  UserPicture,
  Wrapper,
} from "./style";

export default function Header({ autenticado=false }) {
  const navigate = useNavigate();
  const handleClickNavigation = (navigation)=>{
    navigate(navigation)
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo />
          {autenticado && (
            <>
              <SearchInputContainer>
                <Input placeholder="Buscar..." />
              </SearchInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture
                src="https://github.com/fcventura02.png"
                alt="Thumb do usuário"
              />
              <Arrow />
            </>
          ) : (
            <>
              <MenuRight onClick={()=>handleClickNavigation("/")} >Home</MenuRight>
              <Button onClick={()=>handleClickNavigation("/login")} title="Entrar" />
              <Button onClick={()=>handleClickNavigation("/login")} title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
