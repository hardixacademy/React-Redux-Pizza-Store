import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
			</div>
		</div>
	);
}

export default App;

// //---------- Class Component
// class App extends Component {
// 	componentDidMount() {
// 		axios
// 			.get('http://localhost:3000/db.json')
// 			// -------- setPizzasDispatcher(data.pizzas)
// 			.then(({ data }) => this.props.setPizzas(data.pizzas))
// 			// --------
// 			.catch((e) => console.log(e));
// 	}

// 	render() {
// 		return (
// 			<div className='wrapper'>
// 				<Header />
// 				<div className='content'>
// 					<Route exact path='/' render={() => <Home pizzas={this.props.items} />} />
// 					<Route exact path='/cart' component={Cart} />
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.pizzas.items,
// 	};
// };

// // -----------
// // const mapDispatchToProps = (dispatch) => {
// // 	return {
// // 		setPizzasDispatcher: (items) => dispatch(setPizzas(items)),
// // 	};
// // };
// // ----------- или
// const mapDispatchToProps = {
// 	setPizzas,
// };
// // -----------

//export default connect(mapStateToProps, mapDispatchToProps)(App);
// or ===
// export default connect(
// 	(state) => {
// 		return {
// 			items: state.pizzas.items,
// 			filters: state.filters,
// 		};
// 	},
// 	(dispatch) => {
// 		return {
// 			setPizzas: (items) => dispatch(setPizzas(items)),
// 		};
// 	},
// )(App);
