

var title ="";
var cart ="";
var items ="";
var total ="";
var table = document.getElementById('products');
var pTable = document.getElementById("sportsdirect");
var n = "<br></br>";



const chkout = document.getElementById("checkout");
let count = localStorage.getItem("cartCount");

if (count == 0){
	chkout.addEventListener("click", checkOut, { once: true });
} else{
	chkout.addEventListener("click", multipleckOut, { once: true });
}
const continueshopping = document.getElementById("addToCart");
continueshopping.addEventListener("click", continueShopping);


try {
 window.addEventListener('load', async (evt) => {
	 const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	 if (tab.url?.startsWith("chrome://")) return undefined;
	await chrome.scripting.executeScript(
	{
	target:{tabId: tab.id},
	files: ['contentScript.js'],
	});
});
} catch (e) {
  console.error(e);
}

getCartContents();

const uid = generateRandomHex();


function getCartContents() {

	

	chrome.runtime.onMessage.addListener(function (message) {

		if (message.productDescription) {

			document.getElementById('description').textContent = message.productDescription;
		}

		if (message.productColour) {

			document.getElementById('colour').textContent = message.productColour;
		}

		if (message.productSize) {

			document.getElementById('size').textContent = message.productSize;
		}

		if (message.productQuty) {

			document.getElementById('Quantity').textContent = message.productQuty;
		}

		if (message.productPrice) {

			document.getElementById('price').textContent = message.productPrice;
		}
	
		if (message.items) {

			document.getElementById('quantity').textContent = message.items;
			chrome.storage.local.set({ 'quantity': message.items }, function () {
				console.log(message.items);
			});
		}
		if (message.title) {

			document.getElementById('pagetitle').textContent = message.title;
			chrome.storage.local.set({ 'merchant': message.title }, function () {
				console.log(message.title);
			});

		}
		if (message.subtotal) {
			document.getElementById('subtotal').textContent = message.subtotal;
			chrome.storage.local.set({ 'total': message.subtotal }, function () {
				console.log(message.subtotal);
			});
		}

		if (message.personalisation) {

			var personal = message.personalisation;
			var rowCount = 1;
			var row = pTable.insertRow(rowCount);
			var pcell = row.insertCell(0);
			pcell.id = "personalisation-du-produit";
			pcell.innerHTML = personal;
			chrome.storage.local.set({ 'personalisation': personal }, function () {
				console.log('Personalisation: ' + personal);
			});

		}

		if (message.product) {

			var produit = message.product;
			var rowCount = 1;
			var row = table.insertRow(rowCount);
			var cell1 = row.insertCell(0);
			cell1.id = "description-du-produit";
			cell1.innerHTML = produit;
			chrome.storage.local.set({ 'description': produit }, function () {
				console.log( produit);
			});

		}
		if (message.color) {
			var couleur = message.color
			var secondRow = table.rows[1];
			var cell2 = secondRow.insertCell(1);
			cell2.id = "couleur-du-produit";
			cell2.innerHTML = couleur;
			chrome.storage.local.set({ 'colour': couleur }, function () {
				console.log(couleur);
			});

		}
	
	if (message.size){
		var taille = message.size
		var fifthRow = table.rows[1];
		var cell3 = fifthRow.insertCell(2);
		cell3.id = "taille-du-produit";
		cell3.innerHTML = taille;
		chrome.storage.local.set({ 'size': taille }, function () {
			console.log(taille);
		});
	}
	if (message.quantity){
		var quantitay = message.quantity
		var thirdRow = table.rows[1];
		var cell4 = thirdRow.insertCell(3);
		cell4.id = "quantité-du-produit";
		cell4.innerHTML = quantitay;
		chrome.storage.local.set({ 'nombre': quantitay }, function () {
			console.log(quantitay);
		});
	}
	
	if (message.price){
		
		var prix = message.price
		var fourthRow = table.rows[1];
		var cell5 = fourthRow.insertCell(4);
		cell5.id = "prix-du-produit";
		cell5.innerHTML = prix;
		chrome.storage.local.set({ 'price': prix }, function () {
			console.log('Value is set to ' + prix);
		});	 
    }
	});
}


    function multipleckOut() {

	$url = "https://beta-muhestores.muhemax.com/submit";
	var domain = document.getElementById("pagetitle").innerText;
	var perso = document.getElementById('personalisation-du-produit');

	if (domain === "beta-muhestores.muhemax.com") {

		localStorage.setItem("cartCount", 0)
		chrome.action.setBadgeText({ 'text': '' });

		setTimeout(openTab, 2000);


	} else if (domain === "sportsdirect.com" && perso.textcontent !=="") {
		chrome.tabs.update({ url: "https://www.sportsdirect.com/cart" });
		window.close();

	} else {		   
	       localStorage.setItem("cartCount", 0)
		   chrome.action.setBadgeText({ 'text': '' });
		   addJSON($url);

		  // setTimeout(openTab, 2000);
           }
}
  
  
    function checkOut() {

	$url = "https://beta-muhestores.muhemax.com/submit";
	var domain = document.getElementById("pagetitle").innerText;
	var perso = document.getElementById('personalisation-du-produit');
	console.log(perso)

	if (domain === "beta-muhestores.muhemax.com") {
		window.close();	

	} else if (domain === "Page title") {
		window.close();

	} else if (domain === "sportsdirect.com" && perso.textContent !== " ") {
		chrome.tabs.update({ url: "https://www.sportsdirect.com/cart" });
		window.close();

	}else if (domain === "sportsdirect/personalisation" && perso !==null) {
		sendJSON($url);
		//setTimeout(openTab, 2000);
		
	}else {
		  sendJSON($url);
		 // setTimeout(openTab, 2000);
	      }
}

