
import { router, routes } from "../../main";
import { CART_URL, CHECKOUT_URL, isAuthenticated } from "../services/links";
import { removeProductModal } from "./removeProductModal";

let totalPrice = 0;

export function cartPage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
  totalPrice = 0;
  const container = document.getElementById('app');
  container.innerHTML = "";
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

  container.appendChild(items);

  const checkout = document.createElement('div');
  checkout.classList = 'fixed bottom-16 h-28 w-full border-t-2 border-solid border-slate-200 px-4 flex justify-around bg-white';
  checkout.id = 'Checkout';

  const checkoutPrice = document.createElement('div');
  checkoutPrice.classList = 'flex flex-col text-center mt-3 mr-2';
  checkoutPrice.id = 'price';

  const totalPriceLabel = document.createElement('p');
  totalPriceLabel.classList = 'text-lg font-semibold';
  totalPriceLabel.textContent = 'Total Price';

  const totalPriceValue = document.createElement('p');
  totalPriceValue.classList = 'text-2xl font-bold';
  totalPriceValue.id = 'total-price';
  totalPriceValue.textContent = '$ 240.00';

  checkoutPrice.appendChild(totalPriceLabel);
  checkoutPrice.appendChild(totalPriceValue);

  const checkoutButton = document.createElement('button');
  checkoutButton.classList = 'bg-slate-900 cursor-pointer h-16 pl-10 mt-4 pr-12 justify-center rounded-3xl flex items-center text-white gap-x-2 text-xl mr-4';

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
  actionBar.className = 'fixed h-20 bottom-0 flex items-center left-9 gap-x-10 bg-white';
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
  fetchCartProducts();

  checkoutButton.addEventListener('click', async () => {
    let result = "";
    try {
      const response = await fetch(CART_URL);
      result = await response.json();
    } catch (e) {
      throw new Error('failed to fetch', e);
    }
    if (result) {
      const res = await fetch(CHECKOUT_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: result
        })
      })
    }
    router.navigate(routes.finalcheckout)
  })

}

export async function fetchCartProducts() {
  const items = document.getElementById('items');
  items.innerHTML = "";
  let result = ""
  try {
    const response = await fetch(CART_URL);
    result = await response.json();
    console.log(result);
  } catch (e) {
    throw new Error('failed to fetch', e);
  }

  if (result) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    result.forEach((product) => {
      const item = document.createElement('div');
      item.classList = 'flex gap-x-4 p-2 items-center';
      item.id = 'item';

      const itemImageContainer = document.createElement('div');
      itemImageContainer.classList = 'bg-slate-100 px-1 rounded-xl';

      const itemImage = document.createElement('img');
      itemImage.width = 142;
      itemImage.height = 'auto';
      itemImage.src = product.imgUrl;
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
      itemName.textContent = product.name;

      const binIcon = document.createElement('img');
      binIcon.src = '../src/assets/icons/bin.png';
      binIcon.alt = '_';

      topInfo.appendChild(itemName);
      topInfo.appendChild(binIcon);

      const middleInfo = document.createElement('div');
      middleInfo.classList = 'flex items-center gap-x-2 font-semibold';
      middleInfo.id = 'middle';

      const colorHex = document.createElement('div');
      colorHex.classList = 'w-3 h-3 rounded-full';
      colorHex.classList.add(product.hexCode)
      colorHex.id = 'hex';

      const colorText = document.createElement('p');
      colorText.innerHTML = `<span id="colorName">${product.color}</span> | Size = <span id="size">${product.size}</span>`;

      middleInfo.appendChild(colorHex);
      middleInfo.appendChild(colorText);

      const bottomInfo = document.createElement('div');
      bottomInfo.classList = 'flex items-center gap-x-12';
      bottomInfo.id = 'bottom';

      const priceText = document.createElement('p');
      priceText.classList = 'text-lg font-semibold';
      priceText.innerHTML = `$ <span id="price-${product.id}">${product.price}</span>`;


      const quantityControl = document.createElement('div');
      quantityControl.classList = 'py-2 px-3 bg-slate-100 text-xl font-semibold flex gap-x-3 rounded-2xl justify-center';


      const decrement = document.createElement('p');
      decrement.textContent = '-';
      decrement.id = 'decrement'

      const quantityValue = document.createElement('p');
      quantityValue.textContent = `${product.quantity}`;
      quantityValue.id = `quant-${product.id}`;

      const increment = document.createElement('p');
      increment.textContent = '+';
      increment.id = 'increment'

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

      totalPrice += ((product.price * product.quantity) / 2);
      const total = document.getElementById('total-price');
      total.innerText = `$ ${totalPrice}.00`;

      binIcon.addEventListener('click', () => {
        removeProductModal(product.id);
      })

      increment.addEventListener('click', (e) => {
        totalPrice += product.price;
        total.innerText = `$ ${totalPrice}.00`;
      })

      decrement.addEventListener('click', () => {
        totalPrice -= product.price;
        total.innerText = `$ ${totalPrice}.00`;
      })
      let quan = product.quantity;
      quantityControl.addEventListener('click', async (e) => {
        if (e.target.id === 'increment') {
          quan += 1;
          const numb = document.getElementById(`quant-${product.id}`);
          numb.innerHTML++;
          const res = await fetch(`${CART_URL}/${product.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity: quan
            })
          })
        } else if (e.target.id === 'decrement') {
          const numb = document.getElementById(`quant-${product.id}`);
          if (numb.innerHTML > 1) {
            quan -= 1;
            numb.innerHTML--;
            const res = await fetch(`${CART_URL}/${product.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                quantity: quan
              })
            })
          } else {
            return;
          }
        }
      })
    })
  }
}

