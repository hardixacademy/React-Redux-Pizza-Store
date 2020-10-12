import axios from 'axios';

export const setPizzas = (items) => ({
	type: 'SET_PIZAS',
	payload: items,
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false));

	let sort = sortBy;

	if (sortBy === 'popular') {
		sort = 'rating';
	} else if (sortBy === 'alphabet') {
		sort = 'name';
	}

	category !== null
		? axios
				.get(`/pizzas?category=${category}&_sort=${sort}&_order=desc`)
				.then(({ data }) => {
					dispatch(setPizzas(data));
				})
				.catch((e) => console.log(e))
		: axios
				.get(`/pizzas?_sort=${sort}&_order=desc`)
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
