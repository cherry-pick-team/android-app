import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, Text, ListView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import SearchHistoryItem from '../SearchHistoryItem';
import Icon from '../Icon';

export class SearchHistory extends Component {
	static propTypes = {
		history: PropTypes.array.isRequired,
		deleteEntry: PropTypes.func.isRequired,
		addToFavourite: PropTypes.func.isRequired,
		search: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	}

	render() {
		const {history} = this.props;
		return (
			<View style={styles.container}>
				<SwipeListView
					dataSource={this.ds.cloneWithRows(history)}
					disableRightSwipe
					rightOpenValue={-100}
					tension={1}
					friction={2}
					renderRow={(entry, secId, rowId, rowMap) => (
						<TouchableHighlight
							underlayColor="gray"
							activeOpacity={.6}
							onPress={() => this.props.search(entry.query)}
						>
							<View>
								<SearchHistoryItem
									key={secId}
									query={entry.query}
									preview={entry.previewUrl}
									ts={entry.ts}
								/>
							</View>
						</TouchableHighlight>
					)}
					renderHiddenRow={(entry, secId, rowId, rowMap) => (
						<TouchableHighlight
							underlayColor="red"
							activeOpacity={.6}
							onPress={() => this.props.deleteEntry(entry.id)}
							style={styles.rightRow}
						>
							<View>
								<Icon type="close" size={35} color="white"/>
							</View>
						</TouchableHighlight>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rightRow: {
		position: 'absolute',
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F40011',
		flex: 1,
		width: 100,
		height: '100%',
		flexDirection: 'row'
	}
});

export default SearchHistory;