function openTab() {
	chrome.tabs.create({ active: true, url: "https://beta-muhestores.muhemax.com/checkout?uid="+uid });
}


function continueShopping() {

    $url = "https://beta-muhestores.muhemax.com/submit";	

	let count = localStorage.getItem("cartCount");
	var domain = document.getElementById("pagetitle").innerText;
	var perso = document.getElementById('personalisation-du-produit');

	if (domain === "beta-muhestores.muhemax.com") {
		window.close();

	} else if (domain === "Page title") {
		window.close();

	} else if (domain === "sportsdirect.com" && perso.textContent !== " ") {
		chrome.tabs.update({ url: "https://www.sportsdirect.com/cart" });
		window.close();
	}else{

		      if (count == 0) {
			    saveJSON();
			    count++;
			    localStorage.setItem("cartCount", count);
				  chrome.action.setBadgeBackgroundColor({ color: "green" });
			    chrome.action.setBadgeText({ text: count.toString() })
			    chrome.tabs.update({ url: "https://beta-muhestores.muhemax.com#shopping" });
			    window.close();

		      } else {
			      addJSON();
			     count++;
			     localStorage.setItem("cartCount", count);
				  chrome.action.setBadgeBackgroundColor({ color: "green" });
			     chrome.action.setBadgeText({ text: count.toString() })
			     chrome.tabs.update({ url: "https://beta-muhestores.muhemax.com#shopping" });
			     window.close();
		      }
		 
	       }
}



