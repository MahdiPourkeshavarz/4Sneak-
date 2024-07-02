import { router, routes } from "../../main";

const container = document.getElementById('app');

export function welcomePage() {
  container.innerHTML = "";
  container.classList = "flex flex-col w-[430px] h-max relative bg-slate-600";


  const img = document.createElement('img');
  img.src = '../src/assets/newLanding/3.jpg';
  img.alt = '_';

  container.appendChild(img);


  const textContainer1 = document.createElement('div');
  textContainer1.classList = 'absolute bottom-56 text-white text-4xl font-semibolds pl-8';


  const p1 = document.createElement('p');
  p1.innerHTML = 'Welcome to &#128075;';
  textContainer1.appendChild(p1);


  const p2 = document.createElement('p');
  p2.classList = 'pl-4 pt-4 text-5xl font-extrabold';
  p2.textContent = '4Sneak!';
  textContainer1.appendChild(p2);


  container.appendChild(textContainer1);


  const textContainer2 = document.createElement('p');
  textContainer2.classList = 'absolute bottom-28 pl-4 text-white text-lg';
  textContainer2.textContent = 'The best sneakers e-commerce app of the century for your fashion needs!';

  container.appendChild(textContainer2);
  setTimeout(() => {
    router.navigate(routes.firstlanding)
  }, 4000)
}
