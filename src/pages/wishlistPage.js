import axios from "axios";
import { router, routes } from "../../main";
import { isAuthenticated, WISHLIST_URL } from "../services/links";

const container = document.getElementById('app');


export function wishlistPage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8 bg-slate-50';

  const topDiv = document.createElement('div');
  topDiv.classList.add('flex', 'items-center', 'mt-16');
  topDiv.id = 'top';

  // Create the image element
  const prevIcon = document.createElement('img');
  prevIcon.classList.add('w-24', 'h-16');
  prevIcon.src = '../src/assets/icons/prev icon.png';
  prevIcon.alt = '_';

  // Create the paragraph element
  const paragraph = document.createElement('p');
  paragraph.classList.add('font-semibold', 'text-3xl');
  paragraph.textContent = 'Payment Method';

  // Append the image and paragraph to the parent div
  topDiv.appendChild(prevIcon);
  topDiv.appendChild(paragraph);

  container.appendChild(topDiv);

  const notFound = document.createElement('div');
  notFound.classList = 'flex flex-col mx-auto mt-20 text-center';
  notFound.id = 'not-found';

  const notFoundImg = document.createElement('img');
  notFoundImg.classList = 'p-8';
  notFoundImg.src = '../src/assets/icons/notfound.png';
  notFoundImg.alt = '_';
  notFound.appendChild(notFoundImg);

  const notFoundTitle = document.createElement('p');
  notFoundTitle.classList = 'font-bold text-2xl pb-3';
  notFoundTitle.textContent = 'Not found';
  notFound.appendChild(notFoundTitle);

  const notFoundText = document.createElement('p');
  notFoundText.classList = 'px-6';
  notFoundText.textContent = 'Sorry, the key word you entered cannot be found. please check again or search with another word';
  notFound.appendChild(notFoundText);

  container.appendChild(notFound);

  const itemsDiv = document.createElement('div');
  itemsDiv.classList = "grid grid-cols-2 px-4 gap-x-4 gap-y-8";
  itemsDiv.id = "items";

  container.appendChild(itemsDiv);

  prevIcon.addEventListener('click', () => {
    router.navigate(routes.profile)
  })
  fetchWishlistItems();
}

async function fetchWishlistItems() {
  let result = "";

  try {
    const response = await axios.get(WISHLIST_URL);
    result = response.data;
  } catch (e) {
    console.log('failed to fetch wishlist product', e)
  }
  if (result) {
    const notFound = document.getElementById("not-found");
    notFound.classList.add("hidden");
    const itemsContainer = document.getElementById("items");
    itemsContainer.innerHTML = "";
    // biome-ignore lint/complexity/noForEach: <explanation>
    result.forEach((product) => {
      const item = document.createElement("div");
      item.classList = "flex flex-col";
      item.id = "item";

      // Create the image container
      const imageContainer = document.createElement("div");
      imageContainer.classList = "relative w-fit h-32";

      const mainImage = document.createElement("img");
      mainImage.classList = "w-44 h-fit mt-2";
      mainImage.src = product.imgUrl;
      mainImage.alt = "_";
      imageContainer.appendChild(mainImage);

      const likeIcon = document.createElement("img");
      likeIcon.classList = "w-6 h-6 absolute right-2 top-3";
      likeIcon.src = "../src/assets/icons/heart_red.png";
      likeIcon.alt = "_";
      imageContainer.appendChild(likeIcon);

      item.appendChild(imageContainer);

      // Create the info section
      const info = document.createElement("div");
      info.classList = "flex flex-col gap-y-1";
      info.id = "info";

      const itemName = document.createElement("p");
      itemName.classList = "font-semibold text-2xl";
      itemName.id = "name";
      itemName.textContent = product.name;
      info.appendChild(itemName);

      const ratingContainer = document.createElement("div");
      ratingContainer.classList = "flex gap-x-2 items-center";

      const starIcon = document.createElement("img");
      starIcon.classList = "w-6 h-6";
      starIcon.src = "../src/assets/icons/star.png";
      starIcon.alt = "_";
      ratingContainer.appendChild(starIcon);

      const rating = document.createElement("p");
      rating.classList = "font-semibold";
      rating.id = "rate";
      rating.innerText = product.rate;
      ratingContainer.appendChild(rating);

      const separator = document.createElement("p");
      separator.textContent = "|";
      ratingContainer.appendChild(separator);

      const soldInfo = document.createElement("div");
      soldInfo.classList = "p-1 bg-slate-50 rounded-xl font-semibold";
      soldInfo.textContent = "328 sold";
      ratingContainer.appendChild(soldInfo);

      info.appendChild(ratingContainer);

      const itemPrice = document.createElement("p");
      itemPrice.classList = "font-semibold text-2xl";
      itemPrice.id = "price";
      itemPrice.textContent = `$ ${product.price}`;
      info.appendChild(itemPrice);

      item.appendChild(info);

      itemsContainer.appendChild(item);
    });
  }

}
