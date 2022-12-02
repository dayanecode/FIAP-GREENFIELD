import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights, Spaces } from "../../shared/DesignTokens";

export const TextTwo = styled.span`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.TWO};
    color: ${Colors.LARANJA_GREENFIELD};
    text-shadow: 1px 1px ${Colors.BEGE_CLARO_GREENFIELD}; ;
    margin-top: ${Spaces.ONE};
    margin-right: ${Spaces.TEN};
`;


