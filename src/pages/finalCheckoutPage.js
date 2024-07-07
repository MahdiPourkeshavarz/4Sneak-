import { add } from "lodash";
import { router, routes } from "../../main";
import { CART_URL, CHECKOUT_URL } from "../services/links";

const container = document.getElementById('app');

export async function finalCheckoutPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8';

  // Create the top div
  const top = document.createElement('div');
  top.classList = 'flex items-center h-14 mt-10';
  top.id = 'top';

  const prevIcon = document.createElement('img');
  prevIcon.classList = 'w-24 h-auto';
  prevIcon.src = '../src/assets/icons/prev icon.png';
  prevIcon.alt = '_';

  const topText = document.createElement('p');
  topText.classList = 'font-bold text-3xl pb-1';
  topText.textContent = 'Checkout';

  const topImg2 = document.createElement('img');
  topImg2.classList = 'pl-32';
  topImg2.src = '../src/assets/icons/top-more.png';
  topImg2.alt = '_';

  // Append top images and text to top div
  top.appendChild(prevIcon);
  top.appendChild(topText);
  top.appendChild(topImg2);
  container.appendChild(top);

  // Create the shipping address section
  const addressSection = document.createElement('div');
  addressSection.classList = 'flex flex-col gap-y-6 px-6';
  addressSection.id = "address-section"

  const addressTitle = document.createElement('p');
  addressTitle.classList = 'px-4 text-2xl font-bold';
  addressTitle.textContent = 'Shipping Address';

  // Append shipping title and item to shipping section
  addressSection.appendChild(addressTitle);
  container.appendChild(addressSection)


  const itemsSection = document.createElement('div');
  itemsSection.classList = 'flex px-6 flex-col gap-y-10';
  itemsSection.id = 'items';

  container.appendChild(itemsSection)

  const shippingSection = document.createElement('div');
  shippingSection.classList = 'flex flex-col gap-y-6 px-6';
  shippingSection.id = "ship-section"

  // Create the title paragraph
  const shippingTitle = document.createElement('p');
  shippingTitle.classList = 'px-4 text-2xl font-bold';
  shippingTitle.textContent = 'Choose Shipping';


  shippingSection.appendChild(shippingTitle);
  container.appendChild(shippingSection);

  const registry = document.createElement('div');
  registry.classList = 'w-96 mx-auto py-2 flex flex-col gap-y-4 border-solid border-2 border-slate-100 rounded-2xl';
  registry.id = 'registery';

  // Function to create an amount row
  function createAmountRow(label, amount) {
    const row = document.createElement('div');
    row.classList = 'flex w-full justify-between px-8';
    row.id = 'row';

    const labelParagraph = document.createElement('p');
    labelParagraph.classList = 'font-semibold text-lg text-slate-700';
    labelParagraph.textContent = label;

    const amountParagraph = document.createElement('p');
    amountParagraph.classList = 'font-bold';
    amountParagraph.id = label;
    amountParagraph.textContent = `$ ${amount}`;

    row.appendChild(labelParagraph);
    row.appendChild(amountParagraph);

    return row;
  }

  let p = 0;
  let addp = 10;
  try {
    const response = await fetch(CHECKOUT_URL);
    const data = await response.json();
    if (data) {
      const { items, ship, address } = data
      // biome-ignore lint/complexity/noForEach: <explanation>
      items.forEach((product) => {
        p += (product.quantity * product.price)
        console.log(p);
      })
      addp = ship.price;
      console.log(addp)
    }
    registry.appendChild(createAmountRow('Amount', `${p}.00`));
    registry.appendChild(createAmountRow('Shipping', `${addp}.00`));
    const totalRow = createAmountRow('Total', `${p + addp}.00`);
    totalRow.classList = 'flex w-full justify-between px-8 mt-4';
    registry.appendChild(totalRow);
  } catch (e) {
    console.log(e)
  }

  container.appendChild(registry);

  // Create the button
  const button = document.createElement('button');
  button.classList = 'mt-8 mb-8 h-16 w-80 mx-auto rounded-full bg-slate-900 text-white text-xl font-semibold flex items-center justify-center';
  button.textContent = 'Continue to Payment';

  // Create the button image
  const buttonImg = document.createElement('img');
  buttonImg.classList = 'w-8 h-6';
  buttonImg.src = '../src/assets/icons/gocheckout.png';
  buttonImg.alt = '_';

  // Append the image to the button
  button.appendChild(buttonImg);
  container.appendChild(button);

  fetchCheckoutDetail();

  button.addEventListener('click', () => {
    router.navigate(routes.payment);
  })

  prevIcon.addEventListener('click', () => {
    router.navigate(routes.cart);
  })

}

