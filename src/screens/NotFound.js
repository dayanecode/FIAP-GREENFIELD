
import styled from 'styled-components';
import { Colors } from '../shared/DesignTokens';
import { Header } from "../common-components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { CardRanking } from '../common-components/Card/CardRanking';


const BugItem = styled.span `
    height: 80vh;  
    color: ${Colors.ROSA_GREENFIELD};    
    font-size: 20rem;    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center; 
   
`;

export function NotFound() {
    return (
        <>
        <Header /> 
        <CardRanking>
            <BugItem>
                <FontAwesomeIcon icon={faScrewdriverWrench} />            
            </BugItem>
        <div>Página em construção!</div>
        </CardRanking>      
        </>
    );
}