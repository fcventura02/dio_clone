import { NameText, Progress, RankUserContainer, UserPicture } from "./styled";

export default function RankingUsers({nome, image, percentual}) {

    return(
        <RankUserContainer>
            <UserPicture src={image} alt={`Thumb du usuário ${nome}`} />
            <div>
                <NameText>
                    {nome}
                </NameText>
                <Progress percentual={percentual}/>
            </div>
        </RankUserContainer>
    )
}