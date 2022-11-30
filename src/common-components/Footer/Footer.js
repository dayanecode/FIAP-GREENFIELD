import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logoGitHub from "../../assets/icons/github-logo.svg";
import { ParagraphOne } from "../Paragraph/ParagraphOne";
import { TextTwo } from "../Text/TextTwo.js";
import { TextThree} from "../Text/TextThree";

const Wrapper = styled.footer`
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


const IconGitHub = styled.img.attrs({
    src: logoGitHub,
    alt: 'Logotipo GitHub'
}) `
    width: 2vw;
    margin: 0 1vw 0 0;
`;


const DivGit = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Link = styled.a`
    color: ${Colors.LARANJA_GREENFIELD};
    text-decoration: none;
`;



export function Footer(){
    return (
        <>
            <Wrapper>         

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
                        <IconGitHub />
                            <ParagraphOne>
                                <Link href='https://github.com/dayanecode'
                                target="_blank"
                                >
                                    dayanecode
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>
                    

                    <Team>
                    <TextTwo>Gabriel Dovnorovzki Rodrigues</TextTwo>
                        <ParagraphOne>RM 92399</ParagraphOne>
                        <DivGit>
                        <IconGitHub />
                            <ParagraphOne>
                                <Link
                                className="App-link" 
                                href='https://github.com/gabsdovz' 
                                target="_blank">
                                    gabsdovz 
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>


                    <Team>
                    <TextTwo>Henrique Fernandez Soares</TextTwo>
                        <ParagraphOne>RM 92489</ParagraphOne>
                        <DivGit>
                        <IconGitHub />
                            <ParagraphOne>
                                <Link href='https://github.com/RickFernandez'
                                target="_blank"
                                >
                                    RickFernandez
                                </Link>
                            </ParagraphOne>
                        </DivGit>
                    </Team>

                </DivTeam>
            </Wrapper>
        </>
    );
}