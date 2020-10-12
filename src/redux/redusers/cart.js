const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
};

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': {
			const newItems = {
				...state.items,
				[action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload],
			};

			//const allPizzasInCart = [].concat.apply([], Object.values(newItems));
			//------------- или
			const allPizzasInCart = Object.values(newItems).flat();

			return {
				...state,
				items: newItems,
				totalPrice: allPizzasInCart.reduce((sum, obj) => obj.price + sum, 0),
				totalCount: allPizzasInCart.length,
			};
		}
		default:
			return state;
	}
};
export default cart;
