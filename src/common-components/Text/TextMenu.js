import styled from "styled-components";
import {
    Colors,
    FontFamilies,
    FontSizes,
    FontWeights,
} from "../../shared/DesignTokens";


export const TextMenu = styled.a`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.TWO};
    color: ${Colors.NEUTRAL_WHITE};
    text-decoration: none;
    
    &amp;:hover {
	    color: ${Colors.BEGE_ESCURO_GREENFIELD};
	}  
`;
