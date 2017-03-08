"use strict";
import React from 'react';
import Main from '../../containers/Main';


/**
 * Фнкция сопоставляющая route и компонент
 * нужна для работы Navigator
 * @param route
 * @param navigator
 * @returns {XML}
 * @constructor
 */
const Router = (route, navigator) => {
	switch (route.id) {
		case 'main':
			return (<Main navigator={navigator}/>);
	}
};

export default Router;
