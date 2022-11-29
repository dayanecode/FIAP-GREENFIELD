import styled from "styled-components";
import { Colors } from "../shared/DesignTokens";
import { Header } from "../common-components/Header/Header";
import { Footer } from "../common-components/Footer/Footer"

const DivBody = styled.div `
    width: 100vw;
    height: 70vmin;
    display: flex;
    justify-content: start;
    align-items: center; 
    background-color: ${Colors.BEGE_CLARO_GREENFIELD};
`;


export function Ranking() {

    return (
        <>
      
            <Header />

            <DivBody>
            </DivBody> 
                      
            <Footer />          

        </>
    );
}