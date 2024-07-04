import { router, routes } from "../../main";

const container = document.getElementById('app');


export function firstPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col items-center justify-center';

  const topDiv = document.createElement('div');
  topDiv.classList = 'mt-48 flex flex-row-reverse items-center';

  const paragraph = document.createElement('p');
  paragraph.classList = 'text-3xl font-semibold pl-4';
  paragraph.innerHTML = '4Sneak<span class="text-blue-800">!</span>';

  const img = document.createElement('img');
  img.src = './src/assets/icons/logo.png';
  img.alt = '_';
  img.classList = "bg-black px-6 py-4 rounded-full"

  topDiv.appendChild(paragraph);
  topDiv.appendChild(img);

  const loadingDiv = document.createElement('div');
  loadingDiv.classList = 'flex flex-col items-center mt-48';
  loadingDiv.setAttribute('role', 'status');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList = 'inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-50 fill-black';
  svg.setAttribute('viewBox', '0 0 100 101');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');


  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z');
  path1.setAttribute('fill', 'currentColor');


  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z');
  path2.setAttribute('fill', 'currentFill');

  svg.appendChild(path1);
  svg.appendChild(path2);


  const span = document.createElement('span');
  span.classList = 'mt-4 text-slate-400';
  span.textContent = 'Loading...';


  loadingDiv.appendChild(svg);
  loadingDiv.appendChild(span);


  container.appendChild(topDiv);
  container.appendChild(loadingDiv);
  if (localStorage.getItem('visited')) {
    router.navigate(routes.auth)
  } else {
    setTimeout(() => {
      router.navigate(routes.welcome);
    }, 4000)
  }
}
