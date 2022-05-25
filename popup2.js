

var title ="";
var cart ="";
var items ="";
var total ="";
var table = document.getElementById('products');


const chkout = document.getElementById("checkout");
let count = localStorage.getItem("cartCount");

if (count == 0){
chkout.addEventListener("click", checkOut);
} else{
chkout.addEventListener("click", multipleckOut);
}
const continueshopping = document.getElementById("addToCart");
continueshopping.addEventListener("click", continueShopping);

//const submitButton = document.getElementById("submit");
//submitButton.addEventListener("click", addToCart);

//Inject the contentScript.js script into the current tab after the popout has loaded

try {
 window.addEventListener('load', async (evt) => {
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	await chrome.scripting.executeScript(
	{
	target:{tabId: tab.id},
	files: ['contentScript.js'],
	});
});
} catch (e) {
  console.error(e);
}

scrapAndSave();

//addToCart();

function scrapAndSave(){
// Listen to messages from the contentScript.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	
	if (message.items){
 
		document.getElementById('quantity').textContent = message.items;
		chrome.storage.local.set({'quantity': message.items}, function() {
	    console.log('Value is set to ' + message.items);});
	}
	 if (message.title){
		 
		 document.getElementById('pagetitle').textContent = message.title;
	     chrome.storage.local.set({'merchant': message.title}, function() {
	     console.log('Value is set to ' + message.title);});
	       }
	 if (message.subtotal){
		 document.getElementById('subtotal').textContent = message.subtotal;
		 chrome.storage.local.set({'total': message.subtotal}, function() {
	     console.log('Value is set to ' + message.subtotal);});
	 }
	 if (message.product){

     var produit = message.product;
	 var rowCount = 1;
     var row = table.insertRow(rowCount);
	 var cell1= row.insertCell(0);
	 cell1.id = "description-du-produit";
	 cell1.innerHTML= produit ;
	 chrome.storage.local.set({'description': produit}, function() {
	 console.log('Value is set to ' + produit);});

	}
	
	if (message.color){
	var couleur =message.color
		var secondRow = table.rows[1];
		var cell2 =secondRow.insertCell(1);
		cell2.id = "couleur-du-produit";
		cell2.innerHTML =couleur;
		chrome.storage.local.set({'colour': couleur}, function() {
	    console.log('Value is set to ' + couleur);});
		
	}
	
	if (message.size){
	var taille =message.size
		var fifthRow = table.rows[1];
		var cell3 =fifthRow.insertCell(2);
		cell3.id = "taille-du-produit";
		cell3.innerHTML =taille;
		chrome.storage.local.set({'size': taille}, function() {
	    console.log('Value is set to ' + taille);});
	}
	if (message.quantity){
	var quantitay =message.quantity
		var thirdRow = table.rows[1];
		var cell4 =thirdRow.insertCell(3);
		cell4.id = "quantité-du-produit";
		cell4.innerHTML =quantitay;
		chrome.storage.local.set({'nombre': quantitay}, function() {
	    console.log('Value is set to ' + quantitay);});
	}
	
	if (message.price){
	var prix =message.price
		var fourthRow = table.rows[1];
		var cell5 =fourthRow.insertCell(4);
		cell5.id = "prix-du-produit";
		cell5.innerHTML =prix;
		chrome.storage.local.set({'price': prix}, function() {
	    console.log('Value is set to ' + prix);});
	}
	 });
}

