
fetch('http://localhost:3000/api/products')
.then (data => {
    return data.json();
})
.then(products => {
    console.log(products);
    const html = products
    .map(products => {
        return `
        <main class="limitedWidthBlockContainer">
            <div class="limitedWidthBlock">
                <section class="item" id="items">
                    <a href="./product.html?id=${products._id}">
                        <article>
                            <img  src=${products.imageUrl} alt=${products.altTxt}>
                            <h3 id"title">${products.name}</h3>
                            <p class="productDescription">${products.description}</p>
                        </article>
                    </a>
                </section>
            </div>
        </main>
        `;
    }).join('');
    document.querySelector('.items').insertAdjacentHTML('afterbegin', html);
        })
       
.catch(e => {
        console.log(e)


     
    });



    