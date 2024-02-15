// Make a request to the API endpoint
fetch('https://api.example.com/products')
  .then(response => response.json())
  .then(data => {
    // Iterate over the categories
    data.categories.forEach(category => {
      // Iterate over the products within each category
      category.category_products.forEach(product => {
        // Create a product card element
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Construct the HTML content for the product card
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Compare at price: ${product.compare_at_price}</p>
          <p>Vendor: ${product.vendor}</p>
          <p>Badge: ${product.badge_text}</p>
          <button>Add to cart</button>
        `;

        // Append the product card to the product container
        document.getElementById('product-container').appendChild(productCard);
      });
    });
  })
  .catch(error => console.error('Error fetching products:', error));
