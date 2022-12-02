import { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors, Shadows, FontWeights } from "../shared/DesignTokens";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer"
import { CardColumn} from "../common-components/Card/CardColumn"
import { Button } from "../common-components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardRankingPosition } from "../common-components/Card/CardRankingPosition";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { CardPoints } from "../common-components/Card/CardPoints";

const ContainerMain = styled.section`
    width: 100vw;   
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
`;

const TextScore = styled.text`
    font-size: 3rem;
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.NEUTRAL_WHITE};
    text-shadow: -1px 2px ${Colors.LARANJA_GREENFIELD};   
`;

const TextPoints = styled.text`
    font-size: 250px;
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.AZUL_GREENFIELD};
    text-shadow: -8px -8px ${Colors.LARANJA_GREENFIELD};
    padding: 0px 0px 20px 20px;

`;

const TextAlert = styled.text`
    font-size: 20px;
    color: ${Colors.LARANJA_GREENFIELD};
    text-shadow: 1px -1px ${Colors.ROSA_GREENFIELD}; 
    font-weight: ${FontWeights.BOLD};  

`;

const HeaderRanking = styled.div`   
    width: 500px;
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.LARANJA_GREENFIELD};
    background: ${Colors.BEGE_CLARO_GREENFIELD};
    border: 1px solid ${Colors.LARANJA_GREENFIELD};	
    display: flex;
    justify-content: space-around;
`
const TextHeaderRanking = styled.text`
    font-size: 2rem;
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.LARANJA_GREENFIELD};   
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

const TextUser = styled.section`
    font-size: 2rem;
    font-weight: ${FontWeights.BOLD};
    color: ${Colors.LARANJA_GREENFIELD};
    text-shadow: -1px 1px ${Colors.LARANJA_GREENFIELD};      
`;

const TextPointsRanking = styled.text`
    font-size: 2rem;
    font-weight: ${FontWeights.BOLD};
    text-shadow: -1px -1px ${Colors.LARANJA_GREENFIELD};
    color: ${Colors.AZUL_GREENFIELD};   
`;


export function Ranking() {

const [posts, setPosts] = useState([]);
const points = [500];

useEffect(() => fetchPosts(), []);



function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.length = 4;
        setPosts(data);
      });
  }

    return (
        <>      
            <Header />
            <ContainerMain>

                <CardColumn>
                    <TextScore>Your Points</TextScore> 
                    
                        <CardPoints>                        
                            <TextPoints>36</TextPoints>                        
                        </CardPoints>
                    
                    <TextAlert>
                        Keep completing more missions to increase your score even more!
                    </TextAlert>
                    <Button> 
                        SHARE
                        <FontAwesomeIcon className="fa-light" icon={faShareNodes} /> 
                    </Button>
                </CardColumn>
            
                <CardColumn>        
                    <TextAlert>The top 20 advance to the next level!</TextAlert>
                    <HeaderRanking>
                        <TextHeaderRanking>Position</TextHeaderRanking>
                        <TextHeaderRanking>User</TextHeaderRanking>
                        <TextHeaderRanking>Points</TextHeaderRanking>
                    </HeaderRanking>

                    {posts.map((post) =>(                      
                            <CardRankingPosition>                                
                                <TextUser>{post.id}º</TextUser>
                                <UserAvatar
                                src={`https://avatars.dicebear.com/api/avataaars/${4 * Math.random(post.id)}/.svg`}
                                alt="imagem Avatar"
                                />
                                <TextUser>user{Math.floor(Math.random(post.id)*100)}</TextUser>
                                <TextPointsRanking>{points[0]-post.id*110}</TextPointsRanking>
                           </CardRankingPosition>                       
                    ))}

                </CardColumn>
            </ContainerMain>

            <Footer/>
                              

        </>
    );
}