
const container = document.getElementById('app');

export function searchPage() {
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
  searchInput.classList = 'pl-4';
  searchInput.type = 'text';
  searchInput.placeholder = 'Enter Name';
  searchContainer.appendChild(searchInput);

  searchBar.appendChild(searchContainer);

  const filterIcon = document.createElement('img');
  filterIcon.classList = 'w-8 h-8';
  filterIcon.src = '../src/assets/icons/afilter.png';
  filterIcon.alt = '_';
  searchBar.appendChild(filterIcon);

  container.appendChild(searchBar);

  // Create the results section
  const results = document.createElement('div');
  results.classList = 'pl-2 flex justify-between';

  const resultText = document.createElement('p');
  resultText.classList = 'text-xl font-semibold text-slate-600';
  resultText.innerHTML = 'result for <span class="text-slate-950" id="search-key">"running"</span>';
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
  const result = false;
  if (result) {
    notFound.classList.add('hidden');
    // Create the items container
    const itemsContainer = document.createElement('div');
    itemsContainer.classList = 'grid grid-cols-2 gap-y-4';
    itemsContainer.id = 'items';

    // Create an individual item
    const item = document.createElement('div');
    item.classList = 'flex flex-col';
    item.id = 'item';

    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.classList = 'relative w-fit h-32';

    const mainImage = document.createElement('img');
    mainImage.classList = 'w-44 h-fit mt-2';
    mainImage.src = '../src/assets/newbalance/2.jpg';
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
    itemName.textContent = 'Adidas running';
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
    rating.textContent = '4.3';
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
    itemPrice.textContent = '$ 120.00';
    info.appendChild(itemPrice);

    item.appendChild(info);

    // Append the item to the items container
    itemsContainer.appendChild(item);
    container.appendChild(itemsContainer);
  }
}