function addToCart(){
	
 // chrome.storage.local.get(['merchant'], function(result) {
 // console.log('Value currently is ' + result);
 // console.log(JSON.stringify(result));
 // console.dir(result);
  //alert(result);
  
  chrome.storage.local.get([ 'merchant', 'quantity','total' ], function(data) {
	
	var form = document.createElement("form");
	
	document.getElementById("your_form").innerHTML= form;
    var element1 = document.createElement("input");
	var element2 = document.createElement("input");
	//var element3 = document.createElement("input");
	//var element4 = document.createElement("input");
	//var element5 = document.createElement("input");
	//var element6 = document.createElement("input");
	//var element7 = document.createElement("input");
	//var element8 = document.createElement("input");
	
	form.method = "POST";
    form.action = "http://localhost/cart4.php";   

    element1.value= data.merchant;
    element1.name="merchant";
	//element1.type="hidden";
	//element1.type="text";
    form.appendChild(element1);  
	
	element2.value= data.quantity;
    element2.name="items";
	//element2.type="hidden";
	//element2.type="text";
    form.appendChild(element2);
	
	//element3.value= data.description;
   // element3.name="description";
	//element3.type="hidden";
	//element3.type="text";
 //  form.appendChild(element3);
	
	
 //  element4.value= data.colour;
 //   element4.name="colour";
	//element4.type="hidden";
	//element4.type="text";
//   form.appendChild(element4);
  
 //   element5.value= data.size;
 //   element5.name="size";
	//element5.type="hidden";
	//element5.type="text";
 //   form.appendChild(element5);
  
 //  element6.value= data.nombre;
 //  element6.name="quantity";
//	element6.type="hidden";
//	element6.type="text";
  //  form.appendChild(element6);

  //  element7.value= data.price;
 //   element7.name="price";
	//element7.type="hidden";
	//element7.type="text";
 //   form.appendChild(element7);
  
 // element8.value= data.total;
 //  element8.name="total";
	//element8.type="hidden";
	//element8.type="text";
// form.appendChild(element8);
	
	
	
	document.body.appendChild(form);
	
	

   form.submit();
	
	//chrome.tabs.create({url :'popup.html'});
   
});
	
}


  
  function checkOut() {
	  
  chrome.action.setBadgeText({'text': ''});	
 
  chrome.tabs.create({url: 'http://localhost/index.html', active: false}, createdTab => {
  chrome.tabs.onUpdated.addListener(function _(tabId, info, tab) {
    if (tabId === createdTab.id && info.url) {
      chrome.tabs.onUpdated.removeListener(_);
      chrome.scripting.executeScript(
	  {
	   target:{tabId: tab.id},
	   function: setPageListener
	  },
	  
	  () => {
		const text = document.getElementById('pagetitle').textContent;
       // const panier = document.getElementById('cart').innerHTML;
		const produit = document.getElementById('description-du-produit').innerHTML;
		const couleur = document.getElementById('couleur-du-produit').innerHTML;
		const taille = document.getElementById('taille-du-produit').innerHTML;
		const prix = document.getElementById('prix-du-produit').innerHTML;
		const quantitay = document.getElementById('quantité-du-produit').innerHTML;
        const quty = document.getElementById('quantity').textContent;
		const subtotal = document.getElementById('subtotal').textContent;
		chrome.tabs.sendMessage(tab.id,{id:'pagetitle',text}); 
		//chrome.tabs.sendMessage(tab.id,{basket:'cart',panier});
		chrome.tabs.sendMessage(tab.id,{product:'description-du-produit',produit});
		chrome.tabs.sendMessage(tab.id,{color:'couleur-du-produit',couleur});
		chrome.tabs.sendMessage(tab.id,{taille:'taille-du-produit',taille});
		chrome.tabs.sendMessage(tab.id,{prix:'prix-du-produit',prix});
		chrome.tabs.sendMessage(tab.id,{quantity:'quantité-du-produit',quantitay});
		chrome.tabs.sendMessage(tab.id,{nombre:'quantity',quty});
		chrome.tabs.sendMessage(tab.id,{total:'subtotal',subtotal});
		
        chrome.tabs.update(tabId, {active: true});
        // the above will close the popup if it doesn't have its own devtools open
	 // });
      });
    }
  });
}); 
  }
  
  function setPageListener() {
  chrome.runtime.onMessage.addListener(function onMessage(msg) {
     
   if (msg.id)document.getElementById('pagetitle').textContent = "Merchant site: " + msg.text;
   if (msg.product)document.getElementById('produit').innerHTML = msg.produit;
   if (msg.color)document.getElementById('couleur').innerHTML = msg.couleur;
   if (msg.taille)document.getElementById('taille').innerHTML = msg.taille;
   if (msg.quantity)document.getElementById('quantitay').innerHTML = msg.quantitay;
   if (msg.prix)document.getElementById('prix').innerHTML = msg.prix;
   if (msg.nombre) {document.getElementById('quantity').textContent = msg.quty;
   localStorage.setItem("numOfItems", msg.quty)};
 
   if (msg.total){document.getElementById('subtotal').textContent = msg.subtotal;    
    localStorage.setItem("total", msg.subtotal)};
  });
}
   function saveCart() {
  chrome.runtime.onMessage.addListener(function onMessage(msg) {
     
   if (msg.id)console.log("Merchant site: " + msg.text);
   if (msg.product)console.log(msg.produit);
   if (msg.color)console.log(msg.couleur);
   if (msg.taille)console.log(msg.taille);
   if (msg.quantity)console.log(msg.quantitay);
   if (msg.prix)console.log(msg.prix);
   if (msg.nombre)console.log(msg.quty);
   if (msg.total)console.log(msg.subtotal);    
    
  });
}


