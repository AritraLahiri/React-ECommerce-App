import styled from 'styled-components';

const StyledHero = styled.header`
	min-height:80vh;
	width:100%;
	height:80vh;
	background:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) , url("${(props) =>
		props.img} ") center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
	margin-bottom:120px;
	
`;

export default StyledHero;
