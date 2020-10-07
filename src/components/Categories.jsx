import React, { useState, memo } from 'react';

// -------- для того чтобы небыло ререндера когда pizzas меняется
const Categories = memo(function Categories({ activeCategory, categoryNames, onClickItem }) {
	const onSelectItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className='categories'>
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
					Все
				</li>

				{categoryNames &&
					categoryNames.map((item, index) => (
						<li className={activeCategory === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}_${index}`}>
							{item}
						</li>
					))}
			</ul>
		</div>
	);
});

export default Categories;

//-------------'классовый компонент'
// class Categories extends React.Component{
//     state = {
//         activeItem: 3,
//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }

//     render() {
//         const {items, onClickItem} = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((item, index) => (
//                         <li
//                         className={this.state.activeItem === index ? 'active' : ''}
//                         onClick={() => this.onSelectItem(index)}
//                         key={`${item}_${index}`}>
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             )
//     }
// }
