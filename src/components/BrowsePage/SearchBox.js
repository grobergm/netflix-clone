import React from 'react';

function SearchBox(props){
	const openBox={
		transform:props.searchOpen?'translateX(0)':'translateX(15.5vw)',
	}
	const searchBox={
		width:'13vw',
		transform:props.searchOpen?'translateX(0)':'translateX(15.5vw)',
		backgroundColor:'black',
		color:'white',
		border:'1px solid white',
		padding:'1vw'
	}
	return (
		<div style={{overflow:'hidden'}}>
			<i onClick={props.onSearchOpen} style={openBox} className="fas fa-search search-animation"></i>
			<input className="search-animation" style={searchBox} type='text' placeholder='Search Titles' />
		</div>
		)
}

export default SearchBox;