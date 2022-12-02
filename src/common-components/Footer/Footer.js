import styled from "styled-components";
import { Colors, FontWeights } from "../../shared/DesignTokens";
import { ParagraphOne } from "../Paragraph/ParagraphOne";
import { TextTwo } from "../Text/TextTwo.js";
import { TextThree} from "../Text/TextThree";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContainerFooter = styled.footer`
    width: 100vw;
    background-color: ${Colors.ROSA_GREENFIELD};
    display: flex;
    flex-direction: column;
`;

const DivTeam = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;    
`;

const Team = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;    
`;

const DivGit = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Link = styled.a`
    color: ${Colors.LARANJA_GREENFIELD};
    text-shadow: 1px 1px ${Colors.BEGE_CLARO_GREENFIELD}; ;
    font-weight: ${FontWeights.BOLD};
    text-decoration: none;
    &amp;:hover {
		color: ${Colors.NEUTRAL_WHITE};
        text-shadow: -1px 1px ${Colors.LARANJA_GREENFIELD};
	}
`;


export function Footer(){
    return (
        <>
            <ContainerFooter>         

                <DivTeam>                    
                    <Team>
                        <TextThree>GREENFIELD</TextThree>
                        <TextTwo>FIAP | 2TINOR-2022</TextTwo>
                        <ParagraphOne>Sistemas Para Internet</ParagraphOne>
                        <ParagraphOne>GRUPO - X</ParagraphOne>
                    </Team>

                    <Team>
                        <TextTwo>Dayane Ramos do Nascimento</TextTwo>
                        <ParagraphOne>RM 92632</ParagraphOne>
                        <DivGit>                       
                            <ParagraphOne>                                
                                <Link href='https://github.com/dayanecode'
                                target="_blank"                                
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    .dayanecode
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>
                    

                    <Team>
                    <TextTwo>Gabriel Dovnorovzki Rodrigues</TextTwo>
                        <ParagraphOne>RM 92399</ParagraphOne>
                        <DivGit>                   
                            <ParagraphOne>
                                <Link
                                className="App-link" 
                                href='https://github.com/gabsdovz' 
                                target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                    .gabsdovz 
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>


                    <Team>
                    <TextTwo>Henrique Fernandez Soares</TextTwo>
                        <ParagraphOne>RM 92489</ParagraphOne>
                        <DivGit>                     
                            <ParagraphOne>
                                <Link href='https://github.com/RickFernandez'
                                target="_blank"
                                > 
                                 <FontAwesomeIcon icon={faGithub} />
                                     .RickFernandez
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>

                </DivTeam>
            </ContainerFooter>
        </>
    );
}