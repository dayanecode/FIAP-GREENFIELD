import styled from "styled-components";
import { Colors } from "../shared/DesignTokens";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer"

const Div1 = styled.div `
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 2vw 0 2vw;
    background-color: ${Colors.BEGE_CLARO_GREENFIELD};
`;


export function Ranking() {

    return (
        <>
        <div>
            <Header />
            <Div1></Div1>
            <Div1></Div1>
            <Div1></Div1>
            <Div1></Div1>
            <Footer />          
        </div>

        </>
    );
}