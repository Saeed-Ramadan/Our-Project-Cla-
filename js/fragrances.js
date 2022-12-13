const fragrancesProduct = document.getElementById("fragrances-product");

fetch('https://dummyjson.com/products/category/fragrances')
  .then((res) => res.json())
  .then((products) => {
    console.log(products.products);

    products.products.forEach((pro) => {
      for (var i = 0; i <= products.products.length; i++) {
        // console.log(products.products[0].title);
        fragrancesProduct.innerHTML += `<div  class="one" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <img src=${products.products[i].thumbnail} alt="product-${products.products[i].title}">
                <div class="title">${products.products[i].title}</div>
                <div class="prand">${products.products[i].brand}</div>
                <div class="price">${products.products[i].price} </div>

                <div class="link">
                    <a href="../html/product-info.html">more >></a>
                </div>
            </div>`;
      }
    });
  });

  AOS.init();

