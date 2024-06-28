
const container = document.getElementById('app');

export function cartPage() {
  container.classList = 'flex flex-col w-[430px] h-max gap-y-12 px-6';

  const top = document.createElement('div');
  top.classList = 'mt-12 flex items-center w-full h-max';
  top.id = 'top';

  const logo = document.createElement('img');
  logo.classList = 'p-1 bg-black rounded-lg';
  logo.src = '../src/assets/icons/logo.png';
  logo.alt = '_';

  const cartTitle = document.createElement('p');
  cartTitle.classList = 'pl-8 text-3xl font-semibold mr-40';
  cartTitle.textContent = 'My Cart';

  const searchIcon = document.createElement('img');
  searchIcon.classList = 'w-10 h-10';
  searchIcon.src = '../src/assets/icons/ssearch.png';
  searchIcon.alt = '_';

  top.appendChild(logo);
  top.appendChild(cartTitle);
  top.appendChild(searchIcon);

  container.appendChild(top);

  const items = document.createElement('div');
  items.classList = 'flex flex-col gap-y-10';
  items.id = 'items';

  const item = document.createElement('div');
  item.classList = 'flex gap-x-4 p-2 items-center';
  item.id = 'item';

  const itemImageContainer = document.createElement('div');
  itemImageContainer.classList = 'bg-slate-100 px-1 rounded-xl';

  const itemImage = document.createElement('img');
  itemImage.width = 142;
  itemImage.height = 'auto';
  itemImage.src = '../src/assets/adidas/adidas.png';
  itemImage.alt = '_';

  itemImageContainer.appendChild(itemImage);

  const info = document.createElement('div');
  info.classList = 'flex flex-col justify-evenly gap-y-5';
  info.id = 'info';

  const topInfo = document.createElement('div');
  topInfo.classList = 'flex items-center gap-x-5';
  topInfo.id = 'top';

  const itemName = document.createElement('p');
  itemName.classList = 'text-lg font-semibold';
  itemName.id = 'name';
  itemName.textContent = 'Air jordan 3 Retro';

  const binIcon = document.createElement('img');
  binIcon.src = '../src/assets/icons/bin.png';
  binIcon.alt = '_';

  topInfo.appendChild(itemName);
  topInfo.appendChild(binIcon);

  const middleInfo = document.createElement('div');
  middleInfo.classList = 'flex items-center gap-x-2 font-semibold';
  middleInfo.id = 'middle';

  const colorHex = document.createElement('div');
  colorHex.classList = 'w-3 h-3 bg-black rounded-full';
  colorHex.id = 'hex';

  const colorText = document.createElement('p');
  colorText.innerHTML = '<span id="colorName">Black</span> | Size = <span id="size">42</span>';

  middleInfo.appendChild(colorHex);
  middleInfo.appendChild(colorText);

  const bottomInfo = document.createElement('div');
  bottomInfo.classList = 'flex items-center gap-x-12';
  bottomInfo.id = 'bottom';

  const priceText = document.createElement('p');
  priceText.classList = 'text-lg font-semibold';
  priceText.innerHTML = '$ <span id="price">125.00</span>';

  const quantityControl = document.createElement('div');
  quantityControl.classList = 'py-2 px-3 bg-slate-100 text-xl font-semibold flex gap-x-3 rounded-2xl justify-center';
  quantityControl.id = 'quant';

  const decrement = document.createElement('p');
  decrement.textContent = '-';

  const quantityValue = document.createElement('p');
  quantityValue.textContent = '1';

  const increment = document.createElement('p');
  increment.textContent = '+';

  quantityControl.appendChild(decrement);
  quantityControl.appendChild(quantityValue);
  quantityControl.appendChild(increment);

  bottomInfo.appendChild(priceText);
  bottomInfo.appendChild(quantityControl);

  info.appendChild(topInfo);
  info.appendChild(middleInfo);
  info.appendChild(bottomInfo);

  item.appendChild(itemImageContainer);
  item.appendChild(info);

  items.appendChild(item);
  container.appendChild(items);


  const checkout = document.createElement('div');
  checkout.classList = 'fixed bottom-16 h-28 w-full border-t-2 border-solid border-slate-200 px-6 flex justify-around bg-white';
  checkout.id = 'Checkout';

  const checkoutPrice = document.createElement('div');
  checkoutPrice.className = 'flex flex-col text-center mt-3';
  checkoutPrice.id = 'price';

  const totalPriceLabel = document.createElement('p');
  totalPriceLabel.classList = 'text-lg font-semibold';
  totalPriceLabel.textContent = 'Total Price';

  const totalPriceValue = document.createElement('p');
  totalPriceValue.classList = 'text-2xl font-bold';
  totalPriceValue.id = 'price';
  totalPriceValue.textContent = '$ 240.00';

  checkoutPrice.appendChild(totalPriceLabel);
  checkoutPrice.appendChild(totalPriceValue);

  const checkoutButton = document.createElement('button');
  checkoutButton.classList = 'bg-slate-900 cursor-pointer h-16 pl-10 mt-4 pr-12 justify-center rounded-3xl flex items-center text-white gap-x-2';

  const checkoutIcon = document.createElement('img');
  checkoutIcon.src = '../src/assets/icons/gocheckout.png';
  checkoutIcon.alt = '_';

  const checkoutButtonText = document.createElement('span');
  checkoutButtonText.textContent = 'Go to Checkout';

  checkoutButton.appendChild(checkoutIcon);
  checkoutButton.appendChild(checkoutButtonText);

  checkout.appendChild(checkoutPrice);
  checkout.appendChild(checkoutButton);
  container.appendChild(checkout);


  const actionBar = document.createElement('div');
  actionBar.classList = 'fixed h-20 bottom-0 flex items-center left-9 gap-x-10 bg-white';
  actionBar.id = 'action-bar';

  const homeLink = document.createElement('a');
  homeLink.href = '#';

  const homeIcon = document.createElement('img');
  homeIcon.classList = 'w-10 h-auto';
  homeIcon.src = '../src/assets/action/home.png';
  homeIcon.alt = '_';

  homeLink.appendChild(homeIcon);

  const cartLink = document.createElement('a');
  cartLink.classList = 'relative';
  cartLink.href = '#';

  const cartBadge = document.createElement('div');
  cartBadge.classList = 'absolute flex items-center justify-center w-6 h-6 bg-red-700 text-white rounded-full -top-4 right-0 text-center text-sm';
  cartBadge.textContent = '0';

  const cartIcon = document.createElement('img');
  cartIcon.classList = 'w-10 h-auto';
  cartIcon.src = '../src/assets/action/cart.png';
  cartIcon.alt = '_';

  cartLink.appendChild(cartBadge);
  cartLink.appendChild(cartIcon);

  const ordersLink = document.createElement('a');
  ordersLink.href = '#';

  const ordersIcon = document.createElement('img');
  ordersIcon.classList = 'w-10 h-auto';
  ordersIcon.src = '../src/assets/action/orders.png';
  ordersIcon.alt = '_';

  ordersLink.appendChild(ordersIcon);

  const walletLink = document.createElement('a');
  walletLink.href = '#';

  const walletIcon = document.createElement('img');
  walletIcon.classList = 'w-10 h-auto';
  walletIcon.src = '../src/assets/action/wallet.png';
  walletIcon.alt = '_';

  walletLink.appendChild(walletIcon);

  const profileLink = document.createElement('a');
  profileLink.href = '#';

  const profileIcon = document.createElement('img');
  profileIcon.classList = 'w-10 h-auto';
  profileIcon.src = '../src/assets/action/profile.png';
  profileIcon.alt = '_';

  profileLink.appendChild(profileIcon);

  actionBar.appendChild(homeLink);
  actionBar.appendChild(cartLink);
  actionBar.appendChild(ordersLink);
  actionBar.appendChild(walletLink);
  actionBar.appendChild(profileLink);
  container.appendChild(actionBar);

}