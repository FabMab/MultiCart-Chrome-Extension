
//vars
var number="";
var result= "";
var resulttwo = "";
var n = "<br><br>";
var pName ="";
var pPerso=" ";
var perso="";
var pColor=" ";
var pRef="";
var pSize=" ";
var pPrice="";
var pQuty="";
var total="";
var color="";
var sum = 0;
var nItems = "";
var descArray = 0;
var deliveryTotal = [];
var stringTotal = "";
var amount = "";
var totalItems = [];
var domain = window.location.href;
var host = window.location.hostname;
var page = host.replace(/^www\./, '');
var pathname = window.location.pathname;
var MsuniquePathname = "";
var QtyHeader = "Qty";
var priceHeader = "Price";


chrome.runtime.sendMessage({ title: page });
chrome.runtime.sendMessage({ personalisation: pPerso });



        switch (domain) {
            //muhestores
            case "https://beta-muhestores.muhemax.com/#shopping":
                muhestores();
                break;
            //asos
            case "https://secure.asos.com/":
                asos();
                break;
            //boohoo
            case "https://www.boohoo.com/checkout?step=shipping":
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
            case "https://tmlewin.co.uk"+pathname:
                tmLewin();
                break;

            case "https://tmlewin.co.uk"+pathname+"?discount=+&remove_discount_code=1":
                tmLewin();
                break;
            case "https://tmlewin.co.uk/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0NDowMUpKMU42OTk4MUM4NEJQUkg5SEhFU0hQTQ?discount=+&remove_discount_code=1":
                tmLewin();
                break;

            case "https://tmlewin.co.uk"+pathname+"?auto_redirect=false&edge_redirect=true&locale=en-GB&skip_shop_pay=true":
                tmLewin();
                break;

            case "https://tmlewin.co.uk"+pathname+"?auto_redirect=false&edge_redirect=true&locale=en-US&skip_shop_pay=true":
                tmLewin();
                break;

            case "https://tmlewin.co.uk" + pathname + "?auto_redirect=false&discount=+&edge_redirect=true&locale=en-GB&remove_discount_code=1&skip_shop_pay=true":
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

            case "https://www.argos.co.uk/basket?clickOrigin=header:home:trolley":
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
                //Marks & Spencer
                if (page === "marksandspencer.com" && domain.includes("MSSinglePageCheckoutCmd?")) {
                    MandSDelivery();
                //Matalan
                } else if (page === "checkout.matalan.co.uk" && domain.includes("checkout/?ct")){
                    matalanDelivery();
                       }else{
                            alert("MUHESTORES MESSAGE:\nPlease go to the merchant's site Checkout page");                   
                       }
            break;
        }

//muhestores
function muhestores() {
    let count = localStorage.getItem("cartCount");
    console.log(count);
    var pName = "<b>No products to display, please log in to a merchant site<br><br>Or checkout if you have items in your cart and ready to checkout</b>";
    var nItems = "0";
    var pColor = "" + n;
    var pSize = "" + n;
    var pQuty = "0" + n;
    var pPrice = "£0.00" + n;
    var total = "£0.00";

    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ items: nItems });
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ price: pPrice });
    chrome.runtime.sendMessage({ subtotal: total });

}

//asos
function asos() {
//headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";
    
    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//items
var quantity = document.getElementsByClassName("bag-header");
for (var i = 0; i < quantity.length; i++) {
    number += parseInt(quantity[i].textContent);
}
nItems =number;
chrome.runtime.sendMessage({items:nItems});

//products
    var productName = document.getElementsByClassName("item-description");
for (var i = 0; i < productName.length; i++) {
    pName +=  productName[i].textContent +n ; 
    }
    chrome.runtime.sendMessage({ product: pName });

//colour
var productColor = document.getElementsByClassName("item-colour");
  for (var i = 0; i < productColor.length; i++) {
      pColor += productColor[i].textContent + n;
    }
    chrome.runtime.sendMessage({ color: pColor }); 

//size
var productSize = document.getElementsByClassName("item-size");
   for (var i = 0; i < productSize.length; i++) {	
       pSize += productSize[i].textContent+ n ;
    }
   chrome.runtime.sendMessage({ size: pSize });

//quantity
    var productQuantity = document.getElementsByClassName("item-quantity");
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].lastChild.innerText + n;  
    }
   chrome.runtime.sendMessage({ quantity: pQuty });
    
  //price
    var productPrice = document.getElementsByClassName("item-price");
   for (var i = 0; i < productName.length; i++) {
       pPrice += productPrice[i].textContent+ n;       
    }
    chrome.runtime.sendMessage({ price: pPrice });

// total
    var subtotal = document.getElementsByClassName("bag-totals-right");
    total = subtotal[2].textContent;

   chrome.runtime.sendMessage({subtotal:total});
}

