import Header from "../../components/Header";
import { Column, Container, Title, TitleHeighlight } from "./style";
import Card from "../../components/Card";
import RankingUsers from "../../components/RankUsers";

export default function Feed() {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHeighlight># RANKING 5 TOP DA SEMANA</TitleHeighlight>
          <RankingUsers
            nome="Filipe"
            percentual={100}
            image="https://github.com/fcventura02.png"
          />
          <RankingUsers
            nome="Filipe"
            percentual={100}
            image="https://github.com/fcventura02.png"
          />
          <RankingUsers
            nome="Filipe"
            percentual={90}
            image="https://github.com/fcventura02.png"
          />
          <RankingUsers
            nome="Filipe"
            percentual={80}
            image="https://github.com/fcventura02.png"
          />
          <RankingUsers
            nome="Filipe"
            percentual={70}
            image="https://github.com/fcventura02.png"
          />
        </Column>
      </Container>
    </>
  );
}
