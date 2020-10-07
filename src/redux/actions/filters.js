export const setCategory = (indexCategory) => ({
	type: 'SET_CATEGORY',
	payload: indexCategory,
});

//---------------- Action creator
export const setSortBy = (nameOfFilter) => ({
	type: 'SET_SORT_BY',
	payload: nameOfFilter,
});
// //------------- Action
// const setSortBy = ({
// 	type: 'SET_SORT_BY',
// 	payload: nameOfFilter, // можно без него
// });
