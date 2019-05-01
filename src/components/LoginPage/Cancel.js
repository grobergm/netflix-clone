import React from 'react';
import cancelImg from '../../img/login/cancel.png';

function Cancel(){
	const cta={
		padding:'20px',
		display:'block',
		width:'40vw',
		margin:'0 auto',
		cursor:'pointer'
	}
	return (
		<div>
			<h2>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</h2>
			<a style={cta} className="button caps">watch free for 30 days</a>
			<img style={{width:'50vw'}} src={cancelImg} />
		</div>
		)
};

export default Cancel;