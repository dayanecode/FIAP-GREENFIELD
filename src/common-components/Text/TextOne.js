import styled from "styled-components"
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";

export const TextOne = styled.span`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.ONE};
    color: ${Colors.NEUTRAL_BLACK};
`;