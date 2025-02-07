import { router, routes } from "../../main";
import { ADIDAS_PRO, MOST_URL, NB_PRO, NIKE_PRO, PRODUCT_URL, PUMA_PRO, REEBOK_PRO, isAuthenticated } from "../services/links";
import { updateBrandInfo } from "./brandPage";
import { updateProductInfo } from "./productPage";
import { updateSearchInfo } from "./searchPage";
import axios from "axios";
const container = document.getElementById('app');

export async function homePage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
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

  searchIcon.addEventListener('click', () => {
    const value = searchInput.value;
    updateSearchInfo(value);
    router.navigate(routes.search);
  })


  const brands = document.createElement('div');
  brands.classList = 'grid grid-cols-4 px-8 mt-6 mb-8 gap-y-6';
  brands.id = 'brands';

  const brandImages = [
    ['../src/assets/logos/adidas.png', 'Adidas'],
    ['../src/assets/logos/nike.png', 'Nike'],
    ['../src/assets/logos/new balance.png', 'NewBalance'],
    ['../src/assets/logos/puma.png', 'Puma'],
    ['../src/assets/logos/reebok.png', 'Reebok']
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  brandImages.forEach(brand => {
    const img = document.createElement('img');
    img.src = brand[0];
    img.alt = '_';
    img.id = brand[1];
    brands.appendChild(img);
  });

  const brandData = {
    Adidas: { start: ADIDAS_PRO[0], end: ADIDAS_PRO[1] },
    Nike: { start: NIKE_PRO[0], end: NIKE_PRO[1] },
    Puma: { start: PUMA_PRO[0], end: PUMA_PRO[1] },
    Reebok: { start: REEBOK_PRO[0], end: REEBOK_PRO[1] },
    NewBalance: { start: NB_PRO[0], end: NB_PRO[1] }
  };

  // Add event listener to the brands container
  brands.addEventListener('click', (e) => {
    const brandId = e.target.id;
    if (brandData[brandId]) {
      const { start, end } = brandData[brandId];
      updateBrandInfo(brandId, `${PRODUCT_URL}?_start=${start}&_end=${end}`);
      router.navigate(routes.brand);
    }
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

  link.addEventListener('click', () => {
    router.navigate(routes.seeAll)
  })

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

  const items = document.createElement('div');
  items.classList = 'mt-6 px-8 grid grid-cols-2 mb-32';
  items.id = 'items';

  container.appendChild(items);

  // Create the action bar
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
  getProducts(MOST_URL);
}

export async function getProducts(url, route) {
  try {
    const items = document.getElementById('items')
    items.innerHTML = "";
    const response = await axios.get(url);
    const data = response.data;
    if (data) {
      items.innerHTML = "";
      // biome-ignore lint/complexity/noForEach: <explanation>
      data.forEach((product) => {
        const item = document.createElement('div');
        item.classList = 'flex flex-col p-4 w-fit justify-evenly';
        item.id = 'item';

        const itemImg = document.createElement('img');
        itemImg.classList = 'w-32 h-auto p-1 bg-[#F3F3F3] rounded-2xl';
        itemImg.src = product.imgUrl;
        itemImg.alt = '_';
        item.appendChild(itemImg);

        const itemName = document.createElement('p');
        itemName.classList = 'text-xs font-bold pt-1 pl-1';
        itemName.textContent = product.name;
        item.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList = 'font-bold text-xs pt-1 pl-1';
        itemPrice.textContent = `$ ${product.price}`;
        item.appendChild(itemPrice);

        items.appendChild(item);

        item.addEventListener('click', () => {
          if (route) {
            console.log(route)
            updateProductInfo(product.id, route);
          } else {
            updateProductInfo(product.id, 'home');
          }
          router.navigate(routes.product);
        })
      })
    }
  } catch (e) {
    throw new Error("failed to fetch", e);
  }
}

