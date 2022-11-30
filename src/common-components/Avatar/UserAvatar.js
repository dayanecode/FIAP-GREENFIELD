import styled from 'styled-components';
import { Shadows, BorderRadiuses } from '../../shared/DesignTokens';

export const UserAvatar = styled.div `
	width: 200px;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
