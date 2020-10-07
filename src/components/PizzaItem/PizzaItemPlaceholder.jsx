import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaItemPlaceholder() {
	return (
		<ContentLoader speed={3} width={280} height={460} viewBox='0 0 280 460' backgroundColor='#f2f2f2' foregroundColor='#e0e0e0'>
			<circle cx='140' cy='140' r='120' />
			<rect x='0' y='275' rx='6' ry='5' width='280' height='25' />
			<rect x='0' y='315' rx='6' ry='10' width='280' height='85' />
			<rect x='0' y='425' rx='6' ry='5' width='90' height='27' />
			<rect x='110' y='415' rx='20' ry='20' width='170' height='45' />
		</ContentLoader>
	);
}

export default PizzaItemPlaceholder;
