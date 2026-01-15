const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement('div')
			box.classList.add('box')
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
			boxesContainer.appendChild(box)
		}
	}
}

createBoxes()

/*
The outer loop (for (let i = 0; i < 4; i++)) iterates over the rows of the grid.
The inner loop (for (let j = 0; j < 4; j++)) iterates over the columns of the grid.

It sets the backgroundPosition property of each box using the style attribute. The backgroundPosition is set based on the current row (i) and column (j) in the grid, and it uses the formula ${-j * 125}px ${-i * 125}px. This formula calculates the position of the background image for each box in the grid.
*/