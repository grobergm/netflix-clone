import React, { Component } from 'react';
import Title from './Title';



class TitleRow extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedIndex:null
		}
		this.handleSelect=this.handleSelect.bind(this);
	}

	handleSelect(id){
		this.setState({selectedIndex:id});
	}

	render(){
		const styles={
			overflowX:'auto',
			whiteSpace: 'nowrap',
			padding:'10vh 10vw',
			position:'relative',
			zIndex:'0',
			textAlign:'left'
		}

	return (
		<div style={styles}>
			<p>{this.props.header}</p>
			{
				this.props.titles.map((title,index)=>{
					return <Title
										title={title}
										key={index}
										id={index}
										onSelect={this.handleSelect}
										selected={this.state.selectedIndex}
										onAddToList={this.props.onAddToList}
									/>
				})
			}
		</div>
		)
	}
	
}

export default TitleRow;