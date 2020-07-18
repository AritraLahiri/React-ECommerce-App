import styled from 'styled-components';

const StyledHero = styled.header`
	min-height:80vh;
	width:100%;
	height:80vh;
	background:  url("${(props) => props.img} ") center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom:120px;
	
`;

export default StyledHero;
