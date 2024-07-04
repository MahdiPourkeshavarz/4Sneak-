import { PRODUCT_URL } from "../services/links";

const container = document.getElementById('app');


let input = "";

export function updateSearchInfo(value) {
  console.log(value);
  input = value;
}


export async function searchPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col px-6 w-[430px] h-max gap-y-6';

  // Create the search bar section
  const searchBar = document.createElement('div');
  searchBar.classList = 'flex p-2 border-solid items-center justify-between border-2 border-slate-600 rounded-2xl mt-8 h-14';
  searchBar.id = 'search-bar';

  const searchContainer = document.createElement('div');
  searchContainer.classList = 'flex';

  const searchIcon = document.createElement('img');
  searchIcon.classList = 'w-8 h-8';
  searchIcon.src = '../src/assets/icons/ssearch.png';
  searchIcon.alt = '_';
  searchContainer.appendChild(searchIcon);

  const searchInput = document.createElement('input');
  searchInput.classList = 'pl-4 focus:outline-none w-56';
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter Name';
  searchInput.id = 'search-input';
  searchContainer.appendChild(searchInput);

  searchBar.appendChild(searchContainer);

  const filterIcon = document.createElement('img');
  filterIcon.classList = 'w-8 h-8';
  filterIcon.src = '../src/assets/icons/afilter.png';
  filterIcon.alt = '_';
  searchBar.appendChild(filterIcon);

  container.appendChild(searchBar);

  searchIcon.addEventListener('click', () => {
    const value = searchInput.value;
    fetchProducts(value);
  })

  // Create the results section
  const results = document.createElement('div');
  results.classList = 'pl-2 flex justify-between';

  const resultText = document.createElement('p');
  resultText.classList = 'text-xl font-semibold text-slate-600';
  resultText.innerHTML = 'result for <span class="text-slate-950" id="search-key">""</span>';
  results.appendChild(resultText);

  const foundText = document.createElement('p');
  foundText.classList = 'pr-2 font-semibold text-lg';
  foundText.innerHTML = '<span id="length">21</span> found';
  results.appendChild(foundText);

  container.appendChild(results);

  // Create the not found section
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

  const itemsContainer = document.createElement('div');
  itemsContainer.classList = 'grid grid-cols-2 gap-y-4 pb-20';
  itemsContainer.id = 'items';

  container.appendChild(itemsContainer);

  fetchProducts(input);

  const links = [
    { href: '/home', iconSrc: '../src/assets/action/home.png', iconAlt: '_', additionalClasses: '' },
    { href: '/cart', iconSrc: '../src/assets/action/cart.png', iconAlt: '_', additionalClasses: 'relative', isCart: true },
    { href: '/orders/an', iconSrc: '../src/assets/action/orders.png', iconAlt: '_', additionalClasses: '' },
    { href: '/wallet', iconSrc: '../src/assets/action/wallet.png', iconAlt: '_', additionalClasses: '' },
    { href: '/profile', iconSrc: '../src/assets/action/profile.png', iconAlt: '_', additionalClasses: '' }
  ];

  // Utility function to create links with icons
  function createLink(href, iconSrc, iconAlt, additionalClasses = '') {
    const link = document.createElement('a');
    link.innerHTML = '<a data-navigo></a>'
    link.href = href;
    if (additionalClasses) {
      link.className = additionalClasses;
    }

    const icon = document.createElement('img');
    icon.className = 'w-10 h-auto';
    icon.src = iconSrc;
    icon.alt = iconAlt;

    link.appendChild(icon);
    return link;
  }

  // Utility function to create cart link with badge
  function createCartLink(href, iconSrc, iconAlt) {
    const link = createLink(href, iconSrc, iconAlt, 'relative');

    const badge = document.createElement('div');
    badge.className = 'absolute flex items-center justify-center w-6 h-6 bg-red-700 text-white rounded-full -top-4 right-0 text-center text-sm';
    badge.textContent = '0';

    link.appendChild(badge);
    return link;
  }

  // Create action bar container
  const actionBar = document.createElement('div');
  actionBar.className = 'fixed h-20 bottom-0 flex items-center gap-x-10 bg-white w-[430px]';
  actionBar.id = 'action-bar';

  // Iterate over the links object to create and append links
  // biome-ignore lint/complexity/noForEach: <explanation>
  links.forEach(link => {
    let linkElement;
    if (link.isCart) {
      linkElement = createCartLink(link.href, link.iconSrc, link.iconAlt);
    } else {
      linkElement = createLink(link.href, link.iconSrc, link.iconAlt, link.additionalClasses);
    }
    actionBar.appendChild(linkElement);
  });

  // Append action bar to container
  container.appendChild(actionBar);
}

export async function fetchProducts(input) {
  console.log(input);
  const searchInput = document.getElementById('search-input');
  searchInput.value = input;
  const searchKey = document.getElementById('search-key');
  searchKey.innerHTML = `"${input}"`;
  let result = "";
  try {
    const response = await fetch(`${PRODUCT_URL}?name_like=${input}`);
    result = await response.json();
    console.log(result);
  } catch (e) {
    throw new Error('failed to fetch', e);
  }

  if (result) {
    const notFound = document.getElementById('not-found');
    notFound.classList.add('hidden');
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = "";
    // biome-ignore lint/complexity/noForEach: <explanation>
    result.forEach((product) => {
      const item = document.createElement('div');
      item.classList = 'flex flex-col';
      item.id = 'item';

      // Create the image container
      const imageContainer = document.createElement('div');
      imageContainer.classList = 'relative w-fit h-32';

      const mainImage = document.createElement('img');
      mainImage.classList = 'w-44 h-fit mt-2';
      mainImage.src = product.imgUrl;
      mainImage.alt = '_';
      imageContainer.appendChild(mainImage);

      const likeIcon = document.createElement('img');
      likeIcon.classList = 'w-6 h-6 absolute right-2 top-3';
      likeIcon.src = '../src/assets/icons/like.png';
      likeIcon.alt = '_';
      imageContainer.appendChild(likeIcon);

      item.appendChild(imageContainer);

      // Create the info section
      const info = document.createElement('div');
      info.classList = 'flex flex-col gap-y-1';
      info.id = 'info';

      const itemName = document.createElement('p');
      itemName.classList = 'font-semibold text-2xl';
      itemName.id = 'name';
      itemName.textContent = product.name;
      info.appendChild(itemName);

      const ratingContainer = document.createElement('div');
      ratingContainer.classList = 'flex gap-x-2 items-center';

      const starIcon = document.createElement('img');
      starIcon.classList = 'w-6 h-6';
      starIcon.src = '../src/assets/icons/star.png';
      starIcon.alt = '_';
      ratingContainer.appendChild(starIcon);

      const rating = document.createElement('p');
      rating.classList = 'font-semibold';
      rating.id = 'rate';
      rating.textContent = product.rate;
      ratingContainer.appendChild(rating);

      const separator = document.createElement('p');
      separator.textContent = '|';
      ratingContainer.appendChild(separator);

      const soldInfo = document.createElement('div');
      soldInfo.classList = 'p-1 bg-slate-50 rounded-xl font-semibold';
      soldInfo.textContent = '328 sold';
      ratingContainer.appendChild(soldInfo);

      info.appendChild(ratingContainer);

      const itemPrice = document.createElement('p');
      itemPrice.classList = 'font-semibold text-2xl';
      itemPrice.id = 'price';
      itemPrice.textContent = `$ ${product.price}`;
      info.appendChild(itemPrice);

      item.appendChild(info);
      itemsContainer.appendChild(item);
    })
  }
}