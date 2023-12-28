import React from 'react';

function Playing(props) {
	return (
		<div className="Playing">
			<h2>Playing the Game Page</h2>
			<button onClick={() => props.handleClick('lost')}>Lost the Game</button>
			<button onClick={() => props.handleClick('won')}>Won the Game</button>
			<button onClick={() => props.handleClick('start')}>New Game</button>
		</div>
	);
}

export default Playing;