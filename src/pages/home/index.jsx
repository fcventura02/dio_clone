import Button from "../../components/Button";
import Header from "../../components/Header";
import bannerImage from "../../assets/banner.png"
import { Container, TextContent, Title, TitleHeighlight } from "./style";

export default function Home() {
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

        <Button variant="secondary" title="Começar Agora" />
        </div>
        <div>
            <img src={bannerImage} alt="" />
        </div>
      </Container>
    </>
  );
}
