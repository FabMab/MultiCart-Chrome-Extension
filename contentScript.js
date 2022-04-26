
//vars
var number="";
var result = "";
var pName ="";
var pColor="";
var pSize="";
var pPrice="";
var pQuty="";
var total="";
var sum = 0;
var n = "<br><br>";
var nItems="";
var domain = window.location.href;
var host = window.location.hostname;
var page = host.replace(/^www\./,'');

// send the page title as a chrome message
//chrome.runtime.sendMessage({title:document.title});
chrome.runtime.sendMessage({title: page});

switch(domain){
	
	case "https://secure.asos.com/":
	asos();
	break;
	
	case "https://www.boohoo.com/cart":
	boohoo();
	break;
	
	default:
	alert("<b>Muhestores message:<b>\nPlease go to the merchant's site checkout page"+ domain);
	}

function asos(){
// send the number of items as a chrome message
var quantity = document.getElementsByClassName("bag-header");
for (var i = 0; i < quantity.length; i++) {
    number += parseInt(quantity[i].textContent);
 }
 nItems =number;
chrome.runtime.sendMessage({items:nItems});

//send the cart as chrome message
//var somethings = document.getElementsByClassName("item product-item");
//for (var i = 0; i < somethings.length; i++) {
 //  result += somethings[i].textContent + n;
//}
//chrome.runtime.sendMessage({cart:result});

//send the cart products as chrome messages
var productName = document.getElementsByClassName("item-description");
for (var i = 0; i < productName.length; i++) {
   pName += productName[i].textContent + n;
   console.log(pName);
}
chrome.runtime.sendMessage({product:pName});

//send the product color as chrome message
var productColor = document.getElementsByClassName("item-colour");
for (var i = 0; i < productColor.length; i++) {
       pColor += productColor[i].textContent + n; 
   //console.log(pColor);
}
chrome.runtime.sendMessage({color:pColor});

//send the product size as chrome message
var productSize = document.getElementsByClassName("item-size");
for (var i = 0; i < productSize.length; i++) {
	
       pSize += productSize[i].textContent + n;
   //console.log(pSize);
}
chrome.runtime.sendMessage({size:pSize});

//send the item quntity as chrome message
var productQuantity = document.getElementsByClassName("item-quantity");
for (var i = 0; i < productQuantity.length; i++) {
   pQuty += productQuantity[i].textContent +n;
   //console.log(pQuty);
}
chrome.runtime.sendMessage({quantity:pQuty});

//send the product price as chrome message
var productPrice = document.getElementsByClassName("item-price");
for (var i = 0; i < productName.length; i++) {
   pPrice += productPrice[i].textContent +n;
   console.log(pPrice);
}
chrome.runtime.sendMessage({price:pPrice});

// send the number of items as a chrome message
var subtotal = document.getElementsByClassName("l-rtc");
for (var i = 0; i < subtotal.length; i++) {
    total = subtotal[0].textContent;
 }
chrome.runtime.sendMessage({subtotal:total});
}


function boohoo(){
// send the number of items as a chrome message
var quantity = document.getElementsByClassName("b-cart_product-qty");
for (var i = 0; i < quantity.length; i++) {
    number += (quantity[i].textContent).match(/\d+/);
	sum +=parseInt(number[i]);
 }
nItems =sum;
chrome.runtime.sendMessage({items:nItems});

//send the cart products as chrome messages
var productName = document.getElementsByClassName("l-cart_product-title");
for (var i = 0; i < productName.length; i++) {
   pName += productName[i].textContent + n;
   //console.log(pName);
}
chrome.runtime.sendMessage({product:pName});

//send the product color as chrome message
var productColor = document.getElementsByClassName("b-cart_product-attribute_value");
//var productColor = document.getElementsByClassName("l-cart_product-details");
for (var i = 0; i < productColor.length; i++) {
	
	 if(i % 2 === 0) { // index is even
       pColor += productColor[i].textContent + n;
	 } 
   //console.log(pColor);
}
chrome.runtime.sendMessage({color:pColor});

//send the product size as chrome message
var productSize = document.getElementsByClassName("b-cart_product-attribute_value");
for (var i = 0; i < productSize.length; i++) {
	
	 if(i % 2 === 1) { // index is odd
       pSize += productSize[i].textContent + n;
	 } 
   //console.log(pSize);
}
chrome.runtime.sendMessage({size:pSize});

//send the item quantity as chrome message
var productQuantity = document.getElementsByClassName("b-cart_product-qty_value");
for (var i = 0; i < productQuantity.length; i++) {
   pQuty += productQuantity[i].textContent +n;
   //console.log(pQuty);
}
chrome.runtime.sendMessage({quantity:pQuty});

//send the product price as chrome message
//var productPrice = document.getElementsByClassName("b-price-item m-new"); 
var productPrice = document.getElementsByClassName("l-cart_product-total");

for (var i = 0; i < productName.length; i++) {
   pPrice += productPrice[i].textContent +n;
   console.log(pPrice);
}
chrome.runtime.sendMessage({price:pPrice});


//var somethings = document.getElementsByClassName("l-cart_product-item b-cart_product");
//for (var i = 0; i < somethings.length; i++) {
 //  result += somethings[i].textContent + n;
//}
//chrome.runtime.sendMessage({cart:result});

// send the total a chrome message
var subtotal = document.getElementsByClassName("b-summary_table-value");
var dernier =  subtotal.length-1;
for (var i = 0; i < subtotal.length; i++) {
   total = subtotal[dernier].textContent;
}
   chrome.runtime.sendMessage({subtotal:total});
 }



//function boohoo(){

// send the number of items as a chrome message
//var quantity = document.getElementsByClassName("mini-cart-qty");
//for (var i = 0; i < quantity.length; i++) {
  //  number += (quantity[i].textContent).match(/\d+/);
//	sum +=parseInt(number[i]);
//}
//nItems ="Items: "+sum;
//chrome.runtime.sendMessage({items:nItems});
//send the cart as chrome message
//var somethings = document.getElementsByClassName("mini-cart-product-content");
//for (var i = 0; i < somethings.length; i++) {
 //  result += somethings[i].textContent.replace("Remove",n);
//}
//chrome.runtime.sendMessage({cart:result});

// send the total a chrome message
//var subtotal = document.getElementsByClassName("order-total");
  
//for (var i = 0; i < subtotal.length; i++) {
    //total = subtotal[0].textContent;
// }
//chrome.runtime.sendMessage({subtotal:total});

//}
// send the total a chrome message
//var subtotal = document.querySelectorAll('tr.order-total td');
 //  total = subtotal[1].textContent;
   
  // chrome.runtime.sendMessage({subtotal:total});
 //}
