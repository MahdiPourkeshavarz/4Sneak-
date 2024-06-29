
const container = document.getElementById('app');

export function paymentPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8';

  const topDiv = document.createElement('div');
  topDiv.classList.add('flex', 'items-center', 'mt-16');
  topDiv.id = 'top';

  // Create the image element
  const img = document.createElement('img');
  img.classList.add('w-24', 'h-16');
  img.src = '../src/assets/icons/prev icon.png';
  img.alt = '_';

  // Create the paragraph element
  const paragraph = document.createElement('p');
  paragraph.classList.add('font-semibold', 'text-3xl');
  paragraph.textContent = 'Payment Method';

  // Append the image and paragraph to the parent div
  topDiv.appendChild(img);
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
    itemDiv.classList.add('flex', 'p-2', 'items-center', 'h-20', 'bg-white', 'rounded-2xl', 'relative');
    itemDiv.id = 'item';

    const img = document.createElement('img');
    img.classList.add('pl-2');
    img.src = paymentMethod.src;
    img.alt = '_';

    const text = document.createElement('p');
    text.classList.add('pl-2', 'font-semibold', 'text-xl');
    text.textContent = paymentMethod.text;

    itemDiv.appendChild(img);
    itemDiv.appendChild(text);

    if (paymentMethod.amount) {
      const amount = document.createElement('p');
      amount.classList.add('pl-28', 'font-semibold', 'text-xl');
      amount.textContent = paymentMethod.amount;
      itemDiv.appendChild(amount);
    }

    const input = document.createElement('input');
    input.classList.add('absolute', 'right-8', 'top-8', 'custom-radio');
    input.type = 'radio';
    input.name = 'payment';

    itemDiv.appendChild(input);

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
}