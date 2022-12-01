import { useEffect, useState } from "react";
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
    // font-weight: bold;
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

const [posts, setPosts] = useState([]);

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
                        <TextUser>Ranking</TextUser>
                        <TextUser>Avatar</TextUser>
                        <TextUser>User</TextUser>
                    </CardRankingPosition>

                    {posts.map((post) =>(                      
                            <CardRankingPosition>
                                
                                <TextUser>{post.id}º</TextUser>
                                <UserAvatar
                                src={`https://avatars.dicebear.com/api/avataaars/${4 * post.id}/.svg`}
                                alt="imagem Avatar"
                                />
                                <TextUser>User_00{post.id * 2}</TextUser>
                           </CardRankingPosition>                       
                    ))}

                </CardColumn>
            </Wrapper>
            <Footer/>                  

        </>
    );
}