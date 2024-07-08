import { router, routes } from "../../main";
import { CHECKOUT_URL, SHIPMENT_URL, isAuthenticated } from "../services/links";

const container = document.getElementById('app');

export function shipmentPage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-[930px] bg-slate-50';

  const top = document.createElement('div');
  top.classList = 'flex items-center gap-x-1 mt-10';
  top.id = 'top';

  const prevIcon = document.createElement('img');
  prevIcon.classList = 'w-20 h-auto';
  prevIcon.src = '../src/assets/icons/prev icon.png';
  prevIcon.alt = '_';

  const topText = document.createElement('p');
  topText.classList = 'font-bold text-2xl';
  topText.textContent = 'Choose Shipping Method';


  top.appendChild(prevIcon);
  top.appendChild(topText);

  container.appendChild(top);


  const ships = document.createElement('div');
  ships.classList = 'grid grid-cols-1 px-6 gap-y-6 mt-8';
  ships.id = 'ships';

  container.appendChild(ships);

  const applyButton = document.createElement('button');
  applyButton.classList = 'absolute bottom-6 py-4 left-14 bg-slate-900 text-white w-80 rounded-3xl';
  applyButton.textContent = 'Apply';

  ships.appendChild(applyButton);

  fetchShipmentMethods();
  prevIcon.addEventListener('click', () => {
    router.navigate(routes.finalcheckout)
  })
  let shipItemId = 1;
  ships.addEventListener('click', (e) => {
    shipItemId = e.target.id
  })

  applyButton.addEventListener('click', async () => {
    let result = "";
    try {
      const res = await fetch(`${SHIPMENT_URL}/${shipItemId}`)
      result = await res.json();
    } catch (e) {
      throw new Error('failed to fetch', e)
    }
    if (result) {
      const resp = await fetch(CHECKOUT_URL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ship: result
        })
      })
      router.navigate(routes.finalcheckout)
    }
  })
}

async function fetchShipmentMethods() {
  const ships = document.getElementById('ships')
  const createShippingItem = (name, price, description, imgSrc, id, isDefault) => {
    const item = document.createElement('div');
    item.classList = 'flex px-2 h-20 w-max py-2 rounded-2xl bg-white items-center justify-between w-[380px]';
    item.id = 'item';

    const locationIcon = document.createElement('img');
    locationIcon.classList = 'w-16 h-16';
    locationIcon.src = imgSrc;
    locationIcon.alt = '_';

    const info = document.createElement('div');
    info.classList = 'flex-col flex gap-y-2';

    const infoTop = document.createElement('div');
    infoTop.classList = 'flex gap-x-2 items-center';

    const itemName = document.createElement('p');
    itemName.classList = 'font-semibold text-2xl';
    itemName.textContent = name;

    infoTop.appendChild(itemName);

    if (isDefault) {
      const defaultLabel = document.createElement('div');
      defaultLabel.classList = 'p-1 bg-slate-100 rounded-lg';
      defaultLabel.textContent = 'Default';
      infoTop.appendChild(defaultLabel);
    }

    const itemAddress = document.createElement('p');
    itemAddress.classList = 'text-slate-600';
    itemAddress.id = 'address';
    itemAddress.textContent = description;

    info.appendChild(infoTop);
    info.appendChild(itemAddress);

    const contentWrapperRight = document.createElement('div');
    contentWrapperRight.classList = 'flex items-center gap-x-3';
    contentWrapperRight.appendChild(locationIcon);
    contentWrapperRight.appendChild(info);

    const contentWrapperLeft = document.createElement('div');
    contentWrapperLeft.classList = 'flex items-center gap-x-1';

    const itemPrice = document.createElement('p');
    itemPrice.classList = 'font-semibold text-xl';
    itemPrice.innerHTML = `$ <span id="price">${price}</span>`;

    const radioButton = document.createElement('input');
    radioButton.classList = 'custom-radio';
    radioButton.type = 'radio';
    radioButton.name = 'add';
    radioButton.id = `${id}`;

    contentWrapperLeft.appendChild(itemPrice);
    contentWrapperLeft.appendChild(radioButton);

    item.appendChild(contentWrapperRight);
    item.appendChild(contentWrapperLeft);

    return item;
  };

  let results = '';
  try {
    const response = await fetch(SHIPMENT_URL);
    results = await response.json();
    if (results) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      results.forEach((item) => {
        if (item.name === 'Economy') {
          ships.appendChild(createShippingItem(item.name, item.price, item.description, item.icon, item.id, true))
        } else {
          ships.appendChild(createShippingItem(item.name, item.price, item.description, item.icon, item.id, false))
        }
      })
    }
  } catch (e) {
    throw new Error('failed to fetch', e);
  }
}