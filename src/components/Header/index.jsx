import Logo from "../../assets/logo";
import Button from "../Button";
import { Container, Hidden, Input, Menu, MenuRight, Row, SearchInputContainer, UserPicture, Wrapper } from "./style";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo />
          <SearchInputContainer>
            <Input placeholder="Buscar..."/>
          </SearchInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Hidden>
          <Row>
            <UserPicture src="https://github.com/fcventura02.png" alt="Thumb do usuário" />
          </Row>
        </Hidden>
        <Row>
          <MenuRight>Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </Container>
    </Wrapper>
  );
}