//boohoo
function boohoo() {
//headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//number of items 
    var quantity = document.getElementsByClassName("b-minicart_product-qty");
for (var i = 0; i < quantity.length; i++) {
    number += (quantity[i].textContent).match(/\d+/);
	sum +=parseInt(number[i]);
 }
nItems =sum;
chrome.runtime.sendMessage({items:nItems});

//products
    var productName = document.getElementsByClassName("b-minicart_product-name");
for (var i = 0; i < productName.length; i++) {
   pName += productName[i].innerText + n;
}
chrome.runtime.sendMessage({product:pName});

//colour

    var productColor = document.getElementsByClassName("b-minicart_product-attribute_value")
    console.log(productColor);
for (var i = 0; i < productColor.length; i++) {
	
	 if(i % 2 === 0) { // index is even
       pColor += productColor[i].innerText + n;
	 } 
}
chrome.runtime.sendMessage({color:pColor});

//size
    var productSize = document.getElementsByClassName("b-minicart_product-attribute_value");
for (var i = 0; i < productSize.length; i++) {
	
	 if(i % 2 === 1) { // index is odd
       pSize += productSize[i].innerText + n;
	 } 
}
chrome.runtime.sendMessage({size:pSize});

//quantity
var productQuantity = document.getElementsByClassName("b-minicart_product-qty_value");
for (var i = 0; i < productQuantity.length; i++) {
   pQuty += productQuantity[i].textContent +n;
}
chrome.runtime.sendMessage({quantity:pQuty});

//price
    var price = document.querySelectorAll(".b-minicart_product-price_total div:last-child div:last-child");

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
        setTimeout(() => clarks(), 1000)
    } else { 

    delivery[2].click();
    setTimeout(() => clarks(), 1000)
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
    var productQuantity = document.querySelectorAll("div.sc-dce53de4-6.fIhmas > table:nth-child(2) > tbody > tr:nth-child(2) > td span:nth-child(2)");
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
   
   
   //total 
    var subtotal = document.getElementsByClassName("sc-7225d7ef-3 hDLjTw");
    total = subtotal[0].innerText;
    console.log(subtotal);

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
   var subtotal = document.getElementsByClassName("summaryTotalAmount");

     total = subtotal[0].textContent;
     chrome.runtime.sendMessage({subtotal:total});
}

