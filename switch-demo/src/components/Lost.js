// rsf

import React from 'react';

function Lost(props) {
	return (
		<div className="Lost">
			<h2>You Lost the Game</h2>
			<button onClick={() => props.handleClick('start')}>New Game</button>
		</div>
	);
}

export default Lost;