import React, { Component } from 'react';
import planet from '../../img/browse/planet.PNG';
import street from '../../img/browse/street.PNG';
import summer from '../../img/browse/summer.PNG';
import avengers from '../../img/browse/avengers.PNG';

import Title from './Title';

const titleArray=[
{name:'Our Planet', img:planet, tags:['Limited Series','Science & Nature','All Things Wild']},
{name:'Street Food', img:street, tags:['Visionary','Food & Wine','Docuseries']},
{name:'Black Summer', img:summer, tags:['Horror','Post Apocolypse','Zombies']},
{name:'Avengers', img:avengers, tags:['Exciting','Super Hero','Sci Fi']},
{name:'Our Planet', img:planet, tags:['Limited Series','Science & Nature','All Things Wild']},
{name:'Street Food', img:street, tags:['Visionary','Food & Wine','Docuseries']},
{name:'Black Summer', img:summer, tags:['Horror','Post Apocolypse','Zombies']},
{name:'Avengers', img:avengers, tags:['Exciting','Super Hero','Sci Fi']},
{name:'Our Planet', img:planet, tags:['Limited Series','Science & Nature','All Things Wild']},
{name:'Street Food', img:street, tags:['Visionary','Food & Wine','Docuseries']},
{name:'Black Summer', img:summer, tags:['Horror','Post Apocolypse','Zombies']},
{name:'Avengers', img:avengers, tags:['Exciting','Super Hero','Sci Fi']},
]



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
			overflowX:'scroll',
			whiteSpace: 'nowrap',
		}

	return (
		<div style={styles}>
			{
				titleArray.map((title,index)=>{
					return <Title
										title={title}
										key={index}
										id={index}
										onSelect={()=>this.handleSelect(index)}
										selected={this.state.selectedIndex}
									/>
				})
			}
		</div>
		)
	}
	
}

export default TitleRow;