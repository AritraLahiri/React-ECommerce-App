import React from 'react';

function Hero(props) {
	return <header className={props.Hero}>{props.children}</header>;
}
export default Hero;

Hero.defaultProps = {
	Hero: 'Hero'
};
