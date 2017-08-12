import React, {PropTypes} from 'react';
import {ScrollView} from 'react-native';
import BaseDrawerLayout from '../../layouts/BaseDrawerLayout';
import SuggestsItem from './SuggestsItem';

/**
 * Экран выбора результата поиска
 * в случае если API тветил несколькими
 * результами, например для поиска голосом
 * @constructor
 */
export const Suggests = ({results, search}) => (
	<BaseDrawerLayout>
		<ScrollView
			contentContainerStyle={{paddingBottom: 78}}
			showsVerticalScrollIndicator={false}
		>
			{results.map((result, index) => (
				<SuggestsItem result={result} onPress={search.bind(null, result.query)} key={result.query}/>
			))}
		</ScrollView>
	</BaseDrawerLayout>
);

Suggests.propTypes = {
	results: PropTypes.array.isRequired,
	search: PropTypes.func.isRequired
};

export default Suggests;
