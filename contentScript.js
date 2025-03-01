
//vars
var number="";
var pName ="";
var pPrice="";
var pQuty="";
var total="";
var color="";
var sum = 0;
var domain = window.location.href;
var host = window.location.hostname;

// send the page title as a chrome message
//chrome.runtime.sendMessage({title:document.title});
chrome.runtime.sendMessage({title: page});




        switch (domain) {
            //muhestores
            case "https://beta-muhestores.muhemax.com/#shopping":
                muhestores();
                break;
            //asos
            case "https://secure.asos.com/":
                asos();
                break;
                boohoo();
                break;
            //boohoo - after login
            case "https://www.boohoo.com/checkout?registration=false&step=shipping":
                boohoo();
                break;
            //next
            case "https://www.next.co.uk/secure/checkout/delivery/home":
                next();
                break;
            //h&m
            case "https://www2.hm.com/en_gb/checkout-r":
                hm();
                break;
            //clarks
            case "https://www.clarks.com/en-gb/checkout/delivery":
                clarksDelivery();
                break;
            //sportsdirect
            case "https://www.sportsdirect.com/checkoutsp#payment_method":
                sportsDirect();
                break;
            //sportsdirect - choose delivery
            case "https://www.sportsdirect.com/checkoutsp#home_delivery_options":

                alert("MUHESTORES MESSAGE:\nPlease select the Standard Delivery option:\nAnd Select Continue To Payment");
                break;
            //sportsdirect - Add personalisation     
            case "https://www.sportsdirect.com/cart":
                var personalisation = document.getElementsByClassName("printess-container is-personalised hide-breakdown-costs");
                if (personalisation.length == 0) {
                    alert("MUHESTORES MESSAGE:\nPlease go to the merchant's site Checkout page");
                } else {
                    sportsDirectPersonalisation();
                }
                break;
            //newlook
            case "https://www.newlook.com/uk/checkout/single":
                newLook();
                break;
            //tmLewin
            case "https://tmlewin.co.uk" + pathname:
                tmLewin();
                break;

            case "https://tmlewin.co.uk" + pathname + "?discount=+&remove_discount_code=1":
                tmLewin();
                break;
            case "https://tmlewin.co.uk/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0NDowMUpKMU42OTk4MUM4NEJQUkg5SEhFU0hQTQ?discount=+&remove_discount_code=1":
                tmLewin();
                break;

            //tkmaxx
            case "https://www.tkmaxx.com/uk/en/checkout/multi/delivery-method/choose":
                tkMaxx();
                break;
            //asda
            case "https://groceries.asda.com/trolley":
                asda();
                break;

            //george - Where
             case "https://direct.asda.com/on/demandware.store/Sites-ASDA-Site/default/Cart-Checkout/where":
                alert("MUHESTORES MESSAGE:\nPlease select the Delivery option");
             break;
            //george - Delivery Address
            case "https://direct.asda.com/on/demandware.store/Sites-ASDA-Site/default/Cart-Checkout/where/delivery/list-address":       
                alert("MUHESTORES MESSAGE:\nPlease click 'Next'");
                break;
            //george -Delivery section
             case "https://direct.asda.com/on/demandware.store/Sites-ASDA-Site/default/Cart-Checkout/where/delivery/contact-info":
                alert("MUHESTORES MESSAGE:\nPlease click 'Next'");
                break;
            //george
            case "https://direct.asda.com/on/demandware.store/Sites-ASDA-Site/default/Cart-Checkout/where/delivery/options":
                george();
                break

            //Hawes & Curtis
            case "https://www.hawesandcurtis.co.uk/checkout/delivery":
                HawesCurtis();
                break;

            //house of frasier home delivery option
            case "https://www.houseoffraser.co.uk/checkoutsp#launch":
                alert("MUHESTORES MESSAGE:\nPlease select the Home Delivery option");
            break;
            case "https://www.houseoffraser.co.uk/checkoutsp":
                alert("MUHESTORES MESSAGE:\nPlease select the Home Delivery option");
                break;  
            //house of frasier continue to payment
            case "https://www.houseoffraser.co.uk/checkoutsp#home_delivery_options":
                alert("MUHESTORES MESSAGE:\nPlease click 'Continue To Payment'");
                break;
            //house of Frasier checkout
            case "https://www.houseoffraser.co.uk/checkoutsp#payment_method":
                houseOfFrasier();
                break;

            //zalando
            case "https://www.zalando.co.uk/checkout/confirm":
                zalando();
                break;
            //boots
            case "https://www.boots.com/checkout/initialise":
                boots();
                break;

            //superdrug choose delivery
            case "https://www.superdrug.com/checkout/multi/choose-delivery-address":

                var delivery = document.getElementsByClassName("delivery-mode delivery-mode--home");
                var deliveryButton = document.getElementsByClassName("delivery-options__name delivery-options__name--uk-home-sd-shipping");

                if (delivery && (deliveryButton.length == 0)) {
                    alert("MUHESTORES MESSAGE:\n Please Click Home Delivery and choose Standard Delivery");
                } else {
                superDrug();
                }
                break;

            //AutoDoc
            case "https://www.autodoc.co.uk"+ pathname:
            alert("MUHESTORES MESSAGE:\nPlease Contact us regarding orders from AUTODOC");
                break;

            //currys delivery option
            case "https://www.currys.co.uk/app/basket?stage=fulfillmentOptions#fulfillmentOptions":
                alert("MUHESTORES MESSAGE:\nPlease Select Delivery and Continue to customer details");
            break;
            //currys
            case "https://www.currys.co.uk/app/basket?stage=shipping#shipping":
                currys();
            break;

            //laptops Direct
            case "https://www.laptopsdirect.co.uk"+ pathname:
                alert("MUHESTORES MESSAGE:\nPlease Contact us regarding orders from LAPTOPSDIRECT");
            break;
            //watchshop
            case "https://www.watchshop.com/checkoutsp#home_delivery_options":
                watchShop();
                break;
            //watchshop checkout page
            case "https://www.watchshop.com/checkoutsp":
                watchShop();
                break;
            //watchshop checkout launch
            case "https://www.watchshop.com/checkoutsp#launch":
                alert("MUHESTORES MESSAGE:\nPlease Select Home Delivery");
                break;

            //toyshop
            case "https://www.thetoyshop.com/cart":
                toyShop();
                break;
            //toyshop
            case "https://www.thetoyshop.com/checkout/multi/delivery-address/add":
                alert("MUHESTORES MESSAGE:\nPlease Click 'Next' At the bottom of the Delivery Address Section");
                break;
            //toyshop checkout
            case "https://www.thetoyshop.com/checkout/multi/delivery-method/choose":
                toyShopCheckout();
                break;

            //argos
            case "https://www.argos.co.uk/basket":
                argos();
                break;
            //argos Trolley Click
            case "https://www.argos.co.uk/basket?clickOrigin=header:trolley:trolley":
                argos();
                break;

            //Chichi
            case "https://www.chichiclothing.com" + pathname + "?buyScence=cart":
              chichi();
            break;
            //zara
            case "https://www.zara.com/uk/en/shop/cart":
                zara();
            break;

            //default, M&S, Matalan
            default:
                       }
            break;
        }

