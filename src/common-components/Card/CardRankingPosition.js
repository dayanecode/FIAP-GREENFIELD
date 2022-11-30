import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const CardRankingPosition = styled.div `
	width: 500px;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;	
	align-items: center; 
	align-content: center;
	background: ${Colors.ROSA_GREENFIELD};
	padding: 10px;
	border: 1px solid ${Colors.LARANJA_GREENFIELD};	
`;

