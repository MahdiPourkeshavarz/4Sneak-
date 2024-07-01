
const container = document.getElementById('app');

export function ordersPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col gap-y-8 w-[430px] h-max bg-slate-50 px-6';

  // Create top section
  const top = document.createElement('div');
  top.classList = 'flex items-center justify-between px-4 mt-10';
  top.id = 'top';

  const left = document.createElement('div');
  left.classList = 'flex gap-x-4 items-center';
  left.id = 'left';

  const logoImg = document.createElement('img');
  logoImg.classList = 'p-1 bg-black rounded-xl';
  logoImg.src = '../src/assets/icons/logo.png';
  logoImg.alt = '_';

  const logoText = document.createElement('p');
  logoText.classList = 'font-semibold text-3xl';
  logoText.textContent = 'My Orders';

  left.appendChild(logoImg);
  left.appendChild(logoText);

  const searchImg = document.createElement('img');
  searchImg.classList = 'h-9 w-auto mt-2';
  searchImg.src = '../src/assets/icons/searchanddetal.png';
  searchImg.alt = '_';

  top.appendChild(left);
  top.appendChild(searchImg);
  container.appendChild(top);

  let active = true;

  // Create tabs
  const tabs = document.createElement('div');
  tabs.classList = 'grid grid-cols-2 text-center justify-center h-14 pr-4';
  tabs.id = 'tabs';

  const activeTab = document.createElement('div');
  activeTab.classList = 'font-semibold rounded-sm text-2xl border-solid border-b-4 border-slate-800';
  activeTab.id = 'active';
  activeTab.textContent = 'Active';

  const completedTab = document.createElement('div');
  completedTab.classList = 'font-semibold text-2xl text-slate-600';
  completedTab.id = 'completed';
  completedTab.textContent = 'Completed';

  tabs.appendChild(activeTab);
  tabs.appendChild(completedTab);

  container.appendChild(tabs);

  completedTab.addEventListener('click', () => {
    activeTab.classList.remove('border-solid', 'border-b-4', 'border-slate-800');
    completedTab.classList.add('border-solid', 'border-b-4', 'border-slate-800');
    active = false;
  })

  activeTab.addEventListener('click', () => {
    completedTab.classList.remove('border-solid', 'border-b-4', 'border-slate-800');
    activeTab.classList.add('border-solid', 'border-b-4', 'border-slate-800');
    active = true;
  })


  const items = document.createElement('div');
  items.classList = 'pl-2 grid grid-cols-1 gap-y-6';
  items.id = 'items';


  if (active) {
    items.innerHTML = "";
    const item = document.createElement('div');
    item.classList = 'flex items-center gap-x-8 rounded-xl bg-white';
    item.id = 'item';

    // Create image container
    const itemImgContainer = document.createElement('div');
    itemImgContainer.classList = 'w-28 h-auto';
    itemImgContainer.id = 'img';

    const itemImg = document.createElement('img');
    itemImg.src = '../src/assets/Asics/3.jpg';
    itemImg.alt = '_';

    itemImgContainer.appendChild(itemImg);

    // Create item info container
    const itemInfo = document.createElement('div');
    itemInfo.classList = 'flex flex-col gap-y-2';
    itemInfo.id = 'info';

    const itemName = document.createElement('p');
    itemName.classList = 'font-semibold text-2xl';
    itemName.textContent = 'Convers Classic';

    const itemDetails = document.createElement('div');
    itemDetails.classList = 'flex gap-x-1 text-slate-600 flex items-center';

    const colorHex = document.createElement('div');
    colorHex.classList = 'w-5 h-5 bg-black rounded-full';
    colorHex.id = 'hex';

    const colorDetails = document.createElement('div');
    colorDetails.classList = 'flex';

    const colorName = document.createElement('p');
    colorName.id = 'color-name';
    colorName.textContent = 'Black';

    const size = document.createElement('p');
    size.innerHTML = 'Size = <span id="size">42</span>';

    const qty = document.createElement('p');
    qty.innerHTML = 'Qty = <span id="quant">1</span>';

    colorDetails.appendChild(colorName);
    colorDetails.appendChild(document.createTextNode(' | '));
    colorDetails.appendChild(size);
    colorDetails.appendChild(document.createTextNode(' | '));
    colorDetails.appendChild(qty);

    itemDetails.appendChild(colorHex);
    itemDetails.appendChild(colorDetails);

    const deliveryStatus = document.createElement('div');
    deliveryStatus.classList = 'py-2 bg-slate-200 flex justify-center rounded-xl items-center w-24';
    deliveryStatus.textContent = 'In Delivery';

    const priceInfo = document.createElement('div');
    priceInfo.classList = 'flex gap-x-4 items-center';

    const price = document.createElement('p');
    price.classList = 'font-semibold text-2xl';
    price.innerHTML = '$ <span id="price">105.00</span>';

    const trackOrder = document.createElement('div');
    trackOrder.classList = 'py-2 w-28 flex items-center justify-center text-white bg-black rounded-3xl';
    trackOrder.textContent = 'Track Order';

    priceInfo.appendChild(price);
    priceInfo.appendChild(trackOrder);

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDetails);
    itemInfo.appendChild(deliveryStatus);
    itemInfo.appendChild(priceInfo);

    item.appendChild(itemImgContainer);
    item.appendChild(itemInfo);
    items.appendChild(item);
  } else {
    items.innerHTML = "";
    const item = document.createElement('div');
    item.classList = 'flex items-center gap-x-8 rounded-xl bg-white';
    item.id = 'item';

    // Create image container
    const itemImgContainer = document.createElement('div');
    itemImgContainer.classList = 'w-28 h-auto';
    itemImgContainer.id = 'img';

    const itemImg = document.createElement('img');
    itemImg.src = '../src/assets/Asics/3.jpg';
    itemImg.alt = '_';

    itemImgContainer.appendChild(itemImg);

    // Create item info container
    const itemInfo = document.createElement('div');
    itemInfo.classList = 'flex flex-col gap-y-2';
    itemInfo.id = 'info';

    const itemName = document.createElement('p');
    itemName.classList = 'font-semibold text-2xl';
    itemName.textContent = 'Convers Classic';

    const itemDetails = document.createElement('div');
    itemDetails.classList = 'flex gap-x-1 text-slate-600 flex items-center';

    const colorHex = document.createElement('div');
    colorHex.classList = 'w-5 h-5 bg-black rounded-full';
    colorHex.id = 'hex';

    const colorDetails = document.createElement('div');
    colorDetails.classList = 'flex';

    const colorName = document.createElement('p');
    colorName.id = 'color-name';
    colorName.textContent = 'Black';

    const size = document.createElement('p');
    size.innerHTML = 'Size = <span id="size">42</span>';

    const qty = document.createElement('p');
    qty.innerHTML = 'Qty = <span id="quant">1</span>';

    colorDetails.appendChild(colorName);
    colorDetails.appendChild(document.createTextNode(' | '));
    colorDetails.appendChild(size);
    colorDetails.appendChild(document.createTextNode(' | '));
    colorDetails.appendChild(qty);

    itemDetails.appendChild(colorHex);
    itemDetails.appendChild(colorDetails);

    const deliveryStatus = document.createElement('div');
    deliveryStatus.classList = 'py-2 bg-slate-200 flex justify-center rounded-xl items-center w-24';
    deliveryStatus.textContent = 'Completed';

    const priceInfo = document.createElement('div');
    priceInfo.classList = 'flex gap-x-4 items-center';

    const price = document.createElement('p');
    price.classList = 'font-semibold text-2xl';
    price.innerHTML = '$ <span id="price">105.00</span>';

    const trackOrder = document.createElement('div');
    trackOrder.classList = 'py-2 w-28 flex items-center justify-center text-white bg-black rounded-3xl';
    trackOrder.textContent = 'Buy Again';

    priceInfo.appendChild(price);
    priceInfo.appendChild(trackOrder);

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDetails);
    itemInfo.appendChild(deliveryStatus);
    itemInfo.appendChild(priceInfo);

    item.appendChild(itemImgContainer);
    item.appendChild(itemInfo);
    items.appendChild(item)
  }

  container.appendChild(items);


  const actionBar = document.createElement('div');
  actionBar.id = 'action-bar';
  actionBar.classList = 'fixed h-20 bottom-2 flex items-center left-9 gap-x-10 bg-white';

  // Create home link
  const homeLink = document.createElement('a');
  homeLink.href = '/home';

  const homeImg = document.createElement('img');
  homeImg.classList = 'w-10 h-auto';
  homeImg.src = '../src/assets/icons/home-2.png';
  homeImg.alt = '_';

  homeLink.appendChild(homeImg);
  homeLink.appendChild(document.createTextNode(' Home'));

  // Create cart link
  const cartLink = document.createElement('a');
  cartLink.href = '/cart';
  cartLink.classList = 'relative';

  const cartCount = document.createElement('div');
  cartCount.classList = 'absolute flex items-center justify-center w-6 h-6 bg-red-700 text-white rounded-full -top-4 right-0 text-center text-sm';
  cartCount.textContent = '0';

  const cartImg = document.createElement('img');
  cartImg.classList = 'w-10 h-auto';
  cartImg.src = '../src/assets/action/cart.png';
  cartImg.alt = '_';

  cartLink.appendChild(cartCount);
  cartLink.appendChild(cartImg);

  // Create order link
  const orderLink = document.createElement('a');
  orderLink.href = '/order/active';

  const orderImg = document.createElement('img');
  orderImg.classList = 'w-10 h-auto';
  orderImg.src = '../src/assets/icons/shoppi1.png';
  orderImg.alt = '_';

  orderLink.appendChild(orderImg);
  orderLink.appendChild(document.createTextNode(' Order'));

  // Create wallet link
  const walletLink = document.createElement('a');
  walletLink.href = '/wallet';

  const walletImg = document.createElement('img');
  walletImg.classList = 'w-10 h-auto';
  walletImg.src = '../src/assets/action/wallet.png';
  walletImg.alt = '_';

  walletLink.appendChild(walletImg);

  // Create profile link
  const profileLink = document.createElement('a');
  profileLink.href = '/profile';

  const profileImg = document.createElement('img');
  profileImg.classList = 'w-10 h-auto';
  profileImg.src = '../src/assets/action/profile.png';
  profileImg.alt = '_';

  profileLink.appendChild(profileImg);

  // Append all links to action bar
  actionBar.appendChild(homeLink);
  actionBar.appendChild(cartLink);
  actionBar.appendChild(orderLink);
  actionBar.appendChild(walletLink);
  actionBar.appendChild(profileLink);

  container.appendChild(actionBar);
}