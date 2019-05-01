import React, { Component } from 'react';
import Navbar from './Navbar';

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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget tellus quis metus facilisis finibus et nec justo. Nam dictum magna eget magna ultricies rhoncus. Nunc porttitor at nisl eu ultricies. Donec porta ex efficitur turpis tempor consectetur. Nunc dapibus et justo ut feugiat. Ut vehicula ligula sed magna porttitor euismod. Proin porta nunc massa, a ultrices odio luctus eget. Sed eu magna in erat rutrum pretium. Vivamus at consequat libero, sit amet eleifend quam. Ut quis mi sed justo accumsan porttitor. Nunc efficitur a metus vitae auctor. Nullam congue, turpis sit amet eleifend elementum, lorem metus posuere odio, id aliquam tellus libero vel dolor. Donec in ultrices nunc, non pharetra tortor. Aenean vel lobortis magna, eget fringilla augue.
			}

Integer turpis est, sodales vitae massa vitae, viverra eleifend nibh. In facilisis hendrerit sapien, a maximus ipsum pulvinar in. Pellentesque sollicitudin ex massa, at auctor erat laoreet quis. Praesent non ante convallis leo euismod porta a eget odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tempus lacus nec commodo tempus. Nam non leo lacus. Donec molestie id odio non lobortis. Fusce consequat dapibus imperdiet. Fusce aliquam leo sed sapien lacinia, nec vehicula neque ultrices. Sed in vehicula elit. Morbi auctor id ligula sit amet pellentesque. Morbi eu nibh eget justo vulputate rutrum. Sed elementum semper gravida.

Ut eu nisl vulputate, cursus nulla quis, auctor sem. Aliquam massa enim, consequat non pellentesque ac, eleifend sed mauris. Proin fringilla, turpis iaculis tristique feugiat, turpis est porttitor nunc, dapibus laoreet ligula ligula at tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean commodo metus in tincidunt tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed a metus eget nulla facilisis sollicitudin. Praesent dolor tortor, lacinia volutpat sapien quis, convallis iaculis elit. Integer id eros libero. Ut euismod gravida nisl vel sollicitudin. Vestibulum ac euismod erat, vitae efficitur purus.

Nunc ornare lacinia tellus. Sed nec sem vel ipsum finibus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Pellentesque quis lacinia mi. Donec eros libero, semper et lobortis a, egestas imperdiet arcu. Nullam a velit et eros tempus ullamcorper at et diam. Suspendisse et placerat tellus. Sed vestibulum, arcu ut accumsan laoreet, lorem nunc ultricies lacus, eget vulputate est urna sit amet ligula. Etiam sodales blandit justo. Vestibulum turpis ante, laoreet accumsan felis id, imperdiet venenatis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget ante dignissim nibh volutpat dapibus sit amet in ligula. Donec pellentesque cursus commodo.

Donec vehicula lorem nulla, ac fringilla mi sagittis nec. Donec ornare ac mauris ac scelerisque. Nam vel dolor tristique, interdum est vitae, faucibus ex. Morbi et tincidunt metus, vel pretium arcu. Sed eget volutpat tellus. Pellentesque eget ornare ipsum. Donec tincidunt dolor ac mollis bibendum. Cras interdum, est at viverra suscipit, lacus urna tristique arcu, quis fringilla ante sapien at urna. Integer feugiat tortor tristique dapibus egestas. Vestibulum porttitor eleifend elit eu auctor. Etiam tempus, dolor eu cursus pharetra, turpis nulla congue orci, quis auctor sapien neque eget diam.

Aenean euismod velit in ante elementum, a laoreet nibh euismod. Donec sagittis lacus vel suscipit ultricies. Pellentesque eget lacus enim. Aenean lacinia lectus in nibh venenatis, nec ullamcorper erat rutrum. Sed et fringilla urna, vel efficitur ipsum. Integer iaculis tortor ac risus rhoncus, vehicula interdum sapien vulputate. Phasellus sodales a magna nec blandit. Aliquam erat volutpat. Curabitur commodo consequat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at enim augue. Duis euismod vulputate tincidunt.

Nunc malesuada viverra lectus, quis blandit sapien efficitur in. Nunc sed nisl non felis consequat ullamcorper. Nulla vel lacinia elit. Praesent id dui sagittis, porttitor purus eu, convallis eros. Nulla facilisi. Ut eu ante nisl. Duis sit amet felis vel urna tincidunt dictum ut at mauris. Donec suscipit neque quis nibh blandit laoreet. Ut nec porttitor purus. Sed gravida vulputate varius.

Integer vitae ultricies arcu, efficitur aliquet ipsum. Maecenas commodo id nulla blandit tristique. Proin sit amet felis at nisl auctor scelerisque. Aliquam imperdiet leo sed dictum laoreet. Ut vel sagittis lacus. Ut pellentesque tortor sit amet facilisis dapibus. Proin ultrices quam massa, a aliquet arcu bibendum non. Cras at congue quam, id dignissim odio.

Etiam vel viverra leo. Fusce molestie purus ac magna dignissim pretium. Mauris turpis justo, sollicitudin egestas luctus a, pharetra nec tellus. Phasellus condimentum arcu tortor, ac sodales felis facilisis non. Vestibulum elementum viverra massa, sit amet placerat urna efficitur in. Aliquam a tristique mauris. Quisque quis dolor orci. Aliquam non malesuada sapien. Cras purus dui, venenatis a porttitor placerat, convallis non arcu.

Cras id ex interdum, tincidunt nunc sed, rutrum elit. Pellentesque non congue sapien, vel rutrum risus. Cras et sagittis leo. Pellentesque mi eros, pharetra sed nunc tincidunt, sodales porta sapien. Mauris viverra arcu non urna cursus facilisis. Fusce posuere, nunc pulvinar iaculis accumsan, tortor tellus maximus lectus, nec congue dolor risus a dolor. Maecenas porta id turpis ac dictum. Sed lacinia tellus nec aliquam interdum. Sed vestibulum, lorem a placerat congue, urna erat volutpat odio, quis blandit nibh odio a odio.
			</div>
		)
	}

}

export default Browse;