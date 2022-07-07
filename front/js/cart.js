let productLocalStorage = JSON.parse(localStorage.getItem("cart"));



if (productLocalStorage === null || productLocalStorage == 0) {

   // cart is empty 

} else {

    for (let i=0; i < productLocalStorage.length; i++) {

        // Creation of the "article" tag and insertion in the section
        let productArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute("data-id", productLocalStorage[i].idSofa);


        console.log(productArticle)

        // Inserting the "div" element for the product image
        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";

        console.log(productDivImg)

        // Insertion de l'image
        // [i] = whichever element in the loop that we are in
         let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = productLocalStorage[i].imgItem;
        productImg.alt = productLocalStorage[i].altImg;


        // Inserting the "div" element for the product description
        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";

        // Inserting the "div" element
        let productItemContentTitlePrice = document.createElement("div");
        productItemContent.appendChild(productItemContentTitlePrice);
        productItemContentTitlePrice.className = "cart__item__content__titlePrice";

        // IInserting the h2 title
        let productTitle = document.createElement("h2");
        productItemContentTitlePrice.appendChild(productTitle);
        productTitle.innerHTML = productLocalStorage[i].nameItem;
        productTitle.style.fontSize = "2em"

        // Inserting the color
        let productColor = document.createElement("p");
        productTitle.appendChild(productColor);
        productColor.innerHTML = productLocalStorage[i].colorItem;
        productColor.style.fontSize = ".6em";

        // Insertion of the price
        let productPrice = document.createElement("p");
        productItemContentTitlePrice.appendChild(productPrice);
        productPrice.innerHTML = productLocalStorage[i].priceItem + " €";

        // Inserting the "div" element
        let productItemContentSettings = document.createElement("div");
        productItemContent.appendChild(productItemContentSettings);
        productItemContentSettings.className = "cart__item__content__settings";

        // Inserting the "div" element
        let productItemContentSettingsQuantity = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsQuantity);
        productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

        // Inserting the quantity
        let productQuantity = document.createElement("p");
        productItemContentSettingsQuantity.appendChild(productQuantity);
        productQuantity.innerHTML = "Quantity: ";

        // Inserting the quantity

        let quantityInput = document.createElement("input");
        productItemContentSettingsQuantity.appendChild(quantityInput);
        quantityInput.type = "number";
        quantityInput.name = "itemQuantity";
        quantityInput.className = "itemQuantity";
        quantityInput.min = "1";
        quantityInput.max = "100";
        quantityInput.value = productLocalStorage[i].quantityItem;

        // Inserting the "div" element
        let productItemContentSettingsDelete = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsDelete);
        productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

        // Insertion of "p" delete
        let productDelete = document.createElement("p");
        productItemContentSettingsDelete.appendChild(productDelete);
        productDelete.className = "deleteItem";
        productDelete.innerHTML = "Delete Article";
        productDelete.addEventListener("click", (event) => {
            event.preventDefault;

             // save the selected id and color with the delete button
             let deleteId = productLocalStorage[i].idSofa;
            let deleteColor = productLocalStorage[i].colorItem;

            // filter the item clicked by the delete button
            productLocalStorage = productLocalStorage.filter( value => {
                return  value.idSofa !== deleteId || value.colorItem !== deleteColor
            } );
            if (totalQuantity.innerHTML == "0") {
                localStorage.removeItem("product");
                cartItems.innerHTML = "Le panier est vide.";
              }
              //If all items have been deleted, disable order button
              disableOrder();

            // send the new data to the localStorage
            localStorage.setItem('cart', JSON.stringify(productLocalStorage));


            // notify of the deletion and reload the page
            alert('Your article was cancelled');

            location.reload();
        });
    }
}






// modifying the total article

    let articleQuantity = document.getElementById('totalQuantity');
    totalQuantity = 0 ;


    productLocalStorage.forEach(e => {
        totalQuantity += Number(e.quantityItem)
     articleQuantity.innerHTML = totalQuantity
    });

console.log(totalQuantity)

// displaying the total Price of each article


    let productTotalPrice = document.getElementById('totalPrice');
    let totalPrice = 0;


productLocalStorage.forEach(element => {

   totalPrice += element.priceItem * element.quantityItem
   productTotalPrice.innerHTML = totalPrice
})

console.log(totalPrice)


 // change input quantity 

function newArticleQuantity() {
  let updatedQuantity = document.querySelectorAll(".itemQuantity");

  for (let i= 0; i < updatedQuantity.length; i++){
      updatedQuantity[i].addEventListener("change" , (event) => {
          event.preventDefault();

          //Selection de l'element à modifier en fonction de son id ET sa couleur
         
          let newArticleQuantity = productLocalStorage[i].quantityItem;
          let newQuantityValue = updatedQuantity[i].value;
          
          const resultFind = productLocalStorage.find((el) => el.newQuantityValue !== newArticleQuantity );

          resultFind.quantityItem = newQuantityValue;
          productLocalStorage[i].quantityItem = resultFind.quantityItem;

          localStorage.setItem("cart", JSON.stringify(productLocalStorage));
        

          
          // refresh rapide
          location.reload();
      })
  }
}
newArticleQuantity(); 


/* filling out the form  */