function sendJSON($url) {

	chrome.storage.local.get(['merchant', 'quantity', 'description', 'colour', 'size', 'nombre', 'price', 'personalisation', 'total'], async function (data) {
 
		let merchant = data.merchant;
		let items = data.quantity;
		let desc = data.description;
		let color = data.colour;
		let size = data.size;
		let quantity = data.nombre;
		let price = data.price;
		let total = data.total;
		let perso = data.personalisation;

		try {

		const response = await fetch($url, {

			method: "POST",
			body: JSON.stringify({

				extension_generated_uid: uid,
				checkout_cart: [{
					Merchant: merchant,
					Items: items,
					Description: desc,
					Colour: color,
					Size: size,
					Quantity: quantity,
					Price: price,
					Personalisation: perso,
					Total: total
				}]
			}),

			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
			const cart = await response.json();
			console.log(cart);
			console.log(response.status);

			if (response.status == 400) {
				alert('Please login to Muhestores before placing an order')
				chrome.tabs.create({ active: true, url: "https://beta-muhestores.muhemax.com/ " });
			} else {

				chrome.tabs.create({ active: true, url: "https://beta-muhestores.muhemax.com/checkout?uid=" + uid });
			}

		    return cart;

	    } catch (error) {
		  console.log(error);
		  throw error;
	    }

	});

}

function saveJSON() {

	chrome.storage.local.get(['merchant', 'quantity', 'description', 'colour', 'size', 'nombre', 'price', 'personalisation', 'total'], function (data) {

		let merchant = data.merchant;
		let items = data.quantity;
		let desc = data.description;
		let color = data.colour;
		let size = data.size;
		let quantity = data.nombre;
		let price = data.price;
		let total = data.total;
		let perso = data.personalisation;

		var data = JSON.stringify({
			checkout_cart: [{
				Merchant: merchant,
				Items: items,
				Description: desc,
				Colour: color,
				Size: size,
				Quantity: quantity,
				Price: price,
				Personalisation: perso,
				Total: total
			}]
		});

		chrome.storage.local.set({ 'basket': data }, function () {
			console.log('Basket: ' + data);
		});
	});
}

function addJSON() {

	chrome.storage.local.get(['basket'], function (cart) {

		console.log(cart);

		let savedBasket = cart.basket;
		console.log(savedBasket);


		chrome.storage.local.get(['merchant', 'quantity', 'description', 'colour', 'size', 'nombre', 'price', 'personalisation', 'total'], function (data) {

			let merchant = data.merchant;
			let items = data.quantity;
			let desc = data.description;
			let color = data.colour;
			let size = data.size;
			let quantity = data.nombre;
			let price = data.price;
			let total = data.total;
			let perso = data.personalisation;


			var addedBasket = JSON.stringify({
				Merchant: merchant,
				Items: items,
				Description: desc,
				Colour: color,
				Size: size,
				Quantity: quantity,
				Price: price,
				Personalisation: perso,
				Total: total
			});

			console.log(addedBasket);

			var newBasket = JSON.parse(savedBasket);
			var parsedAddedBasket = JSON.parse(addedBasket);

			console.log(parsedAddedBasket);

			newBasket['checkout_cart'].push(parsedAddedBasket);

			console.log(newBasket);

			var basketStr = JSON.stringify(newBasket);

			console.log(basketStr);

			chrome.storage.local.set({ 'basket': basketStr }, function () {
				console.log(' Added Basket: ' + basketStr);
			});
		});

	});
}

function addJSON($url) {

	chrome.storage.local.get(['basket'], function (cart) {

		console.log(cart);
		let savedBasket = cart.basket;

		var newBasket = JSON.parse(savedBasket);

		chrome.storage.local.get(['merchant', 'quantity', 'description', 'colour', 'size', 'nombre', 'price', 'personalisation', 'total'], function (data) {

			let merchant = data.merchant;
			let items = data.quantity;
			let desc = data.description;
			let color = data.colour;
			let size = data.size;
			let quantity = data.nombre;
			let price = data.price;
			let total = data.total;
			let perso = data.personalisation;


			var addedBasket = JSON.stringify({
				Merchant: merchant,
				Items: items,
				Description: desc,
				Colour: color,
				Size: size,
				Quantity: quantity,
				Price: price,
				Personalisation: perso,
				Total: total
			});

			console.log(addedBasket);


			var parsedAddedBasket = JSON.parse(addedBasket);

			newBasket['checkout_cart'].push(parsedAddedBasket);

			var basketStr = JSON.stringify(newBasket);

			chrome.storage.local.set({ 'basket': basketStr }, function () {
				console.log(' Added Basket: ' + basketStr);
			});


			chrome.storage.local.get(['basket'], async function (basketStr) {

				console.log(basketStr);

				let savedBasket = basketStr.basket;
				var newBasket = JSON.parse(savedBasket);

				console.log(newBasket);

				var cart = newBasket['checkout_cart'];
				console.log(cart);
				console.log("Saved basket: " + savedBasket);


				try {

					const response = await fetch($url, {

						method: "POST",
						body: JSON.stringify({

							extension_generated_uid: uid,
							checkout_cart: cart
						}),

						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',

						}
					})
					const checkoutcart = await response.json();
					console.log(checkoutcart);
					console.log(response.status);

					if (response.status == 400) {
						alert('Please login to Muhestores before placing an order')
						chrome.tabs.create({ active: true, url: "https://beta-muhestores.muhemax.com/ " });
					} else {

						chrome.tabs.create({ active: true, url: "https://beta-muhestores.muhemax.com/checkout?uid=" + uid });
					}

					return checkoutcart;

				} catch (error) {
					console.log(error);
					throw error;
				}

			});

		});

	});

}

function generateRandomHex() {
	const randomBytes = new Uint8Array(8);
	window.crypto.getRandomValues(randomBytes);
	return Array.from(randomBytes).map(byte => byte.toString(16).padStart(2, '0')).join('');
}





			  