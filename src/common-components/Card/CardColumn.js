import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const CardColumn = styled.div`
	width: 100vw;
	height: 85vh;
	display: flex;
	flex-direction: column;	
	justify-content: space-around;
	align-items: center;
	align-content: center;
	background: ${Colors.BEGE_ESCURO_GREENFIELD};
	padding: 20px;
	border: 1px solid ${Colors.LARANJA_GREENFIELD};	
`;