function multipleckOut(){
	
	sendJSON();
	localStorage.setItem("cartCount", 0)
	chrome.action.setBadgeText({'text': ''});
	
	chrome.tabs.create({active: true, url: "http://localhost/checkout.html"});
}
  
  
 function checkOut2(){
	  
 chrome.tabs.create({url: 'http://localhost/index.html', active: false}, createdTab => {
  chrome.tabs.onUpdated.addListener(function _(tabId, info, tab) {
    if (tabId === createdTab.id && info.url) {
      chrome.tabs.onUpdated.removeListener(_);
      chrome.scripting.executeScript(
	  {
	   target:{tabId: tab.id},
	 // files:['alert2.js'],
	  function :test
	  },
	  () => {
        chrome.tabs.update(tabId, {active: true});
        // the above will close the popup if it doesn't have its own devtools open
      });
    }
  });
});
  
}

//function checkoutSubmit(){
	//submitButton.addEventListener('click', async (evt) => {

	// let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
	// await chrome.scripting.executeScript(
//	  {
//	   target:{tabId: tab.id},
//	   function: setPageListenerx
//	  },
	  
//	  () => {
//		const text = document.getElementById('pagetitle').textContent;
       // const panier = document.getElementById('cart').innerHTML;
	//	const produit = document.getElementById('description-du-produit').innerHTML;
	//	const couleur = document.getElementById('couleur-du-produit').innerHTML;
 	//	const taille = document.getElementById('taille-du-produit').innerHTML;
	//	const prix = document.getElementById('prix-du-produit').innerHTML;
	//	const quantitay = document.getElementById('quantité-du-produit').innerHTML;
    //    const quty = document.getElementById('quantity').textContent;
	//	const subtotal = document.getElementById('subtotal').textContent;
	//	chrome.tabs.sendMessage(tab.id,{id:'pagetitle',text}); 
		//chrome.tabs.sendMessage(tab.id,{basket:'cart',panier});
	//	chrome.tabs.sendMessage(tab.id,{product:'description-du-produit',produit});
	//	chrome.tabs.sendMessage(tab.id,{color:'couleur-du-produit',couleur});
	//	chrome.tabs.sendMessage(tab.id,{taille:'taille-du-produit',taille});
	//	chrome.tabs.sendMessage(tab.id,{prix:'prix-du-produit',prix});
	//	chrome.tabs.sendMessage(tab.id,{quantity:'quantité-du-produit',quantitay});
	//	chrome.tabs.sendMessage(tab.id,{nombre:'quantity',quty});
	//	chrome.tabs.sendMessage(tab.id,{total:'subtotal',subtotal});
		
        //chrome.tabs.update(tabId, {active: true});
        // the above will close the popup if it doesn't have its own devtools open
	 // });
    //  });
	//   });

//const text = document.getElementById('subtotal').textContent;

 // chrome.storage.local.set({'merchant': text}, function() {
  //console.log('Value is set to ' + text);
//});

//chrome.storage.local.get(['merchant'], function(result) {
 // console.log('Value currently is ' + result);
 // console.log(JSON.stringify(result));
 // console.dir(result);
  //alert(result);
//});
  //  localStorage.setItem("merchant", text);
 // const panier = document.getElementById('cart').innerHTML;
 //const produit = document.getElementById('description-du-produit').innerHTML;
  // localStorage.setItem("product", produit);
 
   // const couleur = document.getElementById('couleur-du-produit').innerHTML;
   //    localStorage.setItem("colour", color);
	   
         //  const taille = document.getElementById('taille-du-produit').innerHTML;
          //    localStorage.setItem("size", taille);
			  
              //    const prix = document.getElementById('prix-du-produit').innerHTML;
                 //     localStorage.setItem("price", prix);
					  
                 //       const quantitay = document.getElementById('quantité-du-produit').innerHTML;
					//	   localStorage.setItem("qty", quantitay);
						   
                      //        const quty = document.getElementById('quantity').textContent;
                      //           localStorage.setItem("quty", quantity);
								 
                      //       const subtotal = document.getElementById('subtotal').textContent;
                      //            localStorage.setItem("total", subtotal);
	
