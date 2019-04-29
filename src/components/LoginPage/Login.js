import React from 'react';
import heroBkg from '../../img/hero-background.jpg';
import logo from '../../img/netflix-logo.png';

function Login(){
	const heroBanner={
		backgroundImage:`url(${heroBkg})`,
		height:'550px',
		textAlign:'center'
	}
	const nav={
		display: 'flex',
		justifyContent:'space-between',
		padding:'10px 20px'
	}
	const callToAction={
		width:'60vw',
		margin:'0 auto'
	}
	return (
		<div>
			<div style={heroBanner}>
				<div style={nav}>
					<img className='logo' src={logo}/>
					<a className='button' LinkTo='/browse'>Sign In</a>
				</div>
				<div style={callToAction}>
					<h1>Unlimited movies, TV, shows, and more.</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<a className='button'>WATCH FREE FOR 30 DAYS</a>
				</div>
			</div>
		</div>
		)
}

export default Login;