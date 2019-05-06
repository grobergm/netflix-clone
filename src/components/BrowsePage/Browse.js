import React, { Component } from 'react';
import './browse.css';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';
import BrowseDrop from './BrowseDrop';
import TitleRow from './TitleRow';

import titles from './mockData';


	class Browse extends Component{
	constructor(props){
		super(props);
		this.state={
			top:true,
			selected:null,
			myList:[]
		}
		this.checkIfTop=this.checkIfTop.bind(this);
		this.hoverSelect=this.hoverSelect.bind(this);
		this.handleAddToList=this.handleAddToList.bind(this);
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

	filterTitles(category,subCategory){
		return titles.filter(title=>title[category]===subCategory)
	}

	handleAddToList(title){
		let currentList=this.state.myList.slice();
		if(!this.state.myList.includes(title)){
			currentList.unshift(title);
		}
		this.setState({myList:currentList});
	}

	render(){
	return(
		<div>
			<Navbar top={this.state.top} hoverSelect={this.hoverSelect} />
			{
				this.state.selected==='browse'? <BrowseDrop hoverSelect={this.hoverSelect} /> : null
			}
			<HeroTitle onAddToList={this.handleAddToList} />
			<TitleRow 
				header='My List' 
				titles={this.state.myList}
				onAddToList={this.handleAddToList} />
			<TitleRow 
				header='New Releases' 
				titles={this.filterTitles('newRelease',true)}
				onAddToList={this.handleAddToList} />
			<TitleRow 
				header='Documentaries' 
				titles={this.filterTitles('genre','Documentary')}
				onAddToList={this.handleAddToList} />
			<TitleRow 
				header='Action' 
				titles={this.filterTitles('genre','Action')}
				onAddToList={this.handleAddToList} />
			
		</div>
	)
	}
}

export default Browse;