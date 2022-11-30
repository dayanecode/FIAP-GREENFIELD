import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
} from '../../shared/DesignTokens';

export const Button = styled.button`
	
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: none;
	outline: none;
	width: 25%;
	height: 40px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	background-color: ${(props) =>
		props.ghost ? Colors.ROSA_GREENFIELD : Colors.LARANJA_GREENFIELD};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	padding: ${Spaces.ONE} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
	text-transform: uppercase;
    letter-spacing: ${FontLetterSpacings.MEDIUM}; 

	&amp;:hover {
		color: ${Colors.BEGE_ESCURO_GREENFIELD};
		background-color: ${Colors.ROSA_GREENFIELD};
		
	}
`;