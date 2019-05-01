import React, { Component } from 'react';
import './browse.css';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';

class Browse extends Component{
	constructor(props){
		super(props);
		this.state={
			top:true
		}
		this.checkIfTop=this.checkIfTop.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkIfTop);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	checkIfTop(){
		if(window.scrollY === 0){
			this.setState({top:true})
		} else {
			this.setState({top:false})
		}
	}

	render(){
		return(
			<div>
			<Navbar top={this.state.top} />
			<HeroTitle />
			</div>
		)
	}

}

export default Browse;