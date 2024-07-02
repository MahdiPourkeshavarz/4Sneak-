import { router, routes } from "../../main";


export function successfulOrderModal() {
  const modalBg = document.createElement('div');
  modalBg.classList = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
  modalBg.id = 'modal-bg';

  const modalContainer = document.createElement('div');
  modalContainer.classList = 'bg-white rounded-[36px] overflow-hidden shadow-xl transform transition-all pb-4';

  const modalContent = document.createElement('div');
  modalContent.classList = 'px-4 pt-5 pb-4 sm:p-6 sm:pb-4';

  const modalContentFlex = document.createElement('div');
  modalContentFlex.classList = 'sm:flex sm:items-start';

  const successIconContainer = document.createElement('div');
  successIconContainer.classList = 'mx-auto flex-shrink-0 flex items-center justify-center h-32 w-32 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10';

  const successIcon = document.createElement('img');
  successIcon.src = '../src/assets/icons/ordersuccess.png';
  successIcon.alt = '_';

  successIconContainer.appendChild(successIcon);

  const modalTextContainer = document.createElement('div');
  modalTextContainer.classList = 'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left';

  const modalTitle = document.createElement('p');
  modalTitle.classList = 'text-2xl leading-6 font-medium text-gray-900';
  modalTitle.id = 'modal-title';
  modalTitle.textContent = 'Order Successful';

  const modalDescription = document.createElement('p');
  modalDescription.classList = 'pt-4 text-lg text-slate-600';
  modalDescription.textContent = 'You have Successfully made Order';

  modalTextContainer.appendChild(modalTitle);
  modalTextContainer.appendChild(modalDescription);

  modalContentFlex.appendChild(successIconContainer);
  modalContentFlex.appendChild(modalTextContainer);

  modalContent.appendChild(modalContentFlex);

  // Create modal footer with buttons
  const modalFooter = document.createElement('div');
  modalFooter.classList = 'bg-gray-50 w-full py-3 flex flex-col';

  const viewOrderButton = document.createElement('button');
  viewOrderButton.type = 'button';
  viewOrderButton.classList = 'w-60 inline-flex justify-center rounded-2xl border border-transparent shadow-sm py-2 bg-slate-800 text-base font-medium text-white mx-auto';
  viewOrderButton.id = 'view-order-button';
  viewOrderButton.textContent = 'View Order';

  const viewHomeButton = document.createElement('button');
  viewHomeButton.type = 'button';
  viewHomeButton.classList = 'mt-3 w-60 inline-flex justify-center rounded-2xl border border-gray-300 shadow-sm px-4 py-2 bg-slate-200 text-base font-medium text-gray-700 mx-auto';
  viewHomeButton.id = 'view-receipt-button';
  viewHomeButton.textContent = 'Browse More';

  modalFooter.appendChild(viewOrderButton);
  modalFooter.appendChild(viewHomeButton);


  modalContainer.appendChild(modalContent);
  modalContainer.appendChild(modalFooter);

  modalBg.appendChild(modalContainer);

  document.body.appendChild(modalBg);

  viewOrderButton.addEventListener('click', () => {
    router.navigate(routes.orders);
    modalBg.classList.add('hidden');
  })

  viewHomeButton.addEventListener('click', () => {
    router.navigate(routes.home);
    modalBg.classList.add('hidden');
  })
}