//}


function continueShopping() {
sendJSON();	
//addToCart();	
let count = localStorage.getItem("cartCount");
count++;

localStorage.setItem("cartCount", count);
chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
chrome.action.setBadgeText({text: count.toString()})
chrome.tabs.create({active: true, url: "https://muhestores.com/home-en#SHOPPING"});
}



function test (){
	alert('YOO');
}

function addRow(){ 
	var table = document.getElementById('products');
	var myDescription = document.getElementById('description');
	var myColor = document.getElementById('color');
	var myQuantity = document.getElementById('quantity');
	var myPrice = document.getElementById('price');
	
	var rowCount = table.rows.length;
    var row = table.insertRow();
	
	row.insertCell(0).innerHTML="hello" ;
    //row.insertCell(1).innerHTML= "hi";
  //  row.insertCell(2).innerHTML= "bonjour";
	//row.insertCell(3).innerHTML= "bonjour";
	
}

//const testing = document.getElementById("test");
//testing.addEventListener("click", async () => {
 // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

 // chrome.scripting.executeScript({
 //   target: { tabId: tab.id },
 //   function: saveCart,
 // },
  //() => {
	//	const text = document.getElementById('pagetitle').textContent;
       // const panier = document.getElementById('cart').innerHTML;
	//	const produit = document.getElementById('description-du-produit').innerHTML;
	//	const couleur = document.getElementById('couleur-du-produit').innerHTML;
	//	const taille = document.getElementById('taille-du-produit').innerHTML;
	//	const prix = document.getElementById('prix-du-produit').innerHTML;
	//	const quantitay = document.getElementById('quantité-du-produit').innerHTML;
    //    const quty = document.getElementById('quantity').textContent;
	//	const subtotal = document.getElementById('subtotal').textContent;
	//	chrome.tabs.sendMessage(tab.id,{id:'pagetitle',text}); 
		//chrome.tabs.sendMessage(tab.id,{basket:'cart',panier});
	//	chrome.tabs.sendMessage(tab.id,{product:'description-du-produit',produit});
	//	chrome.tabs.sendMessage(tab.id,{color:'couleur-du-produit',couleur});
	//	chrome.tabs.sendMessage(tab.id,{taille:'taille-du-produit',taille});
	//	chrome.tabs.sendMessage(tab.id,{prix:'prix-du-produit',prix});
	//	chrome.tabs.sendMessage(tab.id,{quantity:'quantité-du-produit',quantitay});
	//	chrome.tabs.sendMessage(tab.id,{nombre:'quantity',quty});
	//	chrome.tabs.sendMessage(tab.id,{total:'subtotal',subtotal});
		
        //chrome.tabs.update(tabId, {active: true});
        // the above will close the popup if it doesn't have its own devtools open
	 // });
 //     }
 // );
//})

function clearLocalStorage(){
  chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
   })
 }
function counter(){
	let target = document.getElementById("target");
    let increment = document.getElementById("increment");
    let count = localStorage.getItem("counter") || 0;
    target.innerHTML = count;

    increment.addEventListener("click", () => {
        count++;
        localStorage.setItem("counter", count);
        target.innerHTML = count;
    })
}

function sendJSON(){
	
	 chrome.storage.local.get([ 'merchant', 'quantity', 'description', 'colour', 'size','nombre','price','total' ], function(data) {
              
            let merchant = data.merchant;
            let items = data.quantity;
			let desc = data.description;
			let color = data.colour;
			let size = data.size;
			let quantity = data.nombre;
			let price = data.price;
			let total = data.total;
		   
              
            // Creating a XHR object
            let xhr = new XMLHttpRequest();
            let url = "http://localhost/submit2.php";
       
            // open a connection
            xhr.open("POST", url, true);
 
            // Set the request header i.e. which type of content you are sending
            xhr.setRequestHeader("Content-Type", "application/json, charset=utf-8");
 
            // Create a state change callback
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
 
                    // Print received data from server
                    //result.innerHTML = this.responseText;
					console.log(this.responseText);
					//alert(this.responseText);
 
                }
            };
 
            // Converting JSON data to string
            var data = JSON.stringify({ "Merchant": merchant, "Items":items,"Descrition": desc, "Couleur":color, "Taille": size, "Quantity":quantity, "Prix": price, "Total":total  });
 
            // Sending data with the request
            xhr.send(data);
	 });
        }