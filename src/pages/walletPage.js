
const container = document.getElementById('app');

export function walletPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8 bg-slate-50';

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
  paragraph.textContent = 'My Wallet';

  // Append the image and paragraph to the parent div
  topDiv.appendChild(img);
  topDiv.appendChild(paragraph);
  container.appendChild(topDiv);

  const middleInfo = document.createElement('div');

  middleInfo.classList = "flex flex-col mx-auto gap-y-8 mt-20"

  const walletImg = document.createElement('img');
  walletImg.src = "../src/assets/icons/wallet.gif";
  walletImg.alt = "_";
  walletImg.classList = "w-[360] h-auto";

  const value = document.createElement('p');
  value.textContent = "Currently You have $ 9.73"
  value.classList = "text-2xl font-bold text-black mx-auto"

  middleInfo.appendChild(walletImg);
  middleInfo.appendChild(value);

  container.appendChild(middleInfo);

  const button = document.createElement('button');
  button.classList.add(
    'mt-16', 'h-16', 'w-80', 'mx-auto',
    'rounded-full', 'bg-slate-900', 'text-white',
    'text-xl', 'font-semibold', 'flex', 'items-center',
    'justify-center'
  );
  button.innerHTML = 'Add more to Your Wallet <img class="pl-2" src="../src/assets/icons/dollar.png" alt="_"/>';

  container.appendChild(button);

  const actionBar = document.createElement('div');
  actionBar.classList = 'fixed h-20 bottom-0 flex items-center left-9 gap-x-10 bg-white';
  actionBar.id = 'action-bar';

  const actionLinks = [
    { href: '/home', src: '../src/assets/action/home.png' },
    { href: '/cart', src: '../src/assets/action/cart.png', badge: true },
    { href: '/orders/active', src: '../src/assets/action/orders.png' },
    { href: '/wallet', src: '../src/assets/action/wallet.png' },
    { href: '/profile', src: '../src/assets/action/profile.png' }
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  actionLinks.forEach(link => {
    const a = document.createElement('a');
    a.innerHTML = '<a data-navigo></a>'
    if (link.badge) {
      a.classList = 'relative';

      const badge = document.createElement('div');
      badge.classList = 'absolute flex items-center justify-center w-6 h-6 bg-red-700 text-white rounded-full -top-4 right-0 text-center text-sm';
      badge.textContent = '0';
      a.appendChild(badge);
    }

    a.href = link.href;

    const img = document.createElement('img');
    img.classList = 'w-10 h-auto';
    img.src = link.src;
    img.alt = '_';

    a.appendChild(img);
    actionBar.appendChild(a);
  });
  container.appendChild(actionBar);
}