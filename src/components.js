export function Button(text, width, icon, visibility = 900) {
  let button = document.createElement('button');
  button.className = `bg-slate-${visibility} text-slate-300 py-2 w-${width} rounded-3xl font-normal text-sm`;

  if (icon) {
    let img = document.createElement('img');
    img.className = 'w-8 h-auto pr-1';
    img.src = icon;
    img.alt = '_';
    button.appendChild(img);
  } else {
    button.className = `bg-slate-${visibility} text-slate-300 py-4 w-${width} rounded-3xl font-normal text-sm`;
  }

  let textNode = document.createTextNode(text);
  button.appendChild(textNode);

  return button.outerHTML;
}

export function Logo(src) {
  let img = document.createElement('img');
  img.className = 'w-12 h-auto';
  img.src = src;
  img.alt = '';
  return img.outerHTML;
}

export function Card(img, name, price) {
  let div = document.createElement('div');

  let imgElement = document.createElement('img');
  imgElement.className = 'w-28 h-auto p-1 bg-slate-100 rounded-2xl';
  imgElement.src = img;
  imgElement.alt = '_';
  div.appendChild(imgElement);

  let nameP = document.createElement('p');
  nameP.className = 'text-xs font-bold pt-1 pl-1';
  nameP.textContent = name;
  div.appendChild(nameP);

  let priceP = document.createElement('p');
  priceP.className = 'font-bold text-xs pt-1 pl-1';
  priceP.textContent = `$ ${price}`;
  div.appendChild(priceP);

  return div.outerHTML;
}

export function BrandLink(name, active) {
  let bg = active ? 800 : 100;
  let text = active ? 100 : 900;

  let div = document.createElement('div');
  div.className = `bg-slate-${bg} w-fit border-solid border-2 border-slate-800 px-2 py-1 rounded-2xl`;

  let p = document.createElement('p');
  p.className = `text-xs font-semibold text-slate-${text}`;
  p.textContent = name;
  div.appendChild(p);

  return div.outerHTML;
}

export function Size(value, active) {
  let bg = active ? 900 : 100;
  let text = active ? 100 : 900;

  let div = document.createElement('div');
  div.className = `w-8 h-8 flex justify-center items-center bg-slate-${bg} rounded-3xl border-solid border-2 border-slate-500`;

  let p = document.createElement('p');
  p.className = `text-xs font-semibold text-slate-${text}`;
  p.textContent = value;
  div.appendChild(p);

  return div.outerHTML;
}

export function Color(code) {
  let div = document.createElement('div');
  div.className = `flex items-center justify-center w-8 h-8 rounded-full bg-[${code}]`;

  let img = document.createElement('img');
  img.id = 'check';
  img.className = 'hidden w-6 h-6';
  img.src = './src/assets/icons/check.png';
  img.alt = '_';
  div.appendChild(img);

  return div.outerHTML;
}

export function Quantity() {
  let div = document.createElement('div');
  div.className = 'flex flex-row justify-evenly items-center w-14 h-8 bg-slate-300 rounded-full font-semibold';

  let minusP = document.createElement('p');
  minusP.className = 'cursor-pointer';
  minusP.textContent = '-';
  div.appendChild(minusP);

  let countP = document.createElement('p');
  countP.textContent = '1';
  div.appendChild(countP);

  let plusP = document.createElement('p');
  plusP.className = 'cursor-pointer';
  plusP.textContent = '+';
  div.appendChild(plusP);

  return div.outerHTML;
}