import styled from 'styled-components';
import {
    Colors
} from '../../shared/DesignTokens';

export const CardRow = styled.div `
	width: 100vw;
	height: 85vh;
	display: flex;
	flex-wrap: wrap;	
	justify-content: center;	
	align-items: center; 
	align-content: center;
	background: ${Colors.BEGE_ESCURO_GREENFIELD};	
	border: 1px solid ${Colors.LARANJA_GREENFIELD};	
`;
