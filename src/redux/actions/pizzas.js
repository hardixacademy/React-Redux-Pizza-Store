import axios from 'axios';

export const setPizzas = (items) => ({
	type: 'SET_PIZAS',
	payload: items,
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchPizzas = () => (dispatch) => {
	dispatch(setLoaded(false));

	axios
		.get('http://localhost:3001/pizzas')
		.then(({ data }) => {
			dispatch(setPizzas(data));
		})
		.catch((e) => console.log(e));
};

// export const fetchPizzas = (dispatch) => {
// 	axios
// 		.get('http://localhost:3001/pizzas')
// 		.then(({ data }) => {
// 			dispatch(setPizzas(data));
// 		})
// 		.catch((e) => console.log(e));
// };
