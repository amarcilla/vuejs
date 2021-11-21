// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;



// Exercise 1
/* En el refactoring l'ocultem
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    var total = 0;
    //??? No entenc pq hem de fer el loop????

    //Afegim el producte escollit a la carList
    cartList.push(products[id - 1]);

    // products.forEach(function (element, id, cartList) {
    //      //total += array[index] * index;
    //      //alert(cartList[id].name);
    // });
}
*/

// Exercise 2
function cleanCart() {

    //Abans de esborrar, revisem tots els elements que hi ha a la CardList
    for (var i = 0; i < cartList.length; i++) {
        console.log(cartList[i].name);
    }

    // Eliminem element per element'
    while (cartList.length > 0) {
        cartList.pop();
    }

    console.log("llista esborrada");
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    var subtotals = {
        grocery: 0,
        beauty: 0,
        clothes: 0
    };

    // calculem els subtotals depenent del tipus de compra
    for (var i = 0; i < cartList.length; i++) {
        switch (cartList[i].type) {
            case "grocery":
                subtotals["grocery"] = subtotals["grocery"] + cartList[i].price;
                break;
            case "beauty":
                subtotals["beauty"] = subtotals["beauty"] + cartList[i].price;
                break;
            case "clothes":
                subtotals["clothes"] = subtotals["clothes"] + cartList[i].price;
                break;
            default:
                console.log("Hi ha hagut un error");
        }
    }

    console.log("grocery: " + subtotals["grocery"]);
    console.log("beauty: " + subtotals["beauty"]);
    console.log("clothes: " + subtotals["clothes"]);

}

// Exercise 4
function calculateTotal() {
    var total = 0;
    // Calculate total price of the cart either using the "cartList" array
    for (var i = 0; i < cartList.length; i++) {
        total = total + cartList[i].price
    }
    console.log("Total:" + total);

}

// Exercise 5
/* En el refactoring l'ocultem
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
     for (var i = 0; i < cartList.length; i++) {
        const elemento = cartList[i];
        
        // amb l'include busquem l'element a la cart.
        if (!cart.includes(cartList[i])) {
            cart.push(elemento);            
            // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
            cart[cart.length-1].quantity = 1;
            cart[cart.length-1].subtotal = cartList[i].price;            
        } else{        
            // el findIndex el fem servir pq ens torni l'id del objecte trobat.
            // No ho he sabut fer amb el vanilla javascript 
            objIndex = cart.findIndex((obj => obj.id == cartList[i].id));
            cart[objIndex].quantity = cart[objIndex].quantity + 1;
            cart[objIndex].subtotal = cart[objIndex].subtotal + cartList[i].price;
        }
    }

    console.log ( "validem Cart");    
     for (var i = 0; i < cart.length; i++) {
         console.log(cartList[i].name);
     }
}
*/

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    /* Per a ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.
    Per a això, el client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce:    
    - Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros.    
    - En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3.            
    En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep el array cart, modificant el camp subtotalWithDiscount en cas que es s'apliqui promoció. D'aquesta manera les promocions apareixeran per producte, no sols en els subtotales!
    */

    //Generem la Cart sense repetits
    /* En el refactoring l'ocultem
    generateCart();
    */

    for (var i = 0; i < cart.length; i++) {
        /* Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros. */
        if ((cart[i].id == 1) && (cart[i].quantity >= 3)) {
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            console.log("ha comprat 3 o més ampolles d'oli. Afegir descompte");
        }
        /* En comprar-se 10 o més mescles per a fer pastís, el seu preu es rebaixa a 2/3. */
        if ((cart[i].id == 3) && (cart[i].quantity >= 10)) {
            cart[i].subtotalWithDiscount = cart[i].quantity * ((cart[i].price) * 2) / 3;
            console.log("ha comprat 10 o més mescles de pastis. Afegir descompte");
        }
    }
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    // amb l'include busquem l'element a la cart.
    if (!cart.includes(cart[id])) {
        //Si no està a la cart, l'afegim
        // no podem agafar la i, pq sinó se'ns desborda .. agafem l'ultim element.
        cart.push(products[id - 1]);        
        cart[cart.length - 1].quantity = 1;
        cart[cart.length - 1].subtotal = products[id].price;
    } else {
        // Si està a la cart, actualitzem
        // El findIndex el fem servir pq ens torni l'id del objecte trobat. No ho he sabut fer amb el vanilla javascript 
        objIndex = cart.findIndex((obj => obj.id == cart[id].id));
        cart[objIndex].quantity = cart[objIndex].quantity + 1;
        cart[objIndex].subtotal = cart[objIndex].subtotal + cart[id].price;
    }

    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart();

}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
