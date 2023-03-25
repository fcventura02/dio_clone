import Button from "../../components/Button";
import Header from "../../components/Header";
import { Collumn, Container, Row, TextContent, Title, Wrapper } from "./style";
import Input from "../../components/Input";
import Email from "../../assets/email";
import Password from "../../assets/password";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleClickSignIn = ()=>{
    navigate("/feed")
  }
  return (
    <>
      <Header />
      <Container>
        <Collumn>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Collumn>
        <Collumn>
          <Wrapper>
            <Title as="p">Faça seu cadastro</Title>
            <TextContent>Faça seu login e make the change.</TextContent>
            <form action="#">
              <Input
                leftIcon={<Email />}
                type="email"
                placeholder="E-mail"
                name="E-mail"
              />
              <Input
                leftIcon={<Password />}
                type="password"
                placeholder="Senha"
                name="Senha"
              />
              <Button
                title="Entrar"
                onClick={handleClickSignIn}
                variant="secondary"
                size="100%"
              />
            </form>
            <Row>
              <TextContent type="esqueci">Esqueci minha senha</TextContent>
              <TextContent type="criar">Criar conta</TextContent>
            </Row>
          </Wrapper>
        </Collumn>
      </Container>
    </>
  );
}
