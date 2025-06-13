import { products } from "./data.js";  

const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
const likedList = document.getElementById('liked-list'); 

likedProducts.forEach(productId => {
  const product = products.find(p => p.id === productId);
  if (product) {
    const div = document.createElement('div');
    div.classList.add('liked-product');
    div.innerHTML = `
      <h3>${product.title}</h3>
      <img src="${product.thumbnail}" alt="${product.title}" />
      <p>${product.description}</p>
      <p>Price: ${product.price} $</p>
    `;
    likedList.appendChild(div);
  }
});
