import React from 'react';

function Title(props){
	const styles={
		width:'25%',
		height:'10vw',
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