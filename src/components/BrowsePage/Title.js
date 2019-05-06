import React from 'react';

function Title(props){
	const styles={
		display:'inline-block',
		width:'20vw',
		height:'20vh',
		margin:'1vw',
		backgroundImage:`url(${props.img})`,
		backgroundSize:'cover'
	}
	return(
		<div style={styles}>
		</div>
		)
}

export default Title;