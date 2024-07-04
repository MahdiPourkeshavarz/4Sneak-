import { router, routes } from "../../main";

const container = document.getElementById('app');

export function paymentPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8 bg-slate-50';

  const topDiv = document.createElement('div');
  topDiv.classList.add('flex', 'items-center', 'mt-16');
  topDiv.id = 'top';

  // Create the image element
  const prevIcon = document.createElement('img');
  prevIcon.classList.add('w-24', 'h-16');
  prevIcon.src = '../src/assets/icons/prev icon.png';
  prevIcon.alt = '_';

  // Create the paragraph element
  const paragraph = document.createElement('p');
  paragraph.classList.add('font-semibold', 'text-3xl');
  paragraph.textContent = 'Payment Method';

  // Append the image and paragraph to the parent div
  topDiv.appendChild(prevIcon);
  topDiv.appendChild(paragraph);

  container.appendChild(topDiv);

  const itemsDiv = document.createElement('div');
  itemsDiv.classList.add('flex', 'flex-col', 'gap-y-6', 'px-6');
  itemsDiv.id = 'items';

  // Data for each item
  const paymentMethods = [
    { src: '../src/assets/icons/wallet.png', text: 'My Wallet', amount: '$9.37' },
    { src: '../src/assets/icons/google.png', text: 'Google Pay' },
    { src: '../src/assets/icons/apple.png', text: 'Apple Pay' },
    { src: '../src/assets/icons/master-card.png', text: 'Master Card' },
    { src: '../src/assets/icons/paypa.png', text: 'PayPal' },
  ];

  // Function to create an item element
  function createItem(paymentMethod) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('flex', 'py-1', 'items-center', 'h-20', 'bg-white', 'rounded-2xl', 'relative', 'justify-between', 'pr-8');
    itemDiv.id = 'item';
    const leftDiv = document.createElement('div');
    leftDiv.classList = "flex items-center";
    const img = document.createElement('img');
    img.classList.add('pl-2');
    img.src = paymentMethod.src;
    img.alt = '_';

    const text = document.createElement('p');
    text.classList.add('pl-2', 'font-semibold', 'text-xl');
    text.textContent = paymentMethod.text;

    leftDiv.appendChild(img);
    leftDiv.appendChild(text);

    const rightDiv = document.createElement('div');
    rightDiv.classList = "flex items-center"

    if (paymentMethod.amount) {
      const amount = document.createElement('p');
      amount.classList.add('pl-28', 'font-semibold', 'text-xl');
      amount.textContent = paymentMethod.amount;
      rightDiv.appendChild(amount);
    }

    const input = document.createElement('input');
    input.classList.add('absolute', '-right-6', 'custom-radio');
    input.type = 'radio';
    input.name = 'payment';

    rightDiv.appendChild(input);

    itemDiv.appendChild(leftDiv);
    itemDiv.appendChild(rightDiv);

    return itemDiv;
  }

  // Create and append each item to the parent div
  // biome-ignore lint/complexity/noForEach: <explanation>
  paymentMethods.forEach(method => {
    const item = createItem(method);
    itemsDiv.appendChild(item);
  });

  container.appendChild(itemsDiv);

  const button = document.createElement('button');
  button.classList.add(
    'mt-36', 'mb-8', 'h-16', 'w-80', 'mx-auto',
    'rounded-full', 'bg-slate-900', 'text-white',
    'text-xl', 'font-semibold', 'flex', 'items-center',
    'justify-center'
  );
  button.textContent = 'Continue to Payment';

  container.appendChild(button);
  button.addEventListener('click', () => {
    router.navigate(routes.home);
    router.navigate(routes.successModal);
  })

  prevIcon.addEventListener('click', () => {
    router.navigate(routes.home);
  })
}