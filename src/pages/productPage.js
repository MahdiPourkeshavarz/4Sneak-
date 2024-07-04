
const container = document.getElementById('app');

export function productPage() {
  container.innerHTML = "";
  container.classList = 'flex flex-col w-[430px] h-max';

  const carousel = document.createElement('div');
  carousel.classList = 'relative';
  carousel.id = 'carousel';

  const productImg = document.createElement('img');
  productImg.src = '../src/assets/adidas/6.png';
  productImg.alt = '_';

  const prevBtn = document.createElement('img');
  prevBtn.classList = 'absolute top-4 -left-6 w-24 h-auto';
  prevBtn.src = '../src/assets/icons/prev icon.png';
  prevBtn.alt = '_';

  const count = document.createElement('div');
  count.classList = 'absolute bottom-4 left-44 flex gap-x-1';
  count.id = 'count';

  const indicator1 = document.createElement('div');
  indicator1.classList = 'w-8 h-2 bg-black rounded-3xl';

  const indicator2 = document.createElement('div');
  indicator2.classList = 'w-2 h-2 bg-slate-600 rounded-full';

  const indicator3 = document.createElement('div');
  indicator3.classList = 'w-2 h-2 bg-slate-600 rounded-full';

  count.appendChild(indicator1);
  count.appendChild(indicator2);
  count.appendChild(indicator3);

  carousel.appendChild(productImg);
  carousel.appendChild(prevBtn);
  carousel.appendChild(count);

  container.appendChild(carousel)

  const productInfo = document.createElement('div');
  productInfo.classList = 'flex w-full text-4xl px-6 mt-6 items-center font-medium justify-between';

  const productName = document.createElement('p');
  productName.textContent = 'Adidas Busenitz';

  const likeIcon = document.createElement('img');
  likeIcon.classList = 'w-10 h-auto pt-2';
  likeIcon.src = '../src/assets/icons/like.png';
  likeIcon.alt = '_';

  productInfo.appendChild(productName);
  productInfo.appendChild(likeIcon);

  container.appendChild(productInfo)

  const soldRate = document.createElement('div');
  soldRate.classList = 'mt-6 px-6 flex gap-x-5 items-center';

  const sold = document.createElement('div');
  sold.classList = 'px-2 py-1 bg-slate-100 rounded-lg font-medium';
  sold.id = 'sold';
  sold.textContent = '438 sold';

  const rate = document.createElement('div');
  rate.classList = 'flex items-center gap-x-2 font-medium';
  rate.id = 'rate';

  const rateIcon = document.createElement('img');
  rateIcon.classList = 'w-6 h-6';
  rateIcon.src = '../src/assets/icons/star.png';
  rateIcon.alt = '_';

  const rateText = document.createElement('p');
  rateText.textContent = '4.3 (328 reviews)';

  rate.appendChild(rateIcon);
  rate.appendChild(rateText);

  soldRate.appendChild(sold);
  soldRate.appendChild(rate);

  container.appendChild(soldRate);

  const description = document.createElement('div');
  description.classList = 'px-6 mt-6';
  description.id = 'description';

  const descriptionTitle = document.createElement('p');
  descriptionTitle.classList = 'font-bold text-xl';
  descriptionTitle.textContent = 'Description';

  const descriptionText = document.createElement('p');
  descriptionText.classList = 'font-medium';
  descriptionText.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis rem, dolorum ea ipsa nostrum alias ut esse';

  description.appendChild(descriptionTitle);
  description.appendChild(descriptionText);

  container.appendChild(description);

  const options = document.createElement('div');
  options.classList = 'flex w-full h-max pl-6 mt-6 items-center';
  options.id = 'options';

  const sizes = document.createElement('div');
  sizes.className = 'flex flex-col gap-y-4 text-left w-1/2';
  sizes.id = 'sizes';

  // Create and append size title
  const sizeTitle = document.createElement('p');
  sizeTitle.className = 'text-2xl font-semibold';
  sizeTitle.textContent = 'Size';
  sizes.appendChild(sizeTitle);

  // Create size options container
  const sizeOptions = document.createElement('div');
  sizeOptions.className = 'flex gap-x-3';

  // Utility function to create size option elements
  function createSizeOption(size, isActive = false) {
    const sizeOption = document.createElement('div');
    sizeOption.className = `border-solid p-1 w-12 h-12 flex items-center justify-center font-semibold text-xl border-2 rounded-full ${isActive ? 'border-slate-700 text-white bg-slate-700' : 'border-slate-400'}`;
    sizeOption.textContent = size;

    // Add click event listener to handle active state
    sizeOption.addEventListener('click', () => {
      setActiveSize(sizeOption);
    });

    return sizeOption;
  }

  // Function to set active size
  function setActiveSize(activeElement) {
    // Remove active styles from all size options
    // biome-ignore lint/complexity/noForEach: <explanation>
    sizeOptions.childNodes.forEach(option => {
      option.classList.remove('border-slate-700', 'text-white', 'bg-slate-700');
      option.classList.add('border-slate-400', 'text-black', 'bg-white');
    });

    // Add active styles to the clicked size option
    activeElement.classList.remove('border-slate-400', 'text-black', 'bg-white');
    activeElement.classList.add('border-slate-700', 'text-white', 'bg-slate-700');
  }

  // Create and append size options
  const sizesArray = ['41', '42', '43'];
  sizesArray.forEach((size, index) => {
    const isActive = (size === '42'); // Set initial active size
    const sizeOption = createSizeOption(size, isActive);
    sizeOptions.appendChild(sizeOption);
  });

  // Append size options to sizes container
  sizes.appendChild(sizeOptions);

  // Append sizes to the main container
  container.appendChild(sizes);

  const colors = document.createElement('div');
  colors.className = 'flex flex-col gap-y-4 overflow-hidden';
  colors.id = 'colors';

  // Create and append color title
  const colorTitle = document.createElement('p');
  colorTitle.className = 'text-2xl font-semibold';
  colorTitle.textContent = 'Color';
  colors.appendChild(colorTitle);

  // Create color options container
  const colorOptions = document.createElement('div');
  colorOptions.className = 'flex gap-x-2';

  // Utility function to create color option elements
  function createColorOption(color, isActive = false) {
    const colorOption = document.createElement('div');
    colorOption.className = `border-solid p-1 w-12 h-12 flex items-center justify-center font-semibold text-xl border-2 rounded-full border-slate-700 ${color}`;

    if (isActive) {
      const checkIcon = document.createElement('img');
      checkIcon.src = '../src/assets/icons/check.png';
      checkIcon.alt = '_';
      colorOption.appendChild(checkIcon);
    }

    // Add click event listener to handle active state
    colorOption.addEventListener('click', () => {
      setActiveColor(colorOption);
    });

    return colorOption;
  }

  // Function to set active color
  function setActiveColor(activeElement) {
    // Remove check icon from all color options
    // biome-ignore lint/complexity/noForEach: <explanation>
    colorOptions.childNodes.forEach(option => {
      if (option.firstChild && option.firstChild.tagName === 'IMG') {
        option.removeChild(option.firstChild);
      }
    });

    // Add check icon to the clicked color option
    const checkIcon = document.createElement('img');
    checkIcon.src = '../src/assets/icons/check.png';
    checkIcon.alt = '_';
    activeElement.appendChild(checkIcon);
  }

  // Create and append color options (initializing the second color as active)
  const colorArray = [
    { color: 'bg-blue-700', isActive: false },
    { color: 'bg-slate-700', isActive: true },
    { color: 'bg-red-700', isActive: false }
  ];

  // biome-ignore lint/complexity/noForEach: <explanation>
  colorArray.forEach(colorObj => {
    const colorOption = createColorOption(colorObj.color, colorObj.isActive);
    colorOptions.appendChild(colorOption);
  });

  // Append color options to colors container
  colors.appendChild(colorOptions);

  options.appendChild(sizes);
  options.appendChild(colors);

  container.appendChild(options);

  const quantity = document.createElement('div');
  quantity.classList = 'pl-6 mt-10 flex gap-x-6 items-center';
  quantity.id = 'quantity';

  const quantityTitle = document.createElement('p');
  quantityTitle.classList = 'font-semibold text-2xl';
  quantityTitle.textContent = 'Quantity';

  const quantityControls = document.createElement('div');
  quantityControls.classList = 'py-2 px-5 rounded-3xl bg-slate-100 flex text-3xl gap-x-6 font-semibold';

  const decrement = document.createElement('p');
  decrement.classList = 'cursor-pointer';
  decrement.textContent = '-';
  decrement.id = 'decrement'

  const quantityValue = document.createElement('p');
  quantityValue.id = 'quant';
  quantityValue.textContent = '1';

  const increment = document.createElement('p');
  increment.classList = 'cursor-pointer';
  increment.id = 'increment'
  increment.textContent = '+';


  quantityControls.appendChild(decrement);
  quantityControls.appendChild(quantityValue);
  quantityControls.appendChild(increment);

  quantity.appendChild(quantityTitle);
  quantity.appendChild(quantityControls);

  container.appendChild(quantity);

  const action = document.createElement('div');
  action.classList = 'fixed bottom-0 h-28 w-full border-t-2 border-solid border-slate-200 px-6 flex justify-around';
  action.id = 'action';

  const price = document.createElement('div');
  price.classList = 'flex flex-col text-center mt-3';
  price.id = 'price';

  const priceLabel = document.createElement('p');
  priceLabel.classList = 'text-lg font-semibold';
  priceLabel.textContent = 'Total Price';

  const priceValue = document.createElement('p');
  priceValue.classList = 'text-2xl font-bold';
  priceValue.id = 'price';
  priceValue.textContent = '$ 240.00';

  price.appendChild(priceLabel);
  price.appendChild(priceValue);

  const addToCartButton = document.createElement('button');
  addToCartButton.classList = 'bg-slate-900 cursor-pointer h-16 pl-10 mt-4 pr-12 justify-center rounded-3xl flex items-center text-white gap-x-2 text-xl';

  const cartIcon = document.createElement('img');
  cartIcon.src = '../src/assets/icons/carticon.png';
  cartIcon.alt = '_';

  const buttonText = document.createElement('span');
  buttonText.textContent = 'Add to Cart';

  addToCartButton.appendChild(cartIcon);
  addToCartButton.appendChild(buttonText);

  action.appendChild(price);
  action.appendChild(addToCartButton);

  container.appendChild(action);

  quantity.addEventListener('click', (e) => {
    if (e.target.id === 'increment') {
      const numb = document.getElementById('quant');
      numb.innerHTML++;
    } else if (e.target.id === 'decrement') {
      const numb = document.getElementById('quant');
      if (numb.innerHTML > 1) {
        numb.innerHTML--;
      } else {
        return;
      }
    }
  })

}