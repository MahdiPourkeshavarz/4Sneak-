
const container = document.getElementById('app');

export function shipmentPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-[930px] bg-slate-50';

  const top = document.createElement('div');
  top.classList = 'flex items-center gap-x-1 mt-10';
  top.id = 'top';

  const topImg = document.createElement('img');
  topImg.classList = 'w-20 h-auto';
  topImg.src = '../src/assets/icons/prev icon.png';
  topImg.alt = '_';

  const topText = document.createElement('p');
  topText.classList = 'font-bold text-2xl';
  topText.textContent = 'Choose Shipping Method';


  top.appendChild(topImg);
  top.appendChild(topText);


  const adds = document.createElement('div');
  adds.classList = 'grid grid-cols-1 px-6 gap-y-6 mt-8';
  adds.id = 'adds';


  function createShippingItem(type, description, price, imgSrc) {
    const item = document.createElement('div');
    item.classList = 'flex gap-x-2 px-2 h-20 w-max py-2 rounded-2xl bg-white items-center';
    item.id = 'item';

    const itemImg = document.createElement('img');
    itemImg.classList = 'w-16 h-16 mr-1';
    itemImg.src = imgSrc;
    itemImg.alt = '_';

    const info = document.createElement('div');
    info.classList = 'flex-col flex gap-y-2';

    const infoTop = document.createElement('div');
    infoTop.classList = 'flex gap-x-2 items-center';

    const itemType = document.createElement('p');
    itemType.classList = 'font-semibold text-2xl';
    itemType.textContent = type;

    const itemDescription = document.createElement('p');
    itemDescription.classList = 'text-slate-600';
    itemDescription.id = 'address';
    itemDescription.textContent = description;

    const itemPrice = document.createElement('p');
    itemPrice.classList = 'font-semibold text-xl';
    itemPrice.innerHTML = `$ <span id="price">${price}</span>`;

    const radioButton = document.createElement('input');
    radioButton.classList = 'resize border-solid border-2 border-slate-600 antialiased before:content[\'\'] peer';
    radioButton.type = 'radio';
    radioButton.name = 'add';
    radioButton.id = 'add';

    infoTop.appendChild(itemType);
    info.appendChild(infoTop);
    info.appendChild(itemDescription);

    item.appendChild(itemImg);
    item.appendChild(info);
    item.appendChild(itemPrice);
    item.appendChild(radioButton);

    return item;
  }


  const economyItem = createShippingItem('Economy', 'estimated for 2 business days', 15, '../src/assets/chooseshipping/1.png');
  const vipItem = createShippingItem('Vip', 'estimated for 2 business days', 20, '../src/assets/chooseshipping/1.png');


  adds.appendChild(economyItem);
  adds.appendChild(vipItem);


  const applyButton = document.createElement('button');
  applyButton.classList = 'absolute bottom-6 py-4 left-14 bg-slate-900 text-white w-80 rounded-3xl';
  applyButton.textContent = 'Apply';


  adds.appendChild(applyButton);


  container.appendChild(top);
  container.appendChild(adds);
}