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
]



function randomTitles(){
	const random=[];
	for(let i=0;i<40;i++){
		const randTitle=titleArray[Math.floor(Math.random()*4)];
		random.push(randTitle);
	}
	console.log(random);
	return random;
};


function TitleRow(props){

	const randomArray=randomTitles();
	const styles={
		width:'100vw',
		display:'grid',
		gridTemplateColumns:'repeat(4,1fr)',
		gridGap:'10px',
		overflowX:'scroll'
	}
	return (
		<div style={styles}>
			{
				randomArray.map((title,index)=>{
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