//sportsDirectPersonalisation
function sportsDirectPersonalisation() {
    //title

    page = "sportsdirect/Personalisation";
    chrome.runtime.sendMessage({ title: page });
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
    var productName = document.getElementsByClassName("product-line-card__description-name");
    for (var i = 1; i < productName.length / 2; i++) {
        pName += productName[i].textContent + n;

    }
    chrome.runtime.sendMessage({ product: pName });

    //colour
    var productColor = document.getElementsByClassName("product-line-card__description-colour");
    for (var i = 1; i < productColor.length / 2; i++) {

        pColor += productColor[i].lastChild.textContent + n;
    }
    chrome.runtime.sendMessage({ color: pColor });
    //size
    var productSize = document.querySelectorAll('select[data-product-line-item-size-options] option[selected="selected"]');
    console.log(productSize);
    for (var i = 0; i < productSize.length; i++) {

        pSize += productSize[i].textContent + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //quantity & number of items
    var productQuantity = document.querySelectorAll('div.product-line-card__quantity > input');
    var totalItems = [];

    for (var i = 1; i < productQuantity.length / 2; i++) {
        pQuty += productQuantity[i].value + n;
        totalItems.push(parseInt(productQuantity[i].value, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    chrome.runtime.sendMessage({ items: nItems });
    chrome.runtime.sendMessage({ quantity: pQuty });

    //price
    var productPrice = document.getElementsByClassName("product-line-card__description-subtotal-amount");

    for (var i = 1; i < productPrice.length / 2; i++) {
        pPrice += productPrice[i].textContent + n;
    }

    chrome.runtime.sendMessage({ price: pPrice });
    var subtotal = document.getElementById("TotalValue");
    var personalisation = document.getElementsByClassName("printess-container is-personalised hide-breakdown-costs");


    deliveryTotal = [4.99];
    console.log(subtotal);

    stringTotal = subtotal.innerText.slice(1);

    for (var i = 0; i < personalisation.length / 2; i++) {

        perso += personalisation[i].childNodes[1].textContent + "," + personalisation[i].childNodes[2].innerText + "<br>";
    }

    pPerso = "<b>Personalisation:</b><br>" + perso +"<br>Subtotal: <b>" + subtotal.innerText + "</b><br>SPORTSDIRECT Standard Delivery: <b>£4.99</b>";
    deliveryTotal.push(parseFloat(stringTotal));

    sum = deliveryTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total = "£" + sum.toFixed(2);

    chrome.runtime.sendMessage({ personalisation: pPerso });
    chrome.runtime.sendMessage({ subtotal: total });

}

//newlook
function newLook() {
    //Delivery
    var deliverybutton = document.getElementsByClassName("tab-button__primary ng-scope");
    deliverybutton[0].click();
    setTimeout(() => newLookBasket(), 2000)
}

//newLook basket
function newLookBasket() { 

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
       var productName = document.getElementsByClassName("order__summary-product-title ng-binding");
   for (var i = 0; i < productName.length; i++) {
      pName += productName[i].textContent + n;
   }
   chrome.runtime.sendMessage({product:pName});

   //Colour 
       var productColor = document.getElementsByClassName("order__summary-product-colour-span ng-binding");
      for (var i = 0; i < productColor.length; i++){ 
          pColor += productColor[i].innerText.slice(8) + n;
      }

      chrome.runtime.sendMessage({color:pColor});
  
    //size
       var productSize = document.getElementsByClassName("order__summary-product-size-span ng-binding"); 
      for (var i = 0; i < productSize.length; i++) {
        pSize += productSize[i].innerText.slice(6) +n;
      }
       chrome.runtime.sendMessage({ size: pSize });

       //quantity & number of items
       var productQuantity = document.getElementsByClassName("order__summary-product-quantity-span ng-binding");
       var totalItems = [];
       for (var i = 0; i < productQuantity.length; i++) {
           pQuty += productQuantity[i].innerText.slice(9) + n;
           totalItems.push(parseInt(productQuantity[i].innerText.slice(9), 10));
       }
       nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       chrome.runtime.sendMessage({ quantity: pQuty });
       chrome.runtime.sendMessage({ items: nItems });

       //price
       var productPrice = document.getElementsByClassName("order__summary-product-price ng-binding");
       for (var i = 0; i < productPrice.length; i++) {
           pPrice += productPrice[i].textContent + n;
       }
       chrome.runtime.sendMessage({ price: pPrice });


    //total
       var subtotal = document.querySelectorAll("#payment-details-wrapper > div:nth-child(5) > div.checkout__total-section.tabNotSelected > div.newSummaryFlow > div.order-summary-total.d_flex > p");
       total = subtotal[0].textContent;

      chrome.runtime.sendMessage({subtotal:total});

}

//tmLewin
function tmLewin() {

    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //products
   // var productName = document.querySelectorAll("div._6zbcq51z._6zbcq51y._1fragem28._1fragemnn._6zbcq51u._6zbcq51r._1fragem6t._6zbcq51p._6zbcq51n._1fragemmh._6zbcq51w._1fragemnq._16s97g741 > div > p");
    var productName = document.querySelectorAll('[class*="_16s97g741"] > div > p'); 

    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].innerText + n;
        pColor += "-" + n;
    }
   
    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ color: pColor });

    //size
    //var productSize = document.querySelectorAll("div._6zbcq51z._6zbcq51y._1fragem28._1fragemnn._6zbcq51u._6zbcq51r._1fragem6t._6zbcq51p._6zbcq51n._1fragemmh._6zbcq51w._1fragemnq._16s97g741 > div > div");
    var productSize = document.querySelectorAll('[class*="_16s97g741"] > div > div');

    for (var i = 0; i < productSize.length; i++) {
        pSize += productSize[i].innerText + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //quantity
    //var productQuantity = document.querySelectorAll("div._6zbcq51z._6zbcq51y._1fragem28._1fragemnn._6zbcq51t._6zbcq51q._1fragem78._6zbcq51o > div > div > div > div > div > div > span:nth-child(2)");
    var productQuantity = document.querySelectorAll('[class*="_6zbcq51o"] > div > div > div > div > div > div > span:nth-child(2)');

    var totalItems = [];
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].innerText + n;
        totalItems.push(parseInt(productQuantity[i].innerText, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //price
    //var productPrice = document.getElementsByClassName("_197l2oft _1fragemnn _1fragemme _1fragem28 _1fragemlj Byb5s");
    var productPrice = document.querySelectorAll('[class*="Byb5s"]');

    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].lastChild.innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    //total
    //var subtotal = document.querySelectorAll("div._1x41w3p1._1x41w3p0._1fragem2s._1fragemmc._1x41w3p2 > div._1x41w3p7 > div > div > strong");
    var subtotal = document.querySelectorAll("div._1x41w3p7 > div > div > strong");

    total = subtotal[0].textContent;
    chrome.runtime.sendMessage({ subtotal: total });
}

//tkMaxx
function tkMaxx() {

    //headers
    var productHeader = "Brand";
    var colourHeader = "Product";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//items
  var quantity = document.getElementsByClassName("checkout-order-details-bagcount");
  nItems = quantity[0].innerText.slice(6,8);
  chrome.runtime.sendMessage({items:nItems});  

//products
  var productName = document.getElementsByClassName("checkout-order-details-items-list-brand");
  for (var i = 0; i < productName.length; i++) {
   pName += productName[i].textContent + n;
   }
   chrome.runtime.sendMessage({product:pName});
 
//colour
    var productColour = document.getElementsByClassName("checkout-order-details-items-list-prod");
    for (var i = 0; i < productColour.length; i++) {
        pColor += productColour[i].innerText + n;
    }
    chrome.runtime.sendMessage({ color: pColor });

//size
 var productSize = document.getElementsByClassName("checkout-order-details-items-list-size");
    for (var i = 0; i < productSize.length; i++) {
        pSize += productSize[i].innerText.slice(6) + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

//quantity
var productQuantity = document.getElementsByClassName("qty checkout-order-details-items-list-quantity");
for (var i = 0; i < productQuantity.length; i++) {
  pQuty += productQuantity[i].innerText.slice(0,2) +n;
}
chrome.runtime.sendMessage({quantity:pQuty});

//price
var productPrice = document.getElementsByClassName("order-summary-price"); 
for (var i = 0; i < productPrice.length; i++) {
    pPrice += productPrice[i].innerText +n;
    }
    console.log(productPrice);
 chrome.runtime.sendMessage({price:pPrice});

//total
 var subtotal = document.getElementsByClassName("order-summary-total-amount");
  total = subtotal[0].textContent;
    chrome.runtime.sendMessage({subtotal:total});
    
}

//asda
function asda() {

    //headers
    var productHeader = "Product description";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //Number of items
    var quantity = document.getElementsByClassName("asda-badge asda-badge--primary menu-trolley__total-items-value");
    for (var i = 0; i < quantity.length; i++) {
        nItems = quantity[i].textContent;
    }
    chrome.runtime.sendMessage({ items: nItems });


    //Products
    var productName = document.querySelectorAll("a[data-auto-id='linkTitle']");
    console.log(productName);
    var products;
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].textContent + n;
        pColor += "-" + n;
        pSize += "-" + n;
    }

    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });

    //Quantity
    var productQuantity = document.getElementsByClassName("manual-input");
    var Quty;
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].value + n;
    }
    chrome.runtime.sendMessage({ quantity: pQuty });


    //Price
    var productPrice = document.getElementsByClassName("ingredient__price");
    console.log(productPrice);
    var price;
    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    // Total +& Delivery
    var subtotal = document.getElementsByClassName("menu-trolley__value");
    pPerso = "Subtotal:  <b>"+subtotal[0].innerText +"</b><br>ASDA Standard Delivery: <b>£5.00</b>";
    deliveryTotal = [5.00];
    

    stringTotal = subtotal[0].innerText.slice(1);
  
    deliveryTotal.push(parseFloat(stringTotal));
    sum = deliveryTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total = "£" + sum.toFixed(2);

    chrome.runtime.sendMessage({ personalisation: pPerso });
    chrome.runtime.sendMessage({ subtotal: total });

}

