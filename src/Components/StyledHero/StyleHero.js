import styled from 'styled-components';

const StyledHero = styled.header`
	min-height:80vh;
	${'' /* background: url("${(props) => props.img} ")center/cover no-repeat; */}
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("${(props) =>
		props.img} ") center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom:120px;


`;

export default StyledHero;
