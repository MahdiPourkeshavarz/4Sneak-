
import { addressPage } from "./src/pages/addressPage";
import { authenticationPage } from "./src/pages/authenticationPage";
import { brandPage } from "./src/pages/brandPage";
import { cartPage } from "./src/pages/cartPage";
import { finalCheckoutPage } from "./src/pages/finalCheckoutPage";
import { firstPage } from "./src/pages/firstPage";
import { homePage } from "./src/pages/homePage";
import { firstLandingPage } from "./src/pages/landingPage1";
import { secondLandingPage } from "./src/pages/landingPage2";
import { thirdLandingPage } from "./src/pages/landingPage3";
import { mostPopularPage } from "./src/pages/mostPopularPage";
import { ordersPage } from "./src/pages/ordersPage";
import { paymentPage } from "./src/pages/paymentPage";
import { productPage } from "./src/pages/productPage";
import { profilePage } from "./src/pages/profilePage";
import { removeProductModal } from "./src/pages/removeProductModal";
import { searchPage } from "./src/pages/searchPage";
import { shipmentPage } from "./src/pages/shipmentPage";
import { successfulOrderModal } from "./src/pages/successfulOrderModal";
import { walletPage } from "./src/pages/walletPage";
import { welcomePage } from "./src/pages/welcomePage";
import { wishlistPage } from "./src/pages/wishlistPage";
import "./src/style/output.css";
import Navigo from "navigo";



export const routes = {
  first: "/",
  welcome: "/landing/welcome",
  firstlanding: "/landing/1",
  secondlanding: "/landing/2",
  thirdlanding: "/landing/3",
  auth: "/auth",
  home: "/home",
  seeAll: "/home/seeAll",
  product: "/product",
  cart: "/cart",
  ship: "/shippingMethod",
  search: "/search",
  address: "/address",
  finalcheckout: "/checkout/final",
  payment: "/checkout/payment",
  orders: "/orders/active",
  successModal: "/checkout/successfulOrder",
  removePro: "/cart/remove:id",
  brand: "/home/brand",
  wallet: "/wallet",
  profile: "/profile",
  wishlist: "/profile/wishlist"
}


export const router = new Navigo("/");


router.on(routes.first, firstPage)
  .on(routes.welcome, welcomePage)
  .on(routes.firstlanding, firstLandingPage)
  .on(routes.secondlanding, secondLandingPage)
  .on(routes.thirdlanding, thirdLandingPage)
  .on(routes.auth, authenticationPage)
  .on(routes.home, homePage)
  .on(routes.product, productPage)
  .on(routes.cart, cartPage)
  .on(routes.ship, shipmentPage)
  .on(routes.search, searchPage)
  .on(routes.address, addressPage)
  .on(routes.orders, ordersPage)
  .on(routes.successModal, successfulOrderModal)
  .on(routes.removePro, removeProductModal)
  .on(routes.brand, brandPage)
  .on(routes.finalcheckout, finalCheckoutPage)
  .on(routes.wallet, walletPage)
  .on(routes.seeAll, mostPopularPage)
  .on(routes.payment, paymentPage)
  .on(routes.profile, profilePage)
  .on(routes.wishlist, wishlistPage)
  .resolve();












