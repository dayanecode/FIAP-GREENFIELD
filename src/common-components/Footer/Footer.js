import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logoGitHub from "../../assets/icons/github-logo.svg"
import { ParagraphOne } from "../Paragraph/ParagraphOne";
import { TextTwo } from "../Text/TextTwo.js"
import logo from "../../assets/images/logo.png";
import { TextThree} from "../Text/TextThree";

const Wrapper = styled.footer`
    width: 100%;
    padding: 1vh 0;
    background-color: ${Colors.BEGE_ESCURO_GREENFIELD};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DivTeam = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Team = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logotipo Greenfield'
})  `
height: 10vh;
margin: 1 1vw 0 0;  
margin-top: 10px;
margin-botton: 10px;
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

                    <Logo/>
                    
                    <Team>
                        <TextThree>Greenfield</TextThree>
                        <TextTwo>FIAP | 2TINOR-2022</TextTwo>
                        <ParagraphOne>SISTEMAS PARA INTERNET</ParagraphOne>
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