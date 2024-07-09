import { router, routes } from "../../main";
import { isAuthenticated } from "../services/links";


const container = document.getElementById('app');

export async function profilePage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max gap-y-8';

  const topSection = document.createElement('div');

  topSection.classList = "flex flex-col gap-y-2 items-center mt-8 w-full text-center py-4 border-b-2 border-solid border-slate-200";

  const profileImage = document.createElement('img');
  profileImage.src = "../src/assets/icons/prof.jpg";
  profileImage.classList = "w-[220px] h-auto rounded-full"
  profileImage.alt = "-"

  const welcome = document.createElement('p');
  welcome.innerText = "Welcome Mahdi!"
  welcome.classList = "text-blue-500 text-2xl font-bold"

  topSection.appendChild(profileImage);
  topSection.appendChild(welcome);

  container.appendChild(topSection);

  const dashboard = document.createElement('div');

  dashboard.classList = "grid grid-col-1 gap-y-6 w-full"

  const wishlistTab = document.createElement('div');

  wishlistTab.classList = "flex items-center px-4 justify-between text-3xl font-semibold border-b-2 border-solid border-slate-100 pb-6"

  const leftContainer = document.createElement('div');
  leftContainer.classList = "flex items-center gap-x-2"

  const wishIcon = document.createElement('img');
  wishIcon.src = "../src/assets/icons/wishlist.png";

  const tabName = document.createElement('p');
  tabName.innerText = "WishList";

  leftContainer.appendChild(wishIcon);
  leftContainer.appendChild(tabName)

  const linkIcon = document.createElement('img');
  linkIcon.src = "../src/assets/icons/right-arrow.png";
  linkIcon.classList = "w-[28px] h-auto"

  wishlistTab.appendChild(leftContainer);
  wishlistTab.appendChild(linkIcon);

  dashboard.appendChild(wishlistTab);

  container.appendChild(dashboard);

  wishlistTab.addEventListener('click', () => {
    router.navigate(routes.wishlist);
  })

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