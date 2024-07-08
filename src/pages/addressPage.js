import axios from "axios";
import { router, routes } from "../../main";
import { ADDRESS_URL, CHECKOUT_URL, isAuthenticated } from "../services/links";

const container = document.getElementById('app');

export async function addressPage() {
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

  const shippingTitle = document.createElement('p');
  shippingTitle.classList = 'font-bold text-2xl';
  shippingTitle.textContent = 'Shipping Address';


  top.appendChild(prevIcon);
  top.appendChild(shippingTitle);
  container.appendChild(top);


  const adds = document.createElement('div');
  adds.classList = 'grid grid-cols-1 px-6 gap-y-6 mt-8';
  adds.id = 'adds';

  container.appendChild(adds);

  const addNewAddressButton = document.createElement('button');
  addNewAddressButton.classList = 'mt-28 py-4 mx-auto bg-slate-300 w-72 rounded-3xl';
  addNewAddressButton.textContent = 'Add new Address';

  const applyButton = document.createElement('button');
  applyButton.classList = 'absolute bottom-4 py-4 left-14 bg-slate-900 text-white w-80 rounded-3xl';
  applyButton.textContent = 'Apply';

  container.appendChild(addNewAddressButton);
  container.appendChild(applyButton);

  fetchAddress();

  prevIcon.addEventListener('click', () => {
    router.navigate(routes.finalcheckout)
  })

  let addItemId = 1;
  adds.addEventListener('click', (e) => {
    addItemId = e.target.id;
  })

  applyButton.addEventListener('click', async () => {
    let result = "";
    try {
      const res = await axios.get(`${ADDRESS_URL}/${addItemId}`);
      result = res.data;
    } catch (e) {
      throw new Error('failed to fetch', e)
    }
    if (result) {
      try {
        const resp = await axios.patch(CHECKOUT_URL, {
          address: result
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        router.navigate(routes.finalcheckout);
      } catch (e) {
        throw new Error('failed to update checkout', e);
      }
    }
  })
}


async function fetchAddress() {
  const adds = document.getElementById('adds')
  const createItem = (type, address, id, isDefault) => {
    const item = document.createElement('div');
    item.classList = 'flex px-2 h-20 w-max py-2 rounded-2xl bg-white items-center justify-between w-[375px]';
    item.id = 'item';

    const locationIcon = document.createElement('img');
    locationIcon.classList = 'w-16 h-16';
    locationIcon.src = '../src/assets/icons/location.png';
    locationIcon.alt = '_';

    const info = document.createElement('div');
    info.classList = 'flex-col flex gap-y-2';

    const infoTop = document.createElement('div');
    infoTop.classList = 'flex gap-x-2 items-center';

    const itemName = document.createElement('p');
    itemName.classList = 'font-semibold text-2xl';
    itemName.textContent = type;

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
    itemAddress.textContent = address;

    info.appendChild(infoTop);
    info.appendChild(itemAddress);

    const contentWrapper = document.createElement('div');
    contentWrapper.classList = 'flex items-center gap-x-3';
    contentWrapper.appendChild(locationIcon);
    contentWrapper.appendChild(info);

    const radioButton = document.createElement('input');
    radioButton.classList = 'custom-radio';
    radioButton.type = 'radio';
    radioButton.name = 'add';
    if (isDefault) {
      radioButton.checked = true;
    }
    radioButton.id = `${id}`;

    item.appendChild(contentWrapper);
    item.appendChild(radioButton);

    return item;
  };

  let results = '';
  try {
    const response = await fetch(ADDRESS_URL);
    results = await response.json();
    if (results) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      results.forEach((item) => {
        if (item.name === 'Home') {
          adds.appendChild(createItem(item.name, item.address, item.id, true))
        } else {
          adds.appendChild(createItem(item.name, item.address, item.id, false))
        }
      })
    }
  } catch (e) {
    throw new Error('failed to fetch', e);
  }
}