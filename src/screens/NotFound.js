
import styled from 'styled-components';
import { Colors } from '../shared/DesignTokens';
import { Header } from "../common-components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { CardColumn } from '../common-components/Card/CardColumn';
import { Footer } from "../common-components/Footer/Footer";
import '../App.css';


const BugIcon = styled.span `
    height: 80vh;  
    color: ${Colors.ROSA_GREENFIELD};    
    font-size: 20rem;    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

`;

const TextNotFound = styled.div `
    font-size: 2rem;
    color: ${Colors.LARANJA_GREENFIELD};
    display:flex;
`;

export function NotFound() {
    return (
        <>
        <Header /> 
        <CardColumn>
            < BugIcon className = 'App-logo' >
                <FontAwesomeIcon icon={faScrewdriverWrench} />            
            </BugIcon>                              
            <TextNotFound>Página em construção!</TextNotFound>
        </CardColumn>
        <Footer/>           
        </>
    );
}