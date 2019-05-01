import React, { Component } from 'react';
import './browse.css';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';
import BrowseDrop from './BrowseDrop';

	class Browse extends Component{
	constructor(props){
		super(props);
		this.state={
			top:true,
			selected:null
		}
		this.checkIfTop=this.checkIfTop.bind(this);
		this.hoverSelect=this.hoverSelect.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkIfTop);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.checkIfTop);
	}

	checkIfTop(){
		if(window.scrollY === 0){
			this.setState({top:true})
		} else {
			this.setState({top:false})
		}
	}

	hoverSelect(name){
		this.setState({selected:name});
		console.log(this.state.selected)
	}

	render(){
	return(
		<div>
			<Navbar top={this.state.top} hoverSelect={this.hoverSelect} />
			{
				this.state.selected==='browse'? <BrowseDrop hoverSelect={this.hoverSelect} /> : null
			}
			<HeroTitle />
		</div>
	)
	}
}

export default Browse;