var quantity = document.getElementsByClassName("bag-header");
for (var i = 0; i < quantity.length; i++) {
    number += parseInt(quantity[i].textContent);
}
nItems =number;
chrome.runtime.sendMessage({items:nItems});

    var productName = document.getElementsByClassName("item-description");
for (var i = 0; i < productName.length; i++) {
    }

var productColor = document.getElementsByClassName("item-colour");
  for (var i = 0; i < productColor.length; i++) {
      pColor += productColor[i].textContent + n;
   //console.log(pColor);
    }

var productSize = document.getElementsByClassName("item-size");
   for (var i = 0; i < productSize.length; i++) {	
    }

    var productQuantity = document.getElementsByClassName("item-quantity");
    for (var i = 0; i < productQuantity.length; i++) {
    }
    
    var productPrice = document.getElementsByClassName("item-price");
   for (var i = 0; i < productName.length; i++) {
    }

   chrome.runtime.sendMessage({subtotal:total});
}

//boohoo
function boohoo() {
//headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

for (var i = 0; i < quantity.length; i++) {
    number += (quantity[i].textContent).match(/\d+/);
	sum +=parseInt(number[i]);
 }
nItems =sum;
chrome.runtime.sendMessage({items:nItems});

for (var i = 0; i < productName.length; i++) {
}
chrome.runtime.sendMessage({product:pName});

for (var i = 0; i < productColor.length; i++) {
	
	 if(i % 2 === 0) { // index is even
	 } 
   //console.log(pColor);
}
chrome.runtime.sendMessage({color:pColor});

for (var i = 0; i < productSize.length; i++) {
	
	 if(i % 2 === 1) { // index is odd
	 } 
   //console.log(pSize);
}
chrome.runtime.sendMessage({size:pSize});

for (var i = 0; i < productQuantity.length; i++) {
   pQuty += productQuantity[i].textContent +n;
   //console.log(pQuty);
}
chrome.runtime.sendMessage({quantity:pQuty});


for (var i = 0; i < productName.length; i++) {
   pPrice += price[i].innerText +n;
    }
chrome.runtime.sendMessage({price:pPrice});

//total
    var subtotal = document.getElementsByClassName("b-summary_table-value");
var dernier =  subtotal.length-1;
for (var i = 0; i < subtotal.length; i++) {
   total = subtotal[dernier].innerText;
}
   chrome.runtime.sendMessage({subtotal:total});
 }

