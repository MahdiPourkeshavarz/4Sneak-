import { router, routes } from "../../main";

const container = document.getElementById('app');

export function homePage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max';

  const profile = document.createElement('div');
  profile.classList = 'flex w-full px-6 justify-between pt-4';
  profile.id = 'profile';

  const left = document.createElement('div');
  left.id = 'left';

  const greeting = document.createElement('p');
  greeting.classList = 'pb-2 text-xl text-slate-600';
  greeting.innerHTML = 'Good Morning &#128075;';
  left.appendChild(greeting);

  const profileInfo = document.createElement('div');
  profileInfo.classList = 'flex items-center';

  const profileImg = document.createElement('img');
  profileImg.classList = 'w-12 h-auto rounded-full';
  profileImg.src = '../src/assets/icons/prof.jpg';
  profileImg.alt = '_';
  profileInfo.appendChild(profileImg);

  const profileName = document.createElement('p');
  profileName.classList = 'ml-4 text-xl font-semibold';
  profileName.textContent = 'Mahdi pourkeshavarz';
  profileInfo.appendChild(profileName);

  left.appendChild(profileInfo);
  profile.appendChild(left);

  const headerImg = document.createElement('img');
  headerImg.classList = 'w-20 h-8 mt-4 cursor-pointer';
  headerImg.src = '../src/assets/icons/header.png';
  headerImg.alt = '_';
  profile.appendChild(headerImg);

  container.appendChild(profile);

  const search = document.createElement('div');
  search.classList = 'flex rounded-2xl w-80 ml-14 mt-6 items-center border-solid border-2 border-slate-100';
  search.id = 'search';

  const searchIcon = document.createElement('img');
  searchIcon.classList = 'w-8 h-8 cursor-pointer';
  searchIcon.src = '../src/assets/icons/ssearch.png';
  searchIcon.alt = '_';
  search.appendChild(searchIcon);

  const searchInput = document.createElement('input');
  searchInput.classList = 'focus:outline-none w-full pl-2 h-12';
  searchInput.type = 'text';
  searchInput.placeholder = 'Search';
  search.appendChild(searchInput);

  container.appendChild(search);

  search.addEventListener('click', () => {
    router.navigate(routes.search);
  })


  const brands = document.createElement('div');
  brands.classList = 'grid grid-cols-4 px-8 mt-6 mb-8 gap-y-6';
  brands.id = 'brands';

  const brandImages = [
    '../src/assets/logos/adidas.png',
    '../src/assets/logos/nike.png',
    '../src/assets/logos/new balance.png',
    '../src/assets/logos/puma.png',
    '../src/assets/logos/reebok.png',
    '../src/assets/logos/more.png'
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  brandImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '_';
    brands.appendChild(img);
  });

  container.appendChild(brands);


  const link = document.createElement('a');
  link.classList = 'pl-8 text-slate-800';
  link.id = 'link';

  const brandTitle = document.createElement('span');
  brandTitle.id = 'brand-title';
  brandTitle.classList = 'text-xl font-bold';
  brandTitle.textContent = 'Most Popular';
  link.appendChild(brandTitle);

  const seeAll = document.createElement('span');
  seeAll.classList = 'pl-40 text-xl font-medium';
  seeAll.textContent = 'See All';
  link.appendChild(seeAll);

  container.appendChild(link);

  const filter = document.createElement('div');
  filter.classList = 'mt-6 pl-8 flex border-solid h-12 w-[430px] overflow-x-scroll scrollbar-hide gap-x-5';
  filter.id = 'filter';

  const filterOptions = [
    { text: 'All', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold text-white bg-slate-800' },
    { text: 'Adidas', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold' },
    { text: 'Nike', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold' },
    { text: 'Reebok', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold' },
    { text: 'Puma', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold' },
    { text: 'NB', class: 'border-solid border-slate-700 border-2 w-fit py-2 px-6 rounded-3xl text-lg font-bold' }
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  filterOptions.forEach(option => {
    const div = document.createElement('div');
    div.classList = option.class;
    div.textContent = option.text;
    filter.appendChild(div);
  });

  container.appendChild(filter);

  const items = document.createElement('div');
  items.classList = 'mt-6 px-8 grid grid-cols-2 mb-16';
  items.id = 'items';

  const item = document.createElement('div');
  item.classList = 'flex flex-col p-4 w-fit justify-evenly';

  const itemImg = document.createElement('img');
  itemImg.classList = 'w-32 h-auto p-1 bg-[#F3F3F3] rounded-2xl';
  itemImg.src = '../src/assets/adidas/adidas.png';
  itemImg.alt = '_';
  item.appendChild(itemImg);

  const itemName = document.createElement('p');
  itemName.classList = 'text-xs font-bold pt-1 pl-1';
  itemName.textContent = 'Nike Pegasus';
  item.appendChild(itemName);

  const itemPrice = document.createElement('p');
  itemPrice.classList = 'font-bold text-xs pt-1 pl-1';
  itemPrice.textContent = '$ 110.00';
  item.appendChild(itemPrice);

  items.appendChild(item);

  container.appendChild(items);

  // Create the action bar
  const actionBar = document.createElement('div');
  actionBar.classList = 'fixed h-20 bottom-2 flex items-center left-9 gap-x-10 bg-white';
  actionBar.id = 'action-bar';

  const actionLinks = [
    { href: '/home', src: '../src/assets/action/home.png' },
    { href: '/cart', src: '../src/assets/action/cart.png', badge: true },
    { href: '/order/active', src: '../src/assets/action/orders.png' },
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