//george
function george() {
    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    // Products
    var productName = document.getElementsByClassName("product-name");
    for (var i = 0; i < productName.length / 2; i++) {
        pName += productName[i].textContent + n;

    }
    chrome.runtime.sendMessage({ product: pName });

    //Colour & size
    var productWrapper = document.getElementsByClassName("product-info was-now-pricing");

    for (var i = 0; i < productWrapper.length / 2; i++) {
        if (productWrapper[i].childNodes.length == 2) {
            pColor += "-" + n;
            pSize += "-" + n;
        }
        if (productWrapper[i].childNodes.length == 3) {

            pColor += productWrapper[i].childNodes[1].firstChild.lastChild.innerText + n;
            pSize += productWrapper[i].childNodes[1].lastChild.lastChild.innerText + n;

        }
    }  
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });
    

    //Quantity & number of items
    var productQuantity = document.querySelectorAll("div.product-quantity > span.attribute-value");
    for (var i = 0; i < productQuantity.length / 2; i++) {
        pQuty += productQuantity[i].textContent + n;
        totalItems.push(parseInt(productQuantity[i].textContent, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //price
    var productPrice = document.querySelectorAll("div.price-container > div");
    var test = document.getElementsByClassName("product__price-value bold")
    for (var i = 0; i < productPrice.length / 2; i++) {
        if (productPrice[i].childNodes[1]) {

            pPrice += productPrice[i].childNodes[1].lastChild.textContent + n;
        } else {
            pPrice += productPrice[i].textContent + n;
        }
    }
    console.log(test);
    chrome.runtime.sendMessage({ price: pPrice });

    // total
    var subtotal = document.querySelectorAll("div.total-section > div.basket-total.flex-grid.flex-grid--stretch.flex-grid--wrap.bold > span.total-amount");
    var total = subtotal[0].textContent;
    chrome.runtime.sendMessage({ subtotal: total });
}

//Hawes & Curtis
function HawesCurtis() {

    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });
   
    //products & colour
    var productName = document.getElementsByClassName("name");
    console.log(productName);
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].textContent + n;
        pColor += "-" + n;
    }
    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ color: pColor });
 
    //Size
    var productSize = document.getElementsByClassName("size");
    for (var i = 0; i < productSize.length; i++) {
        pSize += productSize[i].innerText.substring(6) + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //Quantity & number of Items
    var productQuantity = document.getElementsByClassName("quantity");
    var totalItems = [];

    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].innerText.slice(5) + n;
        totalItems.push(parseInt(productQuantity[i].innerText.slice(5), 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //Price
    var productPrice = document.getElementsByClassName("retail-price");
    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    //Total
    var subtotal = document.getElementsByClassName("grand-total");
    console.log(subtotal);
    for (var i = 0; i < subtotal.length; i++) {
        total = subtotal[i].textContent;
    }
    chrome.runtime.sendMessage({ subtotal: total });
}

//houseofFrasier
function houseOfFrasier() {

    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//cart products 
var productName = document.getElementsByClassName("summaryListTitle");
for (var i = 0; i < productName.length/2; i++) {
   pName += productName[i].textContent + n;
}
chrome.runtime.sendMessage({product:pName});

 //Colour
    var productColor = document.getElementsByClassName("summaryListProductCol");
 for (var i = 0; i < productColor.length/2; i++) {
     pColor += productColor[i].innerText.substring(7) + n;
    }
  chrome.runtime.sendMessage({color:pColor});

//Size
var productSize = document.getElementsByClassName("summaryListProductSize");
for (var i = 0; i < productSize.length/2; i++) {
   pSize += productSize[i].innerText.substring(5)+ n;
}
chrome.runtime.sendMessage({size:pSize});

//Quantity & Number of items
    var productQuantity = document.getElementsByClassName("summaryListProductQty");
    for (var i = 0; i < productQuantity.length / 2; i++) {

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
 chrome.runtime.sendMessage({price:pPrice});
//Total
var subtotal = document.getElementsByClassName("summaryTotalAmount");
 total = subtotal[0].textContent;
   chrome.runtime.sendMessage({subtotal:total});
}

//zalando
function zalando() {
    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Cart products
    var productName = document.getElementsByClassName("Zhr-fS hD5J5m");
  for (var i = 0; i < productName.length; i++) {
   pName += productName[i].innerText + n;
   }  
   chrome.runtime.sendMessage({product:pName});

//Colour
    var productColor = document.getElementsByClassName("sDq_FX lystZ1 FxZV-M Yb63TQ q84f1m");
    for (var i = 0; i < productColor.length; i++) {  
    pColor += productColor[i].textContent.substring(8) + n;
    pSize += productColor[i].nextSibling.textContent.slice(5)+ n;
    }
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });

 //Quantity & number of items
    var productQuantity = document.getElementsByClassName("sDq_FX lystZ1 FxZV-M HlZ_Tf q84f1m");
     for (var i = 0; i < productQuantity.length; i++) {
         pQuty += productQuantity[i].textContent.slice(10) + n;
         totalItems.push(parseInt(productQuantity[i].textContent.slice(10), 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

//Price
    var productPrice = document.querySelectorAll("div.checkout-confirm-product-card > header > section "); 
    for (var i = 0; i < productPrice.length; i++) {
    pPrice += productPrice[i].firstChild.textContent +n;
    }
    chrome.runtime.sendMessage({price:pPrice});
 //Total
    var subtotal = document.getElementsByClassName("_0xLoFW EJ4MLB qMOFyE _9bx9k9 _4qpPat ykb2t2 Z1Xqqm");
    console.log(subtotal)
   total = subtotal[0].lastChild.textContent;
 
   chrome.runtime.sendMessage({subtotal:total});
 }

//boots 
function boots() {

//headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Items
   var quantity = document.getElementsByClassName("oct-text oct-text--light oct-text--size_s oct-order-summary__header-subtitle");
     result = quantity[0].textContent;
     nItems = result.substring(1,2);
     chrome.runtime.sendMessage({items:nItems});  
     
//Products
   var productName = document.getElementsByClassName("oct-text oct-text--standard oct-text--size_s oct-product-details__name");
   for (var i = 0; i < productName.length; i++) {
      pName += productName[i].textContent + n;
   }
   chrome.runtime.sendMessage({product:pName});
   pColor =" " +n;
   pSize  =" " + n;
   chrome.runtime.sendMessage({color:pColor});
   chrome.runtime.sendMessage({size:pSize});

//Quantity
var productQuantity = document.getElementsByClassName("oct-text oct-text--bold oct-text--size_xs oct-product-details__property-value");
for (var i = 0; i < productQuantity.length; i++) {
  pQuty += productQuantity[i].textContent +n;
}
chrome.runtime.sendMessage({quantity:pQuty});

//Price
var productPrice = document.getElementsByClassName("oct-text oct-text--bold oct-text--size_m oct-product-details__price"); 
for (var i = 0; i < productPrice.length; i++) {
    pPrice += productPrice[i].textContent +n;
 }
 chrome.runtime.sendMessage({price:pPrice});

 //Total
var subtotal = document.getElementsByClassName("oct-text oct-text--bold oct-text--size_m");
for (var i = 0; i < subtotal.length; i++) {
 total = subtotal[i].textContent;
}
chrome.runtime.sendMessage({subtotal:total});
}

//superDrug
function superDrug() {
    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //Products
    var productName = document.getElementsByClassName("checkout-item__name");
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].textContent + n;
        pColor += "-" + n;
        pSize += "-" + n;
    }
    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });

    //Quantity & number of items
    var productQuantity = document.getElementsByClassName("info-container info-container__quantity");
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].textContent + n;
        totalItems.push(parseInt(productQuantity[i].textContent, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //Price
    var productPrice = document.getElementsByClassName("price");
    console.log(productPrice);
    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    //total
    var subtotal = document.getElementsByClassName("total");
    console.log(subtotal);
    for (var i = 0; i < subtotal.length; i++) {
        total = subtotal[i].lastChild.textContent;
    }
    chrome.runtime.sendMessage({ subtotal: total });
}

//currys
function currys() {
//headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Product
    var productName = document.querySelectorAll("div.line-item-header > div > span");
    for (var i = 0; i < productName.length/4; i++) {  
        pName += productName[i].innerText + n;
        pColor += "-" + n;
        pSize += "-" + n;
    } 
   console.log(productName);
   chrome.runtime.sendMessage({product:pName}); 
   chrome.runtime.sendMessage({color:pColor});
   chrome.runtime.sendMessage({size:pSize});

//Quantity & number of items
    var productQuantity = document.getElementsByClassName("pricing qty-card-quantity-count font-size-14");
    console.log(productQuantity);
 for (var i = 0; i < productQuantity.length/3; i++) {  
     pQuty += productQuantity[i].textContent + n;
     totalItems.push(parseInt(productQuantity[i].textContent, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

//Price 
    var productPrice = document.querySelectorAll("div.col-4.line-item-total-price.p-0 > div > div");
    console.log(productPrice);
     for (var i = 0; i < productPrice.length/3; i++) {
         pPrice += productPrice[i].innerText + n;
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

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

// send the number of items as a chrome message
  var quantity = document.getElementsByClassName("nav-items-total");
  nItems = quantity[0].textContent;
  chrome.runtime.sendMessage({items:nItems}); 

  //send the cart products as chrome messages
 var productName = document.getElementsByClassName("item__name");
  
  for (var i = 0; i < productName.length; i++) {  
     pName += productName[i].textContent + n;
    } 
    chrome.runtime.sendMessage({product:pName}); 
   
 //send the product color as a chrome message
 var productColor = document.getElementsByClassName("item__code");
 for (var i = 0; i < productColor.length; i++) {
     pColor += productColor[i].textContent + n;
     pSize += "-" + n;
 }
  chrome.runtime.sendMessage({color:pColor}); 
  chrome.runtime.sendMessage({size:pSize});

//send the item quantity as chrome message
var productQuantity = document.getElementsByName("quantity");
console.log(productQuantity);
for (var i = 0; i < productQuantity.length; i++) {
   if (i % 2 == 0){
  pQuty += productQuantity[i].value +n;
   }
}
chrome.runtime.sendMessage({quantity:pQuty});

//send the product price as chrome message
var productPrice = document.getElementsByClassName("item__total js-item-total hidden-xs hidden-sm"); 
for (var i = 0; i < productPrice.length; i++) {
    pPrice += productPrice[i].textContent +n;
 }
 chrome.runtime.sendMessage({price:pPrice});

 // send the total a chrome message
 var subtotal = document.getElementsByClassName("col-xs-6 cart-totals-right text-right grand-total");
 for (var i = 0; i < subtotal.length; i++) {
  total= subtotal[i].innerText;
 }
 chrome.runtime.sendMessage({subtotal:total});

}

//toyshop Checkout
function toyShopCheckout() {

    //headers
    var productHeader = "Product";
    var colourHeader = "Product No.";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

    //Products
    var productName = document.getElementsByClassName("name");

    for (var i = 0; i < productName.length/3; i++) {
        pName += productName[i].textContent + n;
    }
    chrome.runtime.sendMessage({ product: pName });

    //Product number
    var productColor = document.getElementsByClassName("productSKU");
    for (var i = 0; i < productColor.length/3; i++) {
        pColor += productColor[i].textContent + n;
        pSize += "-" + n;
    }
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });

    //quantity & number of items
    var productQuantity = document.getElementsByClassName("qty");
    console.log(productQuantity);
    for (var i = 0; i < productQuantity.length/3; i++) {
        pQuty += productQuantity[i].innerText.slice(5) + n;
        totalItems.push(parseInt(productQuantity[i].innerText.slice(5), 10));
    }
    nItems =totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });

    //price
    var productPrice = document.getElementsByClassName("itemPrice");
    console.log(productPrice);
    for (var i = 0; i < productPrice.length/3; i++) {
        pPrice += productPrice[i].lastChild.textContent.slice(10) + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    // total
    var subtotal = document.getElementsByClassName("col-xs-6 text-right");
    for (var i = 0; i < subtotal.length; i++) {
        total = subtotal[i].innerText;
    }
    chrome.runtime.sendMessage({ subtotal: total });
}

//argos
function argos(){
    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Number of items
    var quantity = document.getElementsByClassName("LQbCV");
    console.log(quantity);
nItems = quantity[1].textContent;
chrome.runtime.sendMessage({items:nItems}); 
   
 //Products
 var productName = document.querySelectorAll("[data-e2e ='product-name']");
  console.log(productName);
  for (var i = 0; i < productName.length; i++) {  
     if (i % 2 == 0){
         pName += productName[i].textContent + n;
         pColor += "-" + n;
         pSize += "-" + n;
  }
    } 
   chrome.runtime.sendMessage({product:pName}); 
   chrome.runtime.sendMessage({color:pColor});
   chrome.runtime.sendMessage({size:pSize});

//Quantity
var productQuantity = document.querySelectorAll("select[data-e2e =product-quantity]");
console.log(productQuantity);
for (var i = 0; i < productQuantity.length; i++) {
 pQuty += productQuantity[i].value +n; 
}
chrome.runtime.sendMessage({quantity:pQuty});

//Price
var productPrice = document.querySelectorAll("span[data-e2e ='product-line-price']"); 
for (var i = 0; i < productPrice.length; i++) {
    pPrice += productPrice[i].textContent +n;
 }
 chrome.runtime.sendMessage({price:pPrice});

 //Total & delivery
    var subtotal = document.querySelectorAll("div[data-test='basket-total-price']");
   
    deliveryTotal = [4.95];
    console.log(subtotal);
 
    stringTotal = subtotal[0].innerText.slice(1);
    pPerso = "Subtotal: <b>" + subtotal[0].innerText +"</b><br>ARGOS Standard Delivery: <b>£4.95</b>";
    deliveryTotal.push(parseFloat(stringTotal));

    sum = deliveryTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    total = "£" + sum.toFixed(2);

    chrome.runtime.sendMessage({ personalisation: pPerso }); 
    chrome.runtime.sendMessage({subtotal:total});

}

//chichi
function chichi() {
    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Products
    var productName = document.getElementsByClassName("sl-textEllipsis2");

    for (var i = 0; i < productName.length/2; i++) {  
        pName += productName[i].textContent + n;
        pColor += " - " + n;
    } 
    chrome.runtime.sendMessage({product:pName}); 
    chrome.runtime.sendMessage({color:pColor});

 //Size
    var productSize = document.getElementsByClassName("trade_sku-item_skuProperties");
    console.log(productSize);
   for (var i = 0; i < productSize.length/2; i++) {
    pSize += productSize[i].innerText+ n;
   }
   chrome.runtime.sendMessage({size:pSize}); 

 //Quantity & number of Items
    var productQuantity = document.getElementsByClassName("trade_sku-item_skuNum notranslate");
    console.log(productQuantity);
    for (var i = 0; i < productQuantity.length/2; i++) {
        pQuty += productQuantity[i].innerText +n;
        totalItems.push(parseInt(productQuantity[i].innerText, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({items:nItems}); 
    chrome.runtime.sendMessage({quantity:pQuty});

//Price
    var productPrice = document.getElementsByClassName("trade_sku-item_skuPrice sl-textEllipsis");
for (var i = 0; i < productPrice.length/2; i++) {
    pPrice += productPrice[i].textContent +n;
 }
 chrome.runtime.sendMessage({price:pPrice});

// send the total a chrome message
    var subtotal = document.getElementsByClassName("trade_summations__amount-price");
    total= subtotal[18].textContent;
    chrome.runtime.sendMessage({subtotal:total});
 }

//marks&spencers delivery
function MandSDelivery() {
    //delivery
    var delivery = document.getElementsByClassName("clearfix delivery-toggle-header");

    for (var i = 0; i < delivery.length; i++) {
        if (delivery[i].innerText == "Delivery") {
            delivery[i].click();
        }
    }
    setTimeout(() => markAndSpencers(), 500)

}
//marks&spencers
function markAndSpencers() { 
    //headers
    var productHeader = "Product";
    var colourHeader = "Colour";
    var sizeHeader = "Size";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });

//Number of items
    var quantity = document.getElementsByClassName("order-summary__items-count ng-binding");
    nItems = quantity[0].innerText;
   chrome.runtime.sendMessage({items:nItems}); 

//Products
    var productName = document.querySelectorAll("span.product-item__detail.tone--highlight.product-item__title > span");
    console.log(productName);
 for (var i = 0; i < productName.length/2; i++) {  
    pName += productName[i].textContent + n;
   } 
  chrome.runtime.sendMessage({product:pName}); 

//colour & size
    var productColorandSize = document.querySelectorAll("span.product-item__detail.ng-binding.ng-scope");
    console.log(productColorandSize)
    var S ="";
    for (var i = 0; i < productColorandSize.length / 2; i++) {

        if (productColorandSize[i].innerText !== "") {
            pColor += productColorandSize[i].innerText.split(',')[0] + n;
            S += productColorandSize[i].innerText.split(',')[1] + n;
            pSize += S.substring(7);
        }

        if (productColorandSize[i].innerText === "") { 
            pColor +="" + n;
            pSize += "" + n;
        }
    }

    chrome.runtime.sendMessage({color: pColor });  
    chrome.runtime.sendMessage({size:pSize});

//Quantity
  var productQuantity = document.querySelectorAll("span.product-item__qty-section.ng-scope > span.ng-binding");
    console.log(productQuantity);
    for (var i = 0; i < productQuantity.length/2; i++) {
    pQuty += productQuantity[i].innerText +n;
    }
    chrome.runtime.sendMessage({quantity:pQuty});

//Price
    var productPrice = document.querySelectorAll("span.product-item__price-section > span"); 
   for (var i = 0; i < productPrice.length/2; i++) {
    pPrice += productPrice[i].textContent +n;
   }
    chrome.runtime.sendMessage({ price: pPrice });

 // Total
    var subtotal = document.getElementsByClassName("side-order-summ__total-section side-order-summ__amount ng-binding");

    total = subtotal[0].innerText;

    chrome.runtime.sendMessage({subtotal:total});
    //setTimeout(() => chrome.runtime.sendMessage({ subtotal: total }), 4000)
}
//zara
function zara() {
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
    var productName = document.getElementsByClassName("shop-cart-item-header__description--product-name");
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].innerText + n;
    }
    console.log(pName);
    chrome.runtime.sendMessage({ product: pName });

    //colour
    var productColor = document.getElementsByClassName("shop-cart-item-details-base__color");
    var ref = document.getElementsByClassName("shop-cart-item-details-base__reference");
    for (var i = 0; i < productColor.length; i++) {
        pColor += productColor[i].innerText + n;
    }
    chrome.runtime.sendMessage({ color: pColor });

    //size
    var productSize = document.getElementsByClassName("shop-cart-item-details-base__size");
    for (var i = 0; i < productSize.length; i++) {
        pSize += productSize[i].innerText + n;
    }
    chrome.runtime.sendMessage({ size: pSize });

    //Quantity & number of items
    var productQuantity = document.querySelectorAll("div.zds-quantity-selector > div");
    console.log(productQuantity);
    for (var i = 0; i < productQuantity.length; i++) {
        pQuty += productQuantity[i].innerText + n;
        totalItems.push(parseInt(productQuantity[i].innerText, 10));
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ items: nItems });
    chrome.runtime.sendMessage({ quantity: pQuty });

    //price
    var productPrice = document.getElementsByClassName("shop-cart-item-pricing");
    console.log(productPrice);
    for (var i = 0; i < productPrice.length; i++) {
        pPrice += productPrice[i].innerText + n;
    }
    chrome.runtime.sendMessage({ price: pPrice });

    // Total & delivery
    var subtotal = document.getElementsByClassName("order-totals-table-total__amount");
    var stringTotal;
    for (var i = 0; i < subtotal.length; i++) {
        var sub = subtotal[i].innerText;
    }
    stringTotal = sub.substring(0, 6);
    total = "£" + sub.substring(0, 6);

    if (parseFloat(stringTotal) < 50.00) {
        pPerso = "Subtotal: <b>" + total + "</b><br>ZARA Standard Delivery: <b> £3.95</b>";
        chrome.runtime.sendMessage({ personalisation: pPerso });
        total = "£" + (parseFloat(stringTotal) + 3.95);
        chrome.runtime.sendMessage({ subtotal: total });
    } else {
        chrome.runtime.sendMessage({ subtotal: total });
    }
    
}
//matalan delivery
function matalanDelivery() {
    var delivery = document.getElementById("SelectableContainer--residential");
    if (!!delivery) {
        delivery.click();
        setTimeout(() => matalan(), 1000);
    } else {
        matalan()
    }
}
//matalan
function matalan() {
    //headers
    var productHeader = "Product";
    var colourHeader = "";
    var sizeHeader = "";

    chrome.runtime.sendMessage({ productDescription: productHeader });
    chrome.runtime.sendMessage({ productColour: colourHeader });
    chrome.runtime.sendMessage({ productSize: sizeHeader });
    chrome.runtime.sendMessage({ productQuty: QtyHeader });
    chrome.runtime.sendMessage({ productPrice: priceHeader });
    

    //products, colour ,size & number of Items
    var productName = document.querySelectorAll("span[data-test ='OrderSummaryBasketItem__productName']");
    for (var i = 0; i < productName.length; i++) {
        pName += productName[i].textContent + n;
        pColor += "-" + n;
        pSize += "-" + n;
        pQuty += productName[i].nextSibling.innerText.slice(10) + n;
        totalItems.push(parseInt(productName[i].nextSibling.innerText.slice(10), 10))
    }
    nItems = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    chrome.runtime.sendMessage({ product: pName });
    chrome.runtime.sendMessage({ color: pColor });
    chrome.runtime.sendMessage({ size: pSize });
    chrome.runtime.sendMessage({ quantity: pQuty });
    chrome.runtime.sendMessage({ items: nItems });
   
    //price
    var productPrice = document.querySelectorAll("span[data-test ='OrderSummaryBasketItem__price']");
    for (var i = 0; i < productPrice.length; i++) {

        if (!!productPrice[i].childNodes[0].firstChild) {
            pPrice += productPrice[i].childNodes[0].firstChild.textContent + n;
        } else {
            pPrice += productPrice[i].textContent + n;
        }
    }
       chrome.runtime.sendMessage({ price: pPrice });
    // send the total a chrome message
    var subtotal = document.querySelectorAll("span[data-test ='OrderSummary__totalPrice']");
    total = subtotal[0].textContent;
    chrome.runtime.sendMessage({ subtotal: total });
}





   
  