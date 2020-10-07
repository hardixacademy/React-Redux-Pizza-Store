import React, { memo } from 'react';
import PropTypes from 'prop-types';

// -------- для того чтобы небыло ререндера когда pizzas меняется
const Categories = memo(function Categories({ activeCategory, categoryNames, onClickCategory }) {
	return (
		<div className='categories'>
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
					Все
				</li>

				{categoryNames.map((item, index) => (
					<li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${item}_${index}`}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
});

Categories.propTypes = {
	activeCategory: PropTypes.number,
	categoryNames: PropTypes.arrayOf(PropTypes.string),
	onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
	activeCategory: null,
	categoryNames: [],
};

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
