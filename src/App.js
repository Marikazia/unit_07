
import './App.css';
// import './Cart';
// import './Good';
import goodsArr from './goods.json'
import React from 'react';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Goods from './Good'
import Cart from './Cart';

class App extends React.Component {

	constructor (props) {
		super();
		console.log(props);
		this.state = {
			cart: {}
		}
		this.state = {
			count : 0
		}
		console.log(this.state.cart);
		console.log(this.state.count);
	};

	render() {
		let showCart;
		if (this.state.count !== 0) {
			showCart =  <Cart cart={this.state.cart} goods={goodsArr}/>;
		}
		else {
			showCart = 'Empty';
		}
		return (
			<>
				{console.log(this.state.cart)}
				<div className="container">
					<h1>Cart</h1>
					<div className="goods-field" onClick={this.addToCart}>
						{goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul}/>)}
					</div>
					{showCart}
				</div>
			</>
		)
	}

	addToCart = (event) => {
		event.preventDefault(); 
		if (!event.target.classList.contains('add-to-cart')) return false;
		let cartTemp = this.state.cart;
		cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
		// cartTemp++;
		this.setState({cart : cartTemp});
		let count = this.state.count; 
		count++;
		this.setState({'count' :  count})
	}

}

export default App;
