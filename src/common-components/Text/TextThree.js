import styled from "styled-components"
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";

export const TextThree = styled.span`
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.ULTRA_BOLD};
    font-size: ${FontSizes.THREE};
	color: ${Colors.NEUTRAL_WHITE};
    text-shadow: -1px 1px ${Colors.LARANJA_GREENFIELD};
`;