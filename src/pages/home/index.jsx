import Button from "../../components/Button";
import Header from "../../components/Header";
import bannerImage from "../../assets/banner.png"
import { Container, TextContent, Title, TitleHeighlight } from "./style";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = ()=>{
    navigate("/login")
  }
  return (
    <>
      <Header />
      <Container>
        <div>
        <Title>
          <TitleHeighlight>Implemente</TitleHeighlight> <br /> o seu futuro
          global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do
          mundo e encare seu novo desafio profissional, evoluindo em comunidade
          com os melhores experts.
        </TextContent>

        <Button variant="secondary" title="Começar Agora" onClick={handleClickSignIn}/>
        </div>
        <div>
            <img width="100%" src={bannerImage} alt="" />
        </div>
      </Container>
    </>
  );
}
