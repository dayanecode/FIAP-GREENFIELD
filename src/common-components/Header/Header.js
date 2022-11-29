import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logo from "../../assets/images/logo-branco.png";
import { TextMenu } from "../Text/TextMenu";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const MenuItem = styled.a`
    color: ${Colors.ROSA_GREENFIELD};
    font-size: 3rem;
    text-decoration: none;    
`;

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logotipo Greenfield'
}) `
    height: 14vh;
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
    // background-color: ${Colors.ROSA_GREENFIELD};
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
    width: 100%;   
    align-items: center; //define o linhamento vertical
    display: flex;
    flex-direction: column;
    margin: 0px 0px 10px 0px;    
`;

export function Header() {
    return (
        <>
            <Wrapper>
                <DivLogo>
                    <Logo />                                 
                </DivLogo>          

            

                <DivMenu>
                        <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faFacebook} />
                            </MenuItem>
                            <TextMenu
                                href = './'
                                alt ='Icone do Menu'> HOME
                            </TextMenu> 
                        </DivMenuItem>


                         <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faFacebook} />
                            </MenuItem>
                            <TextMenu
                                href = './ranking'
                                alt ='Icone do Menu'> RANKING
                            </TextMenu> 
                        </DivMenuItem>


                           <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faFacebook} />
                            </MenuItem>
                            <TextMenu
                                href = './'
                                alt ='Icone do Menu'> MISSIONS
                            </TextMenu> 
                        </DivMenuItem>


                           <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faFacebook} />
                            </MenuItem>
                            <TextMenu
                                href = './ranking'
                                alt ='Icone do Menu'> TREASURES
                            </TextMenu> 
                        </DivMenuItem>

                          <DivMenuItem>
                            <MenuItem>
                                <FontAwesomeIcon icon = {faFacebook} />
                            </MenuItem>
                            <TextMenu
                                href = './ranking'
                                alt ='Icone do Menu'> PROFILE
                            </TextMenu> 
                        </DivMenuItem>



                </DivMenu>  
            </Wrapper>

          
        </>
    );
}