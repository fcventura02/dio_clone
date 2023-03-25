import ThumbUp from "../../assets/thumbUp";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./style";
import BgCard from '../../assets/bg-card.png'

export default function Card(){
    return(
        <CardContainer>
            <ImageBackground src={BgCard}/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://github.com/fcventura02.png" alt="Thumb do usuário" />
                    <div>
                        <h4>
                            Filipe
                        </h4>
                        <p>
                            Há 8 minutos
                        </p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>
                        Projeto para curso de HTML e CSS
                    </h4>
                    <p>
                        Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <ThumbUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}