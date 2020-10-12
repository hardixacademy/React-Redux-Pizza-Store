import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import { Categories, SortPopup, PizzaItem, PizzaItemPlaceholder } from '../components';

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const cartItems = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	// -------- для того чтобы небыло ререндера когда pizzas меняется (memo in component)
	const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const onSelectCategory = useCallback(
		(index) => {
			dispatch(setCategory(index));
		},
		[],
	);

	const onSelectSortBy = useCallback(
		(type) => {
			dispatch(setSortBy(type));
		},
		[],
	);

	const onAddPizzaToCart = useCallback(
		(pizzaCartObj) => {
			dispatch(addPizzaToCart(pizzaCartObj));
		},
		[],
	);

	const sortItems = [
		{ name: 'популярности', type: 'rating' },
		{ name: 'цене', type: 'price' },
		{ name: 'алфавиту', type: 'alphabet' },
	];
	// --------

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, sortBy]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories activeCategory={category} onClickCategory={onSelectCategory} categoryNames={categoryNames} />
				<SortPopup activeSortItem={sortBy} onClickSort={onSelectSortBy} sortItems={sortItems} />
			</div>

			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((obj) => <PizzaItem onClickAddPizza={onAddPizzaToCart} key={obj.id} addedCount={cartItems[obj.id] && cartItems[obj.id].length} {...obj} />)
					: Array(4)
							.fill('')
							.map((_, i) => <PizzaItemPlaceholder key={i} />)}
			</div>
		</div>
	);
}

export default Home;
