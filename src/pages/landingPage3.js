
const container = document.getElementById('app');

export function thirdLandingPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col justify-center items-center w-[400px]';

  const img1 = document.createElement('img');
  img1.src = '../src/assets/landings/slide2.png';
  img1.alt = '_';

  const paragraph = document.createElement('p');
  paragraph.classList = 'pt-4 text-2xl text-center font-bold';
  paragraph.innerHTML = 'We provide high quality <br> products just for you';

  const img2 = document.createElement('img');
  img2.classList = 'w-24 h-8 mt-2';
  img2.src = '../src/assets/icons/carousel-indicators2.png';
  img2.alt = '_';

  const link = document.createElement('a');
  link.innerHTML = '<a href="/auth" data-navigo><button class="bg-slate-900 rounded-3xl px-28 py-2 mt-4 text-white">Get Started</button></a>';

  container.appendChild(img1);
  container.appendChild(paragraph);
  container.appendChild(img2);
  container.appendChild(link);
}