async function fetchCheckoutDetail() {
  const itemsSection = document.getElementById('items');
  const shippingSection = document.getElementById('ship-section')
  const addressSection = document.getElementById('address-section')
  let res = "";
  try {
    const response = await fetch(CHECKOUT_URL);
    res = await response.json()
  } catch (e) {
    throw new Error('failed to fetch', e)
  }
  if (res) {
    const { items, ship, address } = res;
    // biome-ignore lint/complexity/noForEach: <explanation>
    items.forEach((product) => {
      // Create the item div
      const item = document.createElement('div');
      item.classList = 'flex gap-x-4 p-2 items-center';
      item.id = 'item';

      // Create the image wrapper div
      const imgWrapper = document.createElement('div');
      imgWrapper.classList = 'bg-slate-100 px-1 rounded-xl';

      // Create the image
      const itemImg = document.createElement('img');
      itemImg.width = 142;
      itemImg.height = 'auto';
      itemImg.src = product.imgUrl;
      itemImg.alt = '_';

      // Append the image to the image wrapper
      imgWrapper.appendChild(itemImg);

      // Create the info div
      const info = document.createElement('div');
      info.classList = 'flex flex-col justify-evenly gap-y-5';
      info.id = 'info';

      // Create the top info div
      const topInfo = document.createElement('div');
      topInfo.classList = 'flex items-center gap-x-5';
      topInfo.id = 'top';

      // Create the item name paragraph
      const itemName = document.createElement('p');
      itemName.classList = 'text-lg font-semibold';
      itemName.id = 'name';
      itemName.textContent = product.name;

      // Append the item name to the top info div
      topInfo.appendChild(itemName);

      // Create the middle info div
      const middleInfo = document.createElement('div');
      middleInfo.classList = 'flex items-center gap-x-2 font-semibold';
      middleInfo.id = 'middle';

      // Create the color hex div
      const colorHex = document.createElement('div');
      colorHex.classList = 'w-3 h-3 rounded-full';
      colorHex.classList.add(product.hexCode)
      colorHex.id = 'hex';

      // Create the color and size paragraph
      const colorSize = document.createElement('p');
      colorSize.innerHTML = `<span id="colorName">${product.color}</span> | Size = <span>${product.size}</span>`;

      // Append color hex and color size to the middle info div
      middleInfo.appendChild(colorHex);
      middleInfo.appendChild(colorSize);

      // Create the bottom info div
      const bottomInfo = document.createElement('div');
      bottomInfo.classList = 'flex items-center gap-x-12';
      bottomInfo.id = 'bottom';

      // Create the price paragraph
      const priceValue = product.price * product.quantity
      const price = document.createElement('p');
      price.classList = 'text-xl font-semibold';
      price.innerHTML = `$ <span id="price">${priceValue}.00</span>`;

      // Create the quantity div
      const quantityDiv = document.createElement('div');
      quantityDiv.classList = 'py-2 px-3 bg-slate-100 text-xl font-semibold flex gap-x-3 rounded-2xl justify-center';
      quantityDiv.id = 'quant';

      // Create the quantity paragraph
      const quantity = document.createElement('p');
      quantity.id = 'quantity';
      quantity.textContent = `${product.quantity}`;

      // Append the quantity paragraph to the quantity div
      quantityDiv.appendChild(quantity);

      // Append the price and quantity div to the bottom info div
      bottomInfo.appendChild(price);
      bottomInfo.appendChild(quantityDiv);

      // Append top, middle, and bottom info divs to the info div
      info.appendChild(topInfo);
      info.appendChild(middleInfo);
      info.appendChild(bottomInfo);

      // Append image wrapper and info div to the item div
      item.appendChild(imgWrapper);
      item.appendChild(info);

      // Append the item div to the items section
      itemsSection.appendChild(item);
    })

    if (address) {
      const addressItem = document.createElement('div');
      addressItem.classList = 'flex gap-x-3 px-2 h-20 w-[365px] py-2 rounded-2xl bg-white justify-between';
      addressItem.id = 'add-item';

      const addressImg2 = document.createElement('img');
      addressImg2.classList = 'w-16 h-16';
      addressImg2.src = '../src/assets/icons/location.png';
      addressImg2.alt = '_';

      const addressInfo = document.createElement('div');
      addressInfo.classList = 'flex-col flex gap-y-2';

      const addressInfoTop = document.createElement('div');
      addressInfoTop.classList = 'flex gap-x-2 items-center';

      const addressType2 = document.createElement('p');
      addressType2.classList = 'font-semibold text-2xl';
      addressType2.textContent = address.name;

      const shippingAddress = document.createElement('p');
      shippingAddress.classList = 'text-slate-600';
      shippingAddress.id = 'address';
      shippingAddress.textContent = address.address;

      const shippingAddressMoreImg = document.createElement('img');
      shippingAddressMoreImg.classList = 'w-8 h-8 mt-4';
      shippingAddressMoreImg.src = '../src/assets/icons/edit.png';
      shippingAddressMoreImg.alt = '_';

      // Append everything to the shipping item
      addressInfoTop.appendChild(addressType2);
      addressInfo.appendChild(addressInfoTop);
      addressInfo.appendChild(shippingAddress);
      addressItem.appendChild(addressImg2);
      addressItem.appendChild(addressInfo);
      addressItem.appendChild(shippingAddressMoreImg);

      addressSection.appendChild(addressItem);
      shippingAddressMoreImg.addEventListener('click', () => {
        router.navigate(routes.address);
      })
    }

    if (ship) {
      const shipItem = document.createElement('div');
      shipItem.classList = 'flex gap-x-3 px-2 h-20 w-[365px] py-2 rounded-2xl bg-white justify-between';
      shipItem.id = 'ship-item';

      // Create the image
      const shippingImg = document.createElement('img');
      shippingImg.classList = 'w-16 h-16';
      shippingImg.src = ship.icon;
      shippingImg.alt = '_';
      shippingImg.id = `${ship.price}`;

      // Create the info div
      const shipInfo = document.createElement('div');
      shipInfo.classList = 'flex-col flex gap-y-2';

      // Create the top info div
      const shipTopInfo = document.createElement('div');
      shipTopInfo.classList = 'flex gap-x-2 items-center';

      // Create the shipping type paragraph
      const shippingType = document.createElement('p');
      shippingType.classList = 'font-semibold text-2xl';
      shippingType.textContent = ship.name;

      // Append the shipping type to the top info div
      shipTopInfo.appendChild(shippingType);

      // Create the address paragraph
      const time = document.createElement('p');
      time.classList = 'text-slate-600';
      time.id = 'address';
      time.textContent = ship.description;

      // Append the top info and address to the info div
      shipInfo.appendChild(shipTopInfo);
      shipInfo.appendChild(time);

      // Create the more options image
      const moreImg = document.createElement('img');
      moreImg.classList = 'w-8 h-8 mt-4 ml-2';
      moreImg.src = '../src/assets/icons/edit.png';
      moreImg.alt = '_';

      // Append the image, info div, and more options image to the item div
      shipItem.appendChild(shippingImg);
      shipItem.appendChild(shipInfo);
      shipItem.appendChild(moreImg);

      shippingSection.appendChild(shipItem);

      moreImg.addEventListener('click', () => {
        router.navigate(routes.ship);
      })
    }

  }
}