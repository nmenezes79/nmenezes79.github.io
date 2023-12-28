import React from 'react';

function Start(props) {
	return (
		<div className="Start">
			<h2>This is the Start Page</h2>
			<button onClick={() => props.handleClick('playing')}>Start Game</button>
		</div>
	);
}

export default Start;