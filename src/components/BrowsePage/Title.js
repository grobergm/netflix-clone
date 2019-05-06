import React from 'react';

function Title(props){
	const styles={
		display:'inline-block',
		width:'20vw',
		height:'20vh',
		margin:'1vw',
		backgroundImage:`url(${props.title.img})`,
		backgroundSize:'cover',
		transition:'transform 1s',
		position:'relative',
		zIndex:props.selected===props.id?'1':'0',
		transform:props.selected===props.id?'scale(2)':'scale(1)',
	}

	return(
		<div onMouseOver={props.onSelect} style={styles}>
		</div>
		)
}

export default Title;