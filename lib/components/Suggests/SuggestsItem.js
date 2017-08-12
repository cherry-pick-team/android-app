import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Animated, TouchableWithoutFeedback, Image} from 'react-native';
import {textColor} from '../../shared/vars';
import Icon from '../Icon';

const ITEM_HEIGHT_EXPAND = 50;
const ITEM_HEIGHT_SMALL = 120;

/**
 * Элемент списка, содержит строчку запроса
 * и количество найденных песен
 * @constructor
 */
export default class SuggestsItem extends Component {
	static propTypes = {
		/** Содержит поле query и songs - количество песен по этому запросу */
		result: PropTypes.object.isRequired,
		/** Обработчик нажатия на неподвижный элемент блока */
		onPress: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this._dropDownAnimation = new Animated.Value(ITEM_HEIGHT_SMALL);
		this._listAnimation = new Animated.Value(0);

		this.state = {
			isOpen: false
		}
	}

	async showList() {
		return new Promise((resolve) => {
			Animated.timing(this._listAnimation, {
				toValue: 1,
				duration: 300
			}).start(resolve);
		});
	}

	async hideList() {
		return new Promise((resolve) => {
			Animated.timing(this._listAnimation, {
				toValue: 0,
				duration: 300
			}).start(resolve);
		});
	}

	async openDropdown() {
		return new Promise((resolve) => {
			Animated.timing(this._dropDownAnimation, {
				toValue: ITEM_HEIGHT_EXPAND * this.props.result.full_info.length + ITEM_HEIGHT_SMALL,
				duration: 500
			}).start(() => {
				this.setState({isOpen: true});
				resolve();
			});
		});
	}

	async closeDropdown() {
		return new Promise((resolve) => {
			Animated.timing(this._dropDownAnimation, {
				toValue: ITEM_HEIGHT_SMALL,
				duration: 500
			}).start(() => {
				this.setState({isOpen: false});
				resolve();
			});
		});
	}

	async onControlPress() {
		if (this.state.isOpen) {
			await this.hideList();
			await this.closeDropdown();
		} else {
			await this.openDropdown();
			await this.showList();
		}
	}

	_getPluralMatchesText() {
		const matches = this.props.result.songs;

		switch (matches) {
			case 0:
				return 'Нет совпадений';
			case 1:
				return '1 совпадение';
		}

		if (matches > 1 && matches < 5) {
			return this.props.result.songs + ' совпадения';
		}

		return this.props.result.songs + ' совпадений';
	}

	render() {
		const spin = this._dropDownAnimation.interpolate({
			inputRange: [ITEM_HEIGHT_SMALL, ITEM_HEIGHT_EXPAND * this.props.result.full_info.length + ITEM_HEIGHT_SMALL],
			outputRange: ['0deg', '180deg']
		});

		return (
			<Animated.View style={[styles.container, {height: this._dropDownAnimation}]}>
				<View style={styles.dropdown}>
					<Animated.View style={[styles.songList, {opacity: this._listAnimation}]}>
						{this.state.isOpen && this.props.result.full_info.map((song) => (
							<View style={styles.song} key={song.title}>
								<View style={styles.cover}>
									<Image style={styles.coverImage} source={{uri: song.album.cover_url}}/>
								</View>
								<View style={styles.songDescription}>
									<Text style={styles.text}>
										{song.author}
									</Text>
									<Text style={styles.text}>
										{song.title}
									</Text>
								</View>
							</View>
						))}
					</Animated.View>
					<View style={styles.control}>
						<Animated.View style={[{transform: [{rotate: spin}]}]}>
							<TouchableWithoutFeedback onPress={this.onControlPress.bind(this)}>
								<View style={styles.dropdownIcon}>
									<Icon type="arrow-drop-down" size={40} color="black"/>
								</View>
							</TouchableWithoutFeedback>
						</Animated.View>
						<Text style={styles.text}>
							Показать результаты
						</Text>
					</View>
				</View>
				<View style={styles.result}>
					<TouchableWithoutFeedback onPress={this.props.onPress}>
						<View>
							<Text style={styles.queryText}>
								{this.props.result.query}
							</Text>
							<Text style={styles.songsText}>
								{this._getPluralMatchesText()}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</Animated.View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		borderColor: '#AAA',
		position: 'relative',
	},
	dropdown: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		flexDirection: 'column',
		alignItems: 'flex-start',
		zIndex: 0,
	},
	queryText: {
		fontWeight: '400',
		fontSize: 24,
		color: textColor,
	},
	songsText: {
		fontWeight: '300',
		fontSize: 18,
		color: textColor,
	},
	result: {
		backgroundColor: 'white',
		width: '100%',
		position: 'absolute',
		top: 0,
		paddingLeft: 10,
		height: 80,
		zIndex: 1,
		paddingTop: 10,
		paddingBottom: 10,
	},
	song: {
		zIndex: 0,
		flexDirection: 'row',
		paddingLeft: 20,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	songList: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '70%',
		zIndex: 0,
	},
	control: {
		width: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	dropdownIcon: {
		backgroundColor: 'rgba(0,0,0,0)',
	},
	songText: {
		zIndex: 0,
	},
	cover: {
		padding: 5,
		marginLeft: 5,
		width: 55,
		height: 50,
	},
	coverImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	songDescription: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 20,
	},
	text: {
		fontWeight: '300',
		fontSize: 16,
		color: textColor,
	}
});
