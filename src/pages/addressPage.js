
const container = document.getElementById('app');

export function addressPage() {
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


  const adds = document.createElement('div');
  adds.classList = 'grid grid-cols-1 px-6 gap-y-6 mt-8';
  adds.id = 'adds';


  const createItem = (type, address, isDefault) => {
    const item = document.createElement('div');
    item.classList = 'flex gap-x-3 px-2 h-20 w-max py-2 rounded-2xl bg-white';
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

    const radioButton = document.createElement('input');
    radioButton.classList = 'w-6 ml-8 border-solid border-2 border-slate-600 antialiased peer';
    radioButton.type = 'radio';
    radioButton.name = 'add';
    radioButton.id = 'add';

    item.appendChild(locationIcon);
    item.appendChild(info);
    item.appendChild(radioButton);

    return item;
  };

  adds.appendChild(createItem('Home', '61480 Sunbrook Park, PC 5679', true));
  adds.appendChild(createItem('Office', '61480 Sunbrook Park, PC 5679', false));

  const addNewAddressButton = document.createElement('button');
  addNewAddressButton.classList = 'mt-28 py-4 mx-auto bg-slate-300 w-72 rounded-3xl';
  addNewAddressButton.textContent = 'Add new Address';

  const applyButton = document.createElement('button');
  applyButton.classList = 'absolute bottom-4 py-4 left-14 bg-slate-900 text-white w-80 rounded-3xl';
  applyButton.textContent = 'Apply';

  container.appendChild(top);
  container.appendChild(adds);
  container.appendChild(addNewAddressButton);
  container.appendChild(applyButton);
}