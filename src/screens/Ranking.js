import styled from "styled-components";
import { Colors, Shadows } from "../shared/DesignTokens";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer"
import { CardColumn} from "../common-components/Card/CardColumn"
import { Button } from "../common-components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardRankingPosition } from "../common-components/Card/CardRankingPosition";
import { CardRow } from "../common-components/Card/CardRow";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";



const Wrapper = styled.header `
    width: 100vw;   
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
`;

const TextPoints = styled.span`
    font-size: 20rem;
    font-weight: bold;
    text-shadow: -10px -10px ${Colors.LARANJA_GREENFIELD};
    color: ${Colors.AZUL_GREENFIELD};   
`;

const UserAvatar = styled.div `
	width: 70px;
	height: 70px;
    margin-left: 10px;
    margin-right: 10px;
	box-shadow: ${Shadows.ONE};
	border-radius: 50%;
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const TextUser = styled.span `
    font-size: 2rem;
    font-weight: bold;
    color: ${Colors.LARANJA_GREENFIELD};
    text-shadow: -1px 1px ${Colors.LARANJA_GREENFIELD};      
`;

const Score = styled.span `
    font-size: 2rem;
    font-weight: bold;
    color: ${Colors.AZUL_GREENFIELD};
    text-shadow: -1px 1px ${Colors.LARANJA_GREENFIELD};   
`;


export function Ranking() {
    return (
        <>      
            <Header />
            <Wrapper>

                <CardRow>               
                    <TextPoints>28</TextPoints>
                    <Button>
                        SHARE
                        <FontAwesomeIcon className="fa-light" icon={faShareNodes} /> 
                    </Button>
                </CardRow>
            
                <CardColumn>
                    <CardRankingPosition>
                        <TextUser>1º</TextUser>                       
                        <UserAvatar src = {require('../assets/images/na1.png')}/>
                        <TextUser>User_010</TextUser>
                        <Score>99 points</Score>                   
                    </CardRankingPosition> 

                    <CardRankingPosition>
                        <TextUser>2º</TextUser>                       
                        <UserAvatar src = {require('../assets/images/na1.png')}/>
                        <TextUser>User_099</TextUser>
                        <Score>35 points</Score>                   
                    </CardRankingPosition> 
                    
                   <CardRankingPosition>
                        <TextUser>3º</TextUser>                       
                        <UserAvatar src = {require('../assets/images/na1.png')}/>
                        <TextUser>User_149</TextUser>
                        <Score>23 points</Score>                   
                    </CardRankingPosition> 
                    
                    <CardRankingPosition>
                        <TextUser>4º</TextUser>                       
                        <UserAvatar src = {require('../assets/images/na1.png')}/>
                        <TextUser>User_007</TextUser>
                        <Score>12 points</Score>                   
                    </CardRankingPosition> 
                </CardColumn>                
            </Wrapper>
            <Footer/>                  

        </>
    );
}