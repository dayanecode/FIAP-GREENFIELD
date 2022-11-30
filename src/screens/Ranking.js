import styled from "styled-components";
import { Colors } from "../shared/DesignTokens";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer"
import { CardRanking} from "../common-components/Card/CardRanking"
import { Button } from "../common-components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";


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


export function Ranking() {

    return (
        <>      
            <Header />
            <Wrapper>
                <CardRanking>                 
                    <TextPoints>28</TextPoints>
                    <Button>
                    shared 
                    <FontAwesomeIcon className="fa-light" icon={faShareFromSquare} /> 
                    </Button>
                </CardRanking> 

                <CardRanking > 
                    <TextPoints>G</TextPoints>
                </CardRanking>
            </Wrapper>
            
            <Footer />          

        </>
    );
}