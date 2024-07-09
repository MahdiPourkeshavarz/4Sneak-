import { router, routes } from "../../main";
import { isAuthenticated } from "../services/links";


const container = document.getElementById('app');

export async function profilePage() {
  if (!isAuthenticated()) {
    router.navigate(routes.auth);
  }
  container.innerHTML = "";
}