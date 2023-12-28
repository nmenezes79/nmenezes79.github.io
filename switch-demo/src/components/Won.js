import React from 'react';

function Won(props) {
	return (
		<div className="Won">
			<h2>You Won the Game</h2>
			<button onClick={() => props.handleClick('start')}>New Game</button>
		</div>
	);
}

export default Won;