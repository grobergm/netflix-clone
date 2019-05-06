import React from 'react';
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



function TitleRow(props){

	const styles={
		overflow:'auto',
		whiteSpace: 'nowrap',
	}

	return (
		<div style={styles}>
			{
				titleArray.map((title,index)=>{
					return <Title
										name={title.name} 
										img={title.img} 
										tags={title.tags}
										key={index}
									/>
				})
			}
		</div>
		)
}

export default TitleRow;