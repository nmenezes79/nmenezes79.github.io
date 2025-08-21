// Cart functionality using localStorage
document.addEventListener("DOMContentLoaded", () => {
	const addCartButtons = document.querySelectorAll(".add-cart");

	addCartButtons.forEach((button) => {
		button.addEventListener("click", addToCart);
	});

	function addToCart(e) {
		e.preventDefault();

		const card = e.target.closest(".card");
		const productName = card.querySelector(".card-title").innerText;
		const productPrice = parseFloat(card.querySelector("input[type='hidden']").value);
		const productImage = card.querySelector("img").src;

		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		const existingProduct = cart.find(item => item.name === productName);

		if (existingProduct) {
			existingProduct.quantity += 1;
		} else {
			cart.push({
				name: productName,
				price: productPrice,
				image: productImage,
				quantity: 1
			});
		}

		localStorage.setItem("cart", JSON.stringify(cart));
		alert(`${productName} added to cart!`);
	}
});
