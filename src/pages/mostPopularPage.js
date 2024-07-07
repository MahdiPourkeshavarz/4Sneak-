import { router, routes } from "../../main";
import { ADIDAS_PRO, MOST_URL, NB_PRO, NIKE_PRO, PRODUCT_URL, PUMA_PRO, REEBOK_PRO } from "../services/links";
import { getProducts } from "./homePage";

const container = document.getElementById('app');

export function mostPopularPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8 bg-slate-50';

  const top = document.createElement('div');
  top.classList = 'flex items-center h-14 mt-10';
  top.id = 'top';

  const prevIcon = document.createElement('img');
  prevIcon.classList = 'w-24 h-auto';
  prevIcon.src = '../src/assets/icons/prev icon.png';
  prevIcon.alt = '_';

  const topText = document.createElement('p');
  topText.classList = 'font-bold text-3xl pb-1';
  topText.textContent = 'Most Popular';

  // Append top images and text to top div
  top.appendChild(prevIcon);
  top.appendChild(topText);
  container.appendChild(top);

  const filter = document.createElement('div');
  filter.classList = 'mt-6 pl-8 flex border-solid h-12 w-[430px] overflow-x-scroll scrollbar-hide gap-x-5';
  filter.id = 'filter';

  const filterOptions = [
    { text: 'All', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold text-white bg-slate-800', id: "AllB" },
    { text: 'Adidas', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold', id: "AdidasB" },
    { text: 'Nike', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold', id: "NikeB" },
    { text: 'Reebok', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold', id: "ReebokB" },
    { text: 'Puma', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold', id: "PumaB" },
    { text: 'NB', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold', id: "NBB" }
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  filterOptions.forEach(option => {
    const div = document.createElement('div');
    div.classList = option.class;
    div.textContent = option.text;
    div.id = option.id;
    filter.appendChild(div);
  });

  container.appendChild(filter);

  const items = document.createElement('div');
  items.classList = 'mt-6 px-8 grid grid-cols-2 mb-32';
  items.id = 'items';

  container.appendChild(items);

  getProducts(MOST_URL);

  filter.addEventListener('click', (e) => {
    const elements = ['AllB', 'AdidasB', 'NikeB', 'ReebokB', 'PumaB', 'NBB'];
    const productMap = {
      Adidas: ADIDAS_PRO,
      Nike: NIKE_PRO,
      Puma: PUMA_PRO,
      NB: NB_PRO,
      Reebok: REEBOK_PRO,
      All: []
    };

    const targetText = e.target.innerHTML;
    const targetID = `${targetText}B`;

    if (productMap[targetText]) {
      const isAll = targetText === 'All';
      getProducts(isAll ? MOST_URL : `${PRODUCT_URL}?_start=${productMap[targetText][0]}&_end=${productMap[targetText][1]}`);

      // biome-ignore lint/complexity/noForEach: <explanation>
      elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          if (id === targetID) {
            element.classList.add("text-white", "bg-slate-800");
          } else {
            element.classList.remove("text-white", "bg-slate-800");
          }
        }
      });
    }
  });

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

  prevIcon.addEventListener('click', () => {
    router.navigate(routes.home);
  })
}