/* filling out the form  */
function getForm() {

    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let address = document.getElementById('address')
    let city = document.getElementById('city')
    let email = document.getElementById('email')
    
    
    
    firstName.addEventListener ("input", validateFirstName)
    
    function validateFirstName() {
    
        const regEx_FirstName = /^[a-zA-Z]{2,}$/;
    
        if(regEx_FirstName.test(firstName.value) == false || firstName.value == "") {
    
    
                document.getElementById("firstNameErrorMsg").innerHTML = "Your first name is not valid";
                return false;
        } else {
    
            document.getElementById("firstNameErrorMsg").innerHTML = "";
            console.log('1')
            return true;
        }
    }
    
    
    
    
    lastName.addEventListener ("input", validateLastName)
    function validateLastName() {
        const regEx_LastName = /^[a-zA-Z]{2,20}$/;
    
        if(regEx_LastName.test(lastName.value) == false || lastName.value == ""){
    
                document.getElementById("lastNameErrorMsg").innerHTML = "Your last name is not valid";
                return false;
        } else {
    
            document.getElementById("lastNameErrorMsg").innerHTML = "";
            console.log('2')
            return true;
        }
    }
    
    
    
    
    address.addEventListener ("input", validateAddress)
    function validateAddress() {
        const regEx_Address = /^[#.0-9a-zA-Z\s,-]+$/;
    
        if(regEx_Address.test(address.value) == false || address.value == ""){
    
    
                document.getElementById("addressErrorMsg").innerHTML = "Your address is not valid";
                return false;
        } else {
    
            document.getElementById("addressErrorMsg").innerHTML = "";
            console.log('3')
            return true;
        }
    }
    
    
    
    
    
    city.addEventListener ("input", validateCity)
    function validateCity() {
        const regEx_City = /^[#.0-9a-zA-Z\s,-]+$/;
    
        if(regEx_City.test(city.value)  == false || city.value == "" ){
    
                document.getElementById("cityErrorMsg").innerHTML = "Your city is not valid";
                return false;
        } else {
    
            document.getElementById("cityErrorMsg").innerHTML = "";
            console.log('4')
            return true;
        }
    }
    
    
    
    
    email.addEventListener ("input", validateEmail)
    function validateEmail() {
        const regEx_Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(regEx_Email.test(email.value) == false || email.value == ""){
            
            
                document.getElementById("emailErrorMsg").innerHTML = "Your email is not valid";
                return false;
        } else {
            
            document.getElementById("emailErrorMsg").innerHTML  = "";
            console.log('5')
            return true;
        }
    }
    
    }
    getForm();
    
    
    //If cart is empty, order button is disabled
disableOrder();
function disableOrder() {
  if (!productLocalStorage || productLocalStorage.length === 0) {
    order.setAttribute("disabled", true);
    order.style.cursor = "not-allowed";
  }
}

/* 
let order = document.getElementById("order");
//console.log(order)
order.addEventListener("click", (e) => {
  e.preventDefault();
 

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    address.value === "" ||
    city.value === "" ||
    email.value === ""
  ) {
    alert("You need to fill in your details for the order!!");
  } else if (
    validateFirstName() == false ||
    validateLastName() == false ||
    validateAddress() == false ||
    validateEmail() == false ||
    validateCity() == false
 
    
  ) {
    alert("Please fill in your details correctly!");
    } 
    
  })

 */
  
   
   function postForm() {
    const order = document.getElementById('order');
    order.addEventListener('click', (e) => {
    e.preventDefault();

    // get the data from the form into an object
    const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
    }

    //Building an id array from local storage
    let products = [];
    for (let i = 0; i < productLocalStorage.length; i++) {
        products.push(productLocalStorage[i].idSofa);
    }
    console.log(products);
  
    // put the selected contact and product data into and object 
   
    const postFormData = {
      contact,
      products,
    }


    // send the form + localStorage (postFormData) 
    // ... sending it to the server 
  
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(postFormData),
      
    };
  
     fetch("http://localhost:3000/api/products/order", options)
        .then(response => response.json())
        .then(data => {
        //localStorage.clear()
        document.location.href = 'confirmation.html?id='+ data.orderId;
      }); 
     
  }); 
  } //post the form
  postForm();




 

/*   function postForm() {
    const order = document.getElementById('order');
    order.addEventListener('click', (event) => {
    event.preventDefault();
  
    // je récupère les données du formulaire dans un objet
    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
    }

    //Construction d'un array d'id depuis le local storage
    let products = [];
    for (let i = 0; i<productLocalStorage.length;i++) {
        products.push(productLocalStorage[i].idSofa);
    }
    console.log(products);
  
    // je mets les valeurs du formulaire et les produits sélectionnés
    // dans un objet...
    const sendFormData = {
      contact,
      products,
    }
  
    // j'envoie le formulaire + localStorage (sendFormData) 
    // ... que j'envoie au serveur
  
    const options = {
      method: 'POST',
      body: JSON.stringify(sendFormData),
      headers: { 
        'Content-Type': 'application/json',
      }
    };
  
    fetch("http://localhost:3000/api/products/order", options)
        .then(response => response.json())
        .then(data => {
        localStorage.setItem('orderId', data.orderId);
        document.location.href = 'confirmation.html?id='+ data.orderId;
      });
  
  }); // fin eventListener postForm
  } // fin envoi du formulaire postForm
  postForm(); */