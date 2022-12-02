import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const CardPoints = styled.div`
	width: 350px;
	height: 350px;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	align-content: center;
	background: ${Colors.ROSA_GREENFIELD};
	border: 1px solid ${Colors.LARANJA_GREENFIELD};	
    border-radius: 50%;
`;