//next
function next() {
    //headers
    var productHeader = "Product";
    var colourHeader = "Code";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//products
    var productName = document.getElementsByClassName("order-summary__item-description");
for (var i = 0; i < productName.length; i++) {
   pName += productName[i].textContent + n;
   console.log(pName);
    }

chrome.runtime.sendMessage({product:pName});

//product code/color
    var productColor = document.querySelectorAll(".order-summary__item-description");

for (var i = 0; i < productColor.length; i++) {
    pColor += productColor[i].nextElementSibling.textContent + n;
}

chrome.runtime.sendMessage({color:pColor});

//size 
    var productSize = document.querySelectorAll(".order-summary__body-table-details-value");    
    for (var i = 0; i < productSize.length; i++) {
        if (i % 2 === 0) { //index is even
            pSize += productSize[i].innerText + n;
        }
    }
    chrome.runtime.sendMessage({ size: pSize });

//quantity & Items
    var productQuantity = document.querySelectorAll(".order-summary__body-table-details-value");
    for (var i = 0; i < productQuantity.length; i++) {
        if (i % 2 === 1) { //index is odd 
            pQuty += productQuantity[i].innerText + n;
            totalItems.push(parseInt(productQuantity[i].innerText, 10));
        }
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

//price
    var productPrice = document.getElementsByClassName("order-summary__body-table-td order-summary__body-table-last-col text-nowrap");

for (var i = 0; i < productName.length; i++) {
   pPrice += productPrice[i].innerText +n;
    }
    console.log(productPrice);
chrome.runtime.sendMessage({price:pPrice});

//total
    var subtotal = document.getElementsByClassName("delivery-options-totals__amount");
      total = subtotal[0].innerText;
  
chrome.runtime.sendMessage({subtotal:total});

}

//h&m
function hm() {
    //Get the cart
    var productbutton = document.getElementsByClassName("fec837");
    productbutton[0].click();

    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //products
    var productName = document.querySelectorAll(".b0981f.ProductsDetailsList--productContentNS__2cEie > h4");
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].innerHTML + n;
    }
    chrome.runtime.sendMessage({ product: pName });

    //colour
    var productColor = document.querySelectorAll(".b0981f.ProductsDetailsList--productContentNS__2cEie > dl > dd:nth-child(2)");
    for (var i = 0; i < productColor.length; i++) {
       pColor += productColor[i].innerText + n;
    }
    chrome.runtime.sendMessage({ color: pColor });

    //size
    var productSize = document.querySelectorAll(".b0981f.ProductsDetailsList--productContentNS__2cEie > dl > dd:nth-child(4)");
    for (var i = 0; i < productSize.length; i++) {
         pSize += productSize[i].innerText + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //quantity & items
    var productQuantity = document.querySelectorAll(".b0981f.ProductsDetailsList--productContentNS__2cEie > dl > dd:nth-child(6)");
    var totalItems = [];
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].innerText + n;
        totalItems.push(parseInt(productQuantity[i].innerText, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //price
    var productPrice = document.querySelectorAll(".b0981f.ProductsDetailsList--productContentNS__2cEie > dl > p");
    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    //total
    var subtotal = document.querySelector("#app > div > div > div > aside > div.SideBar--sideBarContent__SMTyg.SideBar--ns_plus_theme_sideBarContent__1lMyR > div:nth-child(2) > table > tfoot > tr > td");
    total = subtotal.textContent;

    console.log(total);
    chrome.runtime.sendMessage({ subtotal: total });
}
//clarks

//clarks delivery
function clarksDelivery() {
    //delivery 
    var delivery = document.getElementsByClassName("sc-f1399956-7 iyCOAu");
    if (delivery.length == 1) {

        delivery[0].click();
        setTimeout(() => clarks(), 2000)
    } else { 

    delivery[2].click();
    setTimeout(() => clarks(), 2000)
    }
}
//clarks
function clarks() {
 
    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size & Width";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });
  
   //products
    var productName = document.getElementsByClassName("sc-dce53de4-1 bfIAxZ");
   for (var i = 0; i < productName.length; i++) {
      pName += productName[i].textContent + n;
   }
   chrome.runtime.sendMessage({product:pName});
   
   //Colour
    var productColor = document.querySelectorAll("#__next > div.sc-14c9ab0e-0.iqCKVv > div > section.sc-14c9ab0e-3.icYEUU > aside > ul > li > div > div.sc-dce53de4-3.jBBwZe > div.sc-dce53de4-6.fIhmas > table:nth-child(1) > tbody > tr:nth-child(2) > td > span");
   for (var i = 0; i < productColor.length; i++) {
          
       pColor += productColor[i].textContent + n;
       console.log(productColor);
      console.log(pColor);
   }
   chrome.runtime.sendMessage({color:pColor});
   
   //size
    var productSize = document.querySelectorAll("#__next > div.sc-14c9ab0e-0.iqCKVv > div > section.sc-14c9ab0e-3.icYEUU > aside > ul > li > div > div.sc-dce53de4-3.jBBwZe > div.sc-dce53de4-6.fIhmas > table:nth-child(1) > tbody > tr:nth-child(1) > td > span");
    var productWidth = document.querySelectorAll("#__next > div.sc-14c9ab0e-0.iqCKVv > div > section.sc-14c9ab0e-3.icYEUU > aside > ul > li > div > div.sc-dce53de4-3.jBBwZe > div.sc-dce53de4-6.fIhmas > table:nth-child(2) > tbody > tr:nth-child(1) > td > span")
   for (var i = 0; i < productSize.length; i++) {

      pSize += productSize[i].textContent  + "-" + productWidth[i].textContent+ n;
   }
   chrome.runtime.sendMessage({size:pSize});
   
   //quantity & Items
    var productQuantity = document.querySelectorAll("#__next > div.sc-14c9ab0e-0.iqCKVv > div > section.sc-14c9ab0e-3.icYEUU > aside > ul > li > div > div.sc-dce53de4-3.jBBwZe > div.sc-dce53de4-6.fIhmas > table:nth-child(2) > tbody > tr:nth-child(2) > td");
    var totalItems = [];
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].textContent + n;
        totalItems.push(parseInt(productQuantity[i].innerText, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });
  
   //price
    var productPrice = document.getElementsByClassName("now-price"); 
   
  for (var i = 0; i < productPrice.length; i++) {
     pPrice += productPrice[i].textContent +n;
    }
   console.log(productPrice);
  chrome.runtime.sendMessage({price:pPrice});
   
   

      chrome.runtime.sendMessage({subtotal:total});
}

