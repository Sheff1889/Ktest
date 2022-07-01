


/*  function getParameter ( parameterName) {
  let parameters = new URLSearchParams ( window.location.search);
  return parameters.get( parameterName);
} */
// in console write: getParameter('id');
// in console write: getParameter('id');



const idProduct = new URL(window.location.href).searchParams.get("id");
console.log(idProduct)

//getting the product elements
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");



// call function
getProductArticle();

//Displaying the items on the product page
async function getProductArticle() {
  //returns a promise
  await fetch("http://localhost:3000/api/products/" + idProduct)
  // add .then to get the data out of the promise +responds from the API
 .then(response =>  {
  // convert the response into JSON, that returns another promise
  return response.json()
 })
 // get the data(JSON from the API) from the URL/idProducts
 .then(product => {
  //console.log(product)
  title.innerHTML = `<h1>${product.name}</h1>`;
  price.innerHTML = `${product.price}`;
  description.innerHTML = `${product.description}`;
  imgProduct.innerHTML=`<img src="${product.imageUrl}" alt="${product.altTxt}">`
  img.setAttribute("src", product.imageUrl);
  img.setAttribute("alt", product.altTxt);


     for (let i=0; i < product.colors.length; i++) {
         var color = product.colors[i]
        colors.innerHTML += `<option value="${color}">${color}</option> `
     }
 })
 // if there is an error
 .catch((error) => {
  console.error(error);
 });
}




// adding an article to the cart
let addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", addToCart);

function addToCart() {

    const colorSelection = document. querySelector("#colors");
    const quantityChoice = document.querySelector("#quantity");

    if (quantityChoice.value > 0 && quantityChoice.value <=100 && quantityChoice.value != 0 && colorSelection.value != 0) {

          // get key (here:cart from the local storage) -> retrieve the data
        if (localStorage.getItem("cart")) {

            // parse cart-string back to an object
            let productCart = JSON.parse(localStorage.getItem("cart"));
            // shows all products in array form - add one after each new one
            console.log(productCart);

            let idSofa = idProduct;
            let colorItem = document.querySelector("#colors").value;
            let quantityItem = document.querySelector("#quantity").value;
            let nameItem = document.querySelector("#title").textContent;

            //returns the value of the first element
             const productFind = productCart.find((element) =>
                  element.idSofa === idProduct &&  element.colorItem === colorItem);

                //SIf the product ordered is already in the basket
               /*  console.log("result find is equivalent to:");
                console.log(productFind); */

                if (productFind) {
                  // logs out the number of articles that were ordered before adding to cart

                  console.log("result find is equivalent to:");
                  console.log(productFind);

                    console.log("Old amount of " + nameItem + " " + productFind.quantityItem);
                    // logs out the number of articels of that order
                    console.log(  quantityItem + " new Sofa(s) added");
                    //  parses the value as a string and returns the first integer
                    let newQuantity = parseInt(quantityItem) + parseInt(productFind.quantityItem);
                    // logs out the new total qty
                    console.log("New quantity " + nameItem + "of: " + newQuantity);
                    productFind.quantityItem = newQuantity;
                    localStorage.setItem("cart", JSON.stringify(productCart));
                    console.log("Cart articles :");
                     // shows all products in array form - add one after each new one
                    console.log(productCart);

                //If the product ordered is not in the basket
                } else {

                    let productCart = JSON.parse(localStorage.getItem("cart"));

                    let idSofa = idProduct;
                    let imgItem = img.src;
                    let altImg = img.alt;
                    let nameItem = document.querySelector("#title").textContent;
                    let colorItem = document.querySelector("#colors").value;
                    let quantityItem = document.querySelector("#quantity").value;
                    
                    let priceItem = document.querySelector("#price").textContent;

                   
                    console.log(nameItem, colorItem, quantityItem + "new Sofas for each", priceItem + " €");

                    let productCartArticle = {
                        idSofa : idProduct,
                        imgItem : imgItem,
                        altImg : altImg,
                        nameItem : nameItem,
                        colorItem : colorItem,
                        quantityItem  : quantityItem,
                        priceItem : priceItem
                    };

                    productCart.push(productCartArticle);

                    let cartInLocalStorage = JSON.stringify(productCart);
                    localStorage.setItem("cart", cartInLocalStorage);

                    alert("Article added to cart!");
                }

        } else {

            let productCart = [];

            let idSofa = idProduct;
            let imgItem = img.src;
            let altImg = img.alt;
            let nameItem = document.querySelector("#title").textContent;
            let colorItem = document.querySelector("#colors").value;
            let quantityItem = document.querySelector("#quantity").value;
            let priceItem = document.querySelector("#price").textContent;


            // when purchasing the first time - console log this
            console.log(nameItem, colorItem, quantityItem, priceItem + " €");

            let productCartArticle = {
                idSofa : idProduct,
                imgItem : imgItem,
                altImg : altImg,
                nameItem : nameItem,
                colorItem : colorItem,
                quantityItem  : quantityItem,
                priceItem : priceItem
            };

            // push to the []
            productCart.push(productCartArticle);



            let cartInLocalStorage = JSON.stringify(productCart);
            //saving the cart data from the product in the local storage
            localStorage.setItem("cart", cartInLocalStorage);


            //localStorage.setItem("cart", JSON.stringify(productCart));

            alert("First article added to cart!");
        }
    }
};




















 
