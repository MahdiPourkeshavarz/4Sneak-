import { MOST_URL, NIKE_PRO, PRODUCT_URL } from "../services/links";
import { getProducts } from "./homePage";

const container = document.getElementById('app');

let brand = "Adidas";

let URL = "";

export function updateInfo(name, url = "") {
  brand = name;
  URL = url;
}


export function brandPage() {
  container.innerHTML = "";

  const top = document.createElement('div');
  top.classList = 'flex items-center h-14 mt-10';
  top.id = 'top';

  const topImg1 = document.createElement('img');
  topImg1.classList = 'w-24 h-auto';
  topImg1.src = '../src/assets/icons/prev icon.png';
  topImg1.alt = '_';

  const topText = document.createElement('p');
  topText.classList = 'font-bold text-3xl pb-1';
  topText.textContent = brand;

  // Append top images and text to top div
  top.appendChild(topImg1);
  top.appendChild(topText);
  container.appendChild(top);

  const items = document.createElement('div');
  items.classList = 'mt-6 px-8 grid grid-cols-2 mb-32';
  items.id = 'items';

  container.appendChild(items);
  console.log('as')
  getProducts(MOST_URL)

}