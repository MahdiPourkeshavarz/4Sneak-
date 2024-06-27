const container = document.getElementById('app');

export function authenticationPage() {
  container.innerHTML = "";
  container.className = 'flex flex-col justify-center items-center';

  const logoImage = document.createElement('img');
  logoImage.className = 'bg-black px-4 py-2 rounded-lg mt-32';
  logoImage.src = './src/assets/icons/logo.png';
  logoImage.alt = '_';
  container.appendChild(logoImage);

  const loginText = document.createElement('p');
  loginText.className = 'font-bold text-2xl mt-8';
  loginText.textContent = 'Login to your Account';
  container.appendChild(loginText);

  const createAccountText = document.createElement('p');
  createAccountText.className = 'hidden font-bold text-2xl mt-8';
  createAccountText.textContent = 'Create New Account';
  container.appendChild(createAccountText);

  const emailDiv = document.createElement('div');
  emailDiv.className = 'flex items-center mt-8 h-8 mr-4 bg-slate-50';

  const emailIcon = document.createElement('img');
  emailIcon.src = './src/assets/icons/icons8-mail-25 (1).png';
  emailIcon.alt = '_';
  emailDiv.appendChild(emailIcon);

  const emailInput = document.createElement('input');
  emailInput.className = 'w-56 bg-slate-50 focus:outline-none';
  emailInput.type = 'email';
  emailInput.required = true;
  emailInput.placeholder = 'Email';
  emailDiv.appendChild(emailInput);

  container.appendChild(emailDiv);

  const passwordDiv = document.createElement('div');
  passwordDiv.className = 'flex items-center mt-6 h-8 bg-slate-50';

  const passwordIcon = document.createElement('img');
  passwordIcon.src = './src/assets/icons/icons8-lock-24.png';
  passwordIcon.alt = '_';
  passwordDiv.appendChild(passwordIcon);

  const passwordInput = document.createElement('input');
  passwordInput.className = 'w-56 bg-slate-50 focus:outline-none';
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordDiv.appendChild(passwordInput);

  const visibilityIcon = document.createElement('img');
  visibilityIcon.className = 'w-4 h-auto cursor-pointer';
  visibilityIcon.src = './src/assets/icons/invisible.png';
  visibilityIcon.alt = '';
  passwordDiv.appendChild(visibilityIcon);

  container.appendChild(passwordDiv);

  const newHereLink = document.createElement('p');
  newHereLink.className = 'mt-6 text-blue-400 cursor-pointer';
  newHereLink.textContent = 'New Here? Create new account';
  container.appendChild(newHereLink);

  const existingAccountLink = document.createElement('p');
  existingAccountLink.className = 'hidden mt-6 text-blue-400 cursor-pointer';
  existingAccountLink.textContent = 'Do you have an account? Log in';
  container.appendChild(existingAccountLink);

  const rememberMeDiv = document.createElement('div');
  rememberMeDiv.className = 'mt-4';

  const rememberMeCheckbox = document.createElement('input');
  rememberMeCheckbox.type = 'checkbox';
  rememberMeDiv.appendChild(rememberMeCheckbox);

  const checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = 'Remember me';
  rememberMeDiv.appendChild(checkboxLabel);

  container.appendChild(rememberMeDiv);

  const link = document.createElement('a');
  link.innerHTML = '<a href="/home" data-navigo><button class="mt-16 py-2 px-28 rounded-3xl bg-slate-800 text-slate-100">Sign in</button></a>';

  container.appendChild(link);
}

