import styled from "styled-components";
import { Colors } from "../../shared/DesignTokens";
import logo from "../../assets/images/logo.png";
import iconHome from "../../assets/icons/house-solid.svg";
import iconRanking from "../../assets/icons/ranking-star-solid.svg";
import iconMission from "../../assets/icons/magnifying-glass-solid.svg";
import iconTreasure from "../../assets/icons/gem-solid.svg";
import iconPerfil from "../../assets/icons/user-secret-solid.svg";

const Logo = styled.img.attrs({
    src: logo,
    alt: 'Logotipo Greenfield'
}) `
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 300px;
`;

const IconHome = styled.img.attrs({
    src: iconHome,
    alt: 'Ícone da página Home'
})
`
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 100px;
    // filter: invert(87 % ) sepia(6 % ) saturate(1938 % ) hue - rotate(352 deg) brightness(103 % ) contrast(87 % );
`;

const IconRanking = styled.img.attrs({
    src: iconRanking,
    alt: 'Ícone da página de ranking'    
})
`
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 100px;
`;

const IconMission = styled.img.attrs({
    src: iconMission,
    alt: 'Ícone da página de missões'
})
`
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 100px;
`;

const IconTreasure = styled.img.attrs({
    src: iconTreasure,
    alt: 'Ícone da página de tesouros'
})
`
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 100px;
`;

const IconPerfil = styled.img.attrs({
    src: iconPerfil,
    alt: 'Ícone da página de perfil'
})
`
    height: 10vh;
    margin: 0 1vw 0 0;
    margin-right: 100px;
`;


const Wrapper = styled.header `
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 2vw 0 2vw;
    background-color: ${Colors.LARANJA_GREENFIELD};
`;


export function Header() {
    return (
        <>
            <Wrapper>
                <Logo />     
                <IconHome />                
                <IconRanking />                
                <IconMission />                
                <IconTreasure />                
                <IconPerfil />         
            </Wrapper>
        </>
    );
}