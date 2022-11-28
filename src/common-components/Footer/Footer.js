import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logoGitHub from "../../assets/icons/github-logo.svg"
import { ParagraphOne } from "../Paragraph/ParagraphOne";
import { TextTwo } from "../Text/TextTwo.js"

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

const GitHub = styled.img.attrs({
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


export function Footer(){
    return (
        <>
            <Wrapper>
                <DivTeam>
                    <Team>
                        <TextTwo>Dayane Ramos do Nascimento</TextTwo>
                        <ParagraphOne>RM 92632</ParagraphOne>
                        <DivGit>
                        <GitHub />
                            <ParagraphOne>dayanecode</ParagraphOne>
                        </DivGit>
                    </Team>
                    

                    <Team>
                    <TextTwo>Gabriel Dovnorovzki Rodrigues</TextTwo>
                        <ParagraphOne>RM 92399</ParagraphOne>
                        <DivGit>
                        <GitHub />
                            <ParagraphOne>gabsdovz</ParagraphOne>
                        </DivGit>
                    </Team>


                    <Team>
                    <TextTwo>Henrique Fernandez Soares</TextTwo>
                        <ParagraphOne>RM 92489</ParagraphOne>
                        <DivGit>
                        <GitHub />
                            <ParagraphOne>
                                <a href='https://github.com/dayanecode'>RickFernandez</a>
                            </ParagraphOne>
                        </DivGit>
                    </Team>

                </DivTeam>
            </Wrapper>
        </>
    );
}