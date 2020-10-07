import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

import { Categories, SortPopup, PizzaItem, PizzaItemPlaceholder } from '../components';

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPizzas());
	}, []);

	const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	// -------- для того чтобы небыло ререндера когда pizzas меняется (memo in component)
	const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	const onSelectCategory = useCallback(
		(index) => {
			dispatch(setCategory(index));
		},
		[category, sortBy],
	);

	const sortItems = [
		{ name: 'популярности', type: 'popular' },
		{ name: 'цене', type: 'price' },
		{ name: 'алфавиту', type: 'alphabet' },
	];
	// --------
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onClickItem={onSelectCategory} categoryNames={categoryNames} />
				<SortPopup sortItems={sortItems} />
			</div>

			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((obj) => <PizzaItem key={obj.id} {...obj} />)
					: Array(11)
							.fill('')
							.map((_, i) => <PizzaItemPlaceholder key={i} />)}
			</div>
		</div>
	);
}

export default Home;
