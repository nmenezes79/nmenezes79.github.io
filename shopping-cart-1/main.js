// Selects all elements with the class add-cart, assumed to be buttons.
let carts = document.querySelectorAll('.add-cart');

// An array of shirt objects.
// Each shirt has a name, tag (used as an ID), price, and inCart (used to track how many are added).
let products = [
	{
		name: 'Shirt 1',
		tag: 'shirt1',
		price: 10,
		inCart: 0
	},

	{
		name: 'Shirt 2',
		tag: 'shirt2',
		price: 20,
		inCart: 0
	},

	{
		name: 'Shirt 3',
		tag: 'shirt3',
		price: 40,
		inCart: 0
	},

	{
		name: 'Shirt 4',
		tag: 'shirt4',
		price: 50,
		inCart: 0
	},

	{
		name: 'Shirt 5',
		tag: 'shirt5',
		price: 60,
		inCart: 0
	},

	{
		name: 'Shirt 6',
		tag: 'shirt6',
		price: 80,
		inCart: 0
	},
];

// Add Event Listener to "Add to Cart" Buttons
// Adds the product to the cart using cartNumbers().
// Updates the total cost using totalCost().
for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	});
}

// Display Cart Count on Page Load
// Retrieves the number of items in cart from localStorage and updates the UI (.cart span).
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

// Manage Cart Numbers
// Updates the cart count (add/remove).
// Calls setItems(product) to update cart items in storage.
function cartNumbers(product, action) {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (action) {
		localStorage.setItem("cartNumbers", productNumbers - 1);
		document.querySelector('.cart span').textContent = productNumbers - 1;
		console.log("action running");
	} else if (productNumbers) {
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector('.cart span').textContent = 1;
	}
	setItems(product);
}

// Store Cart Items in localStorage
// Adds product to the cart in localStorage.
// If the product is already there, it increases its inCart value.
// Uses the tag property as a unique key.
function setItems(product) {
	// let productNumbers = localStorage.getItem('cartNumbers');
	// productNumbers = parseInt(productNumbers);
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		let currentProduct = product.tag;

		if (cartItems[currentProduct] == undefined) {
			cartItems = {
				...cartItems,
				[currentProduct]: product
			}
		}
		cartItems[currentProduct].inCart += 1;

	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
		};
	}

	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

// Calculate Total Cost
// Maintains and updates the total cart value in localStorage.
function totalCost(product, action) {
	let cart = localStorage.getItem("totalCost");

	if (action) {
		cart = parseInt(cart);

		localStorage.setItem("totalCost", cart - product.price);
	} else if (cart != null) {

		cart = parseInt(cart);
		localStorage.setItem("totalCost", cart + product.price);

	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

// Render Cart Page
// Retrieves cart items and cost from localStorage.
// Displays each item with:
// Name, image, price, quantity controls, and item total.
// Calls: deleteButtons() — to enable removing products.
// Calls: manageQuantity() — to enable quantity increase/decrease.
function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	let cart = localStorage.getItem("totalCost");
	cart = parseInt(cart);

	let productContainer = document.querySelector('.products');

	if (cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map((item, index) => {
			productContainer.innerHTML +=
				`<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.tag}.jpeg" />
                <span class="sm-hide">${item.name}</span>
				</div>
				<div class="price sm-hide">$${item.price},00</div>
				<div class="quantity">
					<ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
						<span>${item.inCart}</span>
					<ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
				</div>
				<div class="total">$${item.inCart * item.price},00</div>`;
		});

		productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart},00</h4>
            </div>`

		deleteButtons();
		manageQuantity();
	}
}

// Increase/Decrease Product Quantity
// Listens for clicks on .increase and .decrease buttons.
// Updates inCart quantity.
// Updates cart count and total price accordingly.
function manageQuantity() {
	let decreaseButtons = document.querySelectorAll('.decrease');
	let increaseButtons = document.querySelectorAll('.increase');
	let currentQuantity = 0;
	let currentProduct = '';
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	for (let i = 0; i < increaseButtons.length; i++) {
		decreaseButtons[i].addEventListener('click', () => {
			console.log(cartItems);
			currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
			console.log(currentQuantity);
			currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
			console.log(currentProduct);

			if (cartItems[currentProduct].inCart > 1) {
				cartItems[currentProduct].inCart -= 1;
				cartNumbers(cartItems[currentProduct], "decrease");
				totalCost(cartItems[currentProduct], "decrease");
				localStorage.setItem('productsInCart', JSON.stringify(cartItems));
				displayCart();
			}
		});

		increaseButtons[i].addEventListener('click', () => {
			console.log(cartItems);
			currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
			console.log(currentQuantity);
			currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
			console.log(currentProduct);

			cartItems[currentProduct].inCart += 1;
			cartNumbers(cartItems[currentProduct]);
			totalCost(cartItems[currentProduct]);
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));
			displayCart();
		});
	}
}

// Remove Items from Cart
// Adds event listeners to delete icons.
// On click: Removes product from localStorage.
// On click: Updates total count and cost.
// On click: Refreshes cart display.
function deleteButtons() {
	let deleteButtons = document.querySelectorAll('.product ion-icon');
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartCost = localStorage.getItem("totalCost");
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let productName;
	console.log(cartItems);

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', () => {
			productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

			localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
			localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

			delete cartItems[productName];
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));

			displayCart();
			onLoadCartNumbers();
		})
	}
}

// Initialize Functions
// Ensures the cart count and cart contents display correctly when the page loads.
onLoadCartNumbers();
displayCart();