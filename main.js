
import { addressPage } from "./src/pages/addressPage";
import { authenticationPage } from "./src/pages/authenticationPage";
import { brandPage } from "./src/pages/brandPage";
import { cartPage } from "./src/pages/cartPage";
import { checkoutPage } from "./src/pages/checkoutPage";
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
import { searchPage } from "./src/pages/searchPage";
import { shipmentPage } from "./src/pages/shipmentPage";
import { walletPage } from "./src/pages/walletPage";
import { welcomePage } from "./src/pages/welcomePage";
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
  product: "/product",
  cart: "/cart",
  ship: "/shippingMethod",
  search: "/search",
  address: "/address",
  finalcheckout: "/checkout/final",
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
  .on(routes.first, checkoutPage)
  .on(routes.first, mostPopularPage)
  .on(routes.first, brandPage)
  .on(routes.first, productPage)
  .on(routes.finalcheckout, finalCheckoutPage)
  .on(routes.first, shipmentPage)
  .on(routes.first, addressPage)
  .on(routes.first, paymentPage)
  .resolve();