//sportsdirect
function sportsDirect() {

    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //products
    var productName = document.getElementsByClassName("summaryListTitle");
    var productNumber = document.getElementsByClassName("summaryListProductID");
    for (var i = 0; i < productName.length / 2; i++) {
        pName += productName[i].textContent + n;

    }
    console.log(productName);
    console.log(productNumber);
    chrome.runtime.sendMessage({ product: pName });

    //colour
    var productColor = document.getElementsByClassName("summaryListProductCol");
    for (var i = 0; i < productColor.length / 2; i++) {

        pColor += productColor[i].lastChild.textContent + n;
    }
    chrome.runtime.sendMessage({ color: pColor });

    //size
    var productSize = document.getElementsByClassName("summaryListProductSize");
    for (var i = 0; i < productSize.length / 2; i++) {

        pSize += productSize[i].lastChild.textContent + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //quantity & number of items
    var productQuantity = document.getElementsByClassName("summaryListProductQty");
    var totalItems = [];

    for (var i = 0; i < productQuantity.length / 2; i++) {
        pQuty += productQuantity[i].lastChild.textContent + n;
        totalItems.push(parseInt(productQuantity[i].lastChild.textContent, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    chrome.runtime.sendMessage({ items: nItems });
    chrome.runtime.sendMessage({ quantity: pQuty });

    //price
    var productPrice = document.getElementsByClassName("summaryListInfoPriSell");

    for (var i = 0; i < productPrice.length / 2; i++) {
        pPrice += productPrice[i].firstChild.textContent + n;
    }

    chrome.runtime.sendMessage({ price: pPrice });

    //personalisation value
    var p = document.getElementsByClassName("summaryTotalTitle");
    var i = document.getElementsByClassName("additionValue");

       if (p[1].innerText === "Personalisation") { 

         pPerso = "Personalisation: " + i[0].textContent;

       }
        chrome.runtime.sendMessage({ personalisation: pPerso });

// send the total a chrome message
    for (var i = 0; i < subtotal.length; i++) {
     } 
     console.log(pPrice);
     chrome.runtime.sendMessage({price:pPrice});
//Total
var subtotal = document.getElementsByClassName("grand-total-sum"); 
total = subtotal[0].textContent;
chrome.runtime.sendMessage({subtotal:total});

}

//watchShop
function watchShop() {
   //delivery option
    let deliverybutton = document.getElementsByClassName("selectionDescription flex flexJustBet");
    var continuetoPayment = document.querySelectorAll("div > div.formCompleteCTA > button");

    if (deliverybutton.length > 0) {

        alert("MUHESTORES MESSAGE:\nPlease select the Standard Delivery option:\nAnd Select Continue To Payment");

    } else {

        WatchShopBasket();
    }
}
//WatchShopBasket
function WatchShopBasket() {
    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Products
    var productName = document.getElementsByClassName("summaryListTitle");
     for (var i = 0; i < productName.length/2; i++) {  
        pName += productName[i].innerText + n;
     } 
     chrome.runtime.sendMessage({product:pName}); 

   //Colour
    var productColor = document.getElementsByClassName("summaryListProductCol");
    for (var i = 0; i < productColor.length / 2; i++) {
        pColor += productColor[i].innerText.substring(7) + n;
    }
    chrome.runtime.sendMessage({ color: pColor });
    //Size
    var productSize = document.getElementsByClassName("summaryListProductSize");
    for (var i = 0; i < productSize.length / 2; i++) {
        pSize += productSize[i].innerText.substring(5) + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

//Quantity & number of items
    var productQuantity = document.getElementsByClassName("summaryListProductQty");
      for (var i = 0; i < productQuantity.length/2; i++) {
          pQuty += productQuantity[i].innerText.slice(5) + n;
          totalItems.push(parseInt(productQuantity[i].innerText.slice(5), 10));
      }
      nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      chrome.runtime.sendMessage({ quantity: pQuty });
      chrome.runtime.sendMessage({ items: nItems });
//Price
    var productPrice = document.getElementsByClassName("summaryListInfoPrice");
    for (var i = 0; i < productPrice.length / 2; i++) {
        pPrice += productPrice[i].firstChild.childNodes[0].textContent + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });
//Total
    var subtotal = document.getElementsByClassName("summaryTotalAmount");
    total = subtotal[0].textContent;
    chrome.runtime.sendMessage({ subtotal: total });
}

//toyshop
function toyShop() {
    //headers
    var productHeader = "Product";
    var colourHeader = "Product No.";
    var sizeHeader = "";


// send the number of items as a chrome message

// send the total a chrome message
   

    // send the total a chrome message
  
  // chrome.runtime.sendMessage({subtotal:total});
 //}
