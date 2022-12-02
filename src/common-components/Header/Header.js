import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logo from "../../assets/images/logo-branco.png";
import { TextMenu } from "../Text/TextMenu";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard, faHouse, faMagnifyingGlass, faRankingStar, faToolbox } from '@fortawesome/free-solid-svg-icons'

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logotipo Greenfield'
}) `
    height: 12vh;
`;

const Wrapper = styled.header `
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center; //define o linhamento vertical
    background-color: ${Colors.LARANJA_GREENFIELD};
    
`;

const DivLogo = styled.div `
    width: 10% ;
    align-items: center;
    display: flex;
    justify-content: center;
    
`;

const DivMenu = styled.div`
    width: 90% ;
    align-items: center;    
    display: flex;
    justify-content: space-around;
`;

const DivMenuItem = styled.div`
    width: auto;   
    align-items: center; //define o linhamento vertical
    display: flex;
    flex-direction: column; 
`;

const MenuItem = styled.a `
    color: ${Colors.ROSA_GREENFIELD};
    font-size: 3rem;
    text-decoration: none;
    &amp;:hover {
	color: ${Colors.BEGE_ESCURO_GREENFIELD};
	}    
`;

export function Header() {

    return (
        <>
            <Wrapper>
                <DivLogo>
                    <Logo />                                 
                </DivLogo>        
           

                <DivMenu>
                        <DivMenuItem >
                            <MenuItem>
                                <FontAwesomeIcon                                 
                                 icon = {faHouse} />
                            </MenuItem>
                            <TextMenu
                                href = './'
                                alt ='Icone do Menu'> HOME
                            </TextMenu> 
                        </DivMenuItem>


                         <DivMenuItem  >
                            <MenuItem>
                                <FontAwesomeIcon icon = {faRankingStar} />
                            </MenuItem>
                            <TextMenu                                
                                href = './ranking'
                                alt ='Icone do Menu'> RANKING
                            </TextMenu> 
                        </DivMenuItem>


                           <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faMagnifyingGlass} />
                            </MenuItem>
                            <TextMenu
                                href = './mission'
                                alt ='Icone do Menu'> MISSIONS
                            </TextMenu> 
                        </DivMenuItem>


                           <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faToolbox} />
                            </MenuItem>
                            <TextMenu
                                href = './treasure'
                                alt ='Icone do Menu'> TREASURES
                            </TextMenu> 
                        </DivMenuItem>

                          <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon={faHatWizard} />
                            </MenuItem>
                            <TextMenu
                                href = './profile'
                                alt ='Icone do Menu'> PROFILE
                            </TextMenu> 
                        </DivMenuItem>
                    </DivMenu>  
            </Wrapper>

          
        </>
    );
}