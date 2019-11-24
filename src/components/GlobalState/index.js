import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import SwapContext from './globalContext';
import GlobalReducer from './globalReducer';
import { userAuth, toggleMode } from './actions';

const GlobalState = props => {
	const initialState = {
		userEmail: '',
		isDayMode: false,
	};
	const [state, dispatch] = useReducer(GlobalReducer, initialState);
	if(state.isDayMode){
		document.body.classList.remove("night");
		document.body.classList.add("day");
	}else{
		document.body.classList.remove("day");
		document.body.classList.add("night");
	}

	const onUserAuth = value => dispatch(userAuth(value));
	const onToggleMode = value => dispatch(toggleMode(value));

	return (
		<SwapContext.Provider
			value={{
				userEmail: state.userEmail,
				isDayMode: state.isDayMode,

				// actions
				onUserAuth,
				onToggleMode,
			}}
		>
			{props.children}
		</SwapContext.Provider>
	);
};

GlobalState.propTypes = {
	children: PropTypes.any,
};

export default GlobalState;
