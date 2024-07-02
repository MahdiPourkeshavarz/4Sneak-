import { router, routes } from "../../main";

const container = document.getElementById('app');

export function removeProductModal() {
  const modalBg = document.createElement('div');
  modalBg.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
  modalBg.id = 'modal-bg';

  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.className = 'bg-white rounded-t-[36px] overflow-hidden shadow-xl transform transition-all pb-4 absolute bottom-[0px] w-full pt-8 flex flex-col';

  // Create the title
  const modalTitle = document.createElement('p');
  modalTitle.className = 'mx-auto font-bold text-xl pb-6';
  modalTitle.textContent = 'Remove From Cart?';

  modalContainer.appendChild(modalTitle);

  // Create the item container
  const item = document.createElement('div');
  item.className = 'flex gap-x-4 pb-20 items-center mx-auto';
  item.id = 'item';

  // Create the image wrapper div
  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'bg-slate-100 px-1 rounded-xl';

  // Create the image
  const itemImg = document.createElement('img');
  itemImg.width = 142;
  itemImg.height = 'auto';
  itemImg.src = '../src/assets/Asics/2.jpg';
  itemImg.alt = '_';

  // Append the image to the image wrapper
  imgWrapper.appendChild(itemImg);

  // Create the info div
  const info = document.createElement('div');
  info.className = 'flex flex-col justify-evenly gap-y-5';
  info.id = 'info';

  // Create the top info div
  const topInfo = document.createElement('div');
  topInfo.className = 'flex items-center gap-x-5';
  topInfo.id = 'top';

  // Create the item name paragraph
  const itemName = document.createElement('p');
  itemName.className = 'text-lg font-semibold';
  itemName.id = 'name';
  itemName.textContent = 'Air jordan 3 Retro';

  // Append the item name to the top info div
  topInfo.appendChild(itemName);

  // Create the middle info div
  const middleInfo = document.createElement('div');
  middleInfo.className = 'flex items-center gap-x-2 font-semibold';
  middleInfo.id = 'middle';

  // Create the color hex div
  const colorHex = document.createElement('div');
  colorHex.className = 'w-3 h-3 bg-black rounded-full';
  colorHex.id = 'hex';

  // Create the color and size paragraph
  const colorSize = document.createElement('p');
  colorSize.innerHTML = '<span id="colorName">Black</span> | Size = <span>42</span>';

  // Append color hex and color size to the middle info div
  middleInfo.appendChild(colorHex);
  middleInfo.appendChild(colorSize);

  // Create the bottom info div
  const bottomInfo = document.createElement('div');
  bottomInfo.className = 'flex items-center gap-x-12';
  bottomInfo.id = 'bottom';

  // Create the price paragraph
  const price = document.createElement('p');
  price.className = 'text-xl font-semibold';
  price.innerHTML = '$ <span id="price">125.00</span>';

  // Create the quantity div
  const quantityDiv = document.createElement('div');
  quantityDiv.className = 'py-2 px-3 bg-slate-100 text-xl font-semibold flex gap-x-3 rounded-2xl justify-center';
  quantityDiv.id = 'quant';

  // Create the quantity paragraph
  const quantity = document.createElement('p');
  quantity.id = 'quantity';
  quantity.textContent = '1';

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

  modalContainer.appendChild(item)

  // Create the footer container
  const modalFooter = document.createElement('div');
  modalFooter.className = 'bg-gray-50 w-full pb-6 flex flex-row-reverse';

  // Create the "Yes, Remove" button
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'w-44 inline-flex justify-center rounded-3xl border border-transparent shadow-sm py-4 bg-slate-950 text-base font-medium text-white mx-auto';
  removeButton.id = 'remove-button';
  removeButton.textContent = 'Yes, Remove';

  // Create the "Cancel" button
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'w-44 inline-flex justify-center rounded-3xl border border-gray-300 shadow-sm py-4 bg-slate-200 text-base font-bold text-gray-700 mx-auto';
  cancelButton.id = 'Cancel-button';
  cancelButton.textContent = "Cancel"

  modalFooter.appendChild(removeButton);
  modalFooter.appendChild(cancelButton);

  modalContainer.appendChild(modalFooter);

  modalBg.appendChild(modalContainer);

  document.body.appendChild(modalBg);

  cancelButton.addEventListener('click', () => {
    modalBg.classList.add('hidden');
    router.navigate(routes.cart);
  })
}