import { products } from "./data.js";
import formatNumber from "./formatNumber.js";


const searchEl = document.getElementById("search")

products.forEach((element) => {
  console.log(element.title);
});

const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");

const theme = localStorage.getItem("theme");

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme == "luxury" ? true : false;
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "luxury" : "light";

  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme == "luxury" ? true : false;
});

const template = document.querySelector("template");
const productsList = document.getElementById("product-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  const {
    title,
    description: _description,
    thumbnail,
    price: _price,
    discountPercentage,
    rating: _rating,
  } = product;
  const cardImg = clone.querySelector(".card-imge");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPrice = clone.querySelector(".discount-price");

  cardTitle.textContent = title;
  description.textContent = _description;
  cardImg.src = thumbnail;
  price.textContent = formatNumber(_price);
  discountPrice.textContent = formatNumber(
    _price,
    discountPercentage
  );
  rating.textContent = "⭐ " + _rating + " (938 sarhlar)";

  productsList.appendChild(clone);
});

const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    localStorage;

    if (e.target.checked) {
      alert("Mahsulot qushildi");
      console.log(0);
      
    }
  });
});

const titleles = document.querySelectorAll(".card-title")

searchEl.addEventListener("input", ()=> {
   const searchText = searchEl.value.toLowerCase()

   titleles.forEach((title)=> {
    if(title.textContent.toLowerCase().includes(searchText)){
      title.parentElement.parentElement.style.display = "block"
    } else {
      title.parentElement.parentElement.style.display = "none"
    }
   })
})