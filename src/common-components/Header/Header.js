import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logo from "../../assets/images/logo.png";

const Wrapper = styled.header `
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 2vw 0 2vw;
    background-color: ${Colors.LARANJA_GREENFIELD};
`;

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logotipo Greenfield'
}) `
    height: 10vh;
    margin: 0 1vw 0 0;
`;

export function Header() {
    return (
        <>
            <Wrapper>
                <Logo />
            </Wrapper>

        </>
    );
}