
const container = document.getElementById('app');

export function secondLandingPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col justify-center items-center w-[430px] h-max';

  const img1 = document.createElement('img');
  img1.classList = "w-[430px] h-[660px]"
  img1.src = '../src/assets/landings/landing.png';
  img1.alt = '_';

  const paragraph = document.createElement('p');
  paragraph.classList = 'pt-8 text-2xl text-center font-bold';
  paragraph.innerHTML = 'Your satisfaction is our number one periority';

  const img2 = document.createElement('img');
  img2.classList = 'w-24 h-8 mt-2';
  img2.src = '../src/assets/icons/carousel-indicators2.png';
  img2.alt = '_';

  const link = document.createElement('a');
  link.innerHTML = '<a href="/landing/3" data-navigo><button class="bg-slate-900 rounded-3xl px-36 py-2 mt-4 text-white">Next</button></a>';

  container.appendChild(img1);
  container.appendChild(paragraph);
  container.appendChild(img2);
  container.appendChild(link);
}