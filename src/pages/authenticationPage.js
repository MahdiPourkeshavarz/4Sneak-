
import { USER_URL } from "../services/links";
import { routes, router } from "../../main";

const container = document.getElementById('app');

export function authenticationPage() {
  localStorage.removeItem('token');
  let mode = "login";
  container.innerHTML = "";
  container.classList = 'flex flex-col justify-center items-center';

  const logoImage = document.createElement('img');
  logoImage.classList = 'bg-black px-4 py-2 rounded-lg mt-32';
  logoImage.src = '../src/assets/icons/logo.png';
  logoImage.alt = '_';
  container.appendChild(logoImage);

  const loginText = document.createElement('p');
  loginText.classList = 'font-bold text-2xl mt-8';
  loginText.textContent = 'Login to your Account';
  loginText.id = "login";
  container.appendChild(loginText);

  const createAccountText = document.createElement('p');
  createAccountText.classList = 'hidden font-bold text-2xl mt-8';
  createAccountText.textContent = 'Create New Account';
  createAccountText.id = "create";
  container.appendChild(createAccountText);

  const from = document.createElement('form');

  const emailDiv = document.createElement('div');
  emailDiv.classList = 'flex items-center mt-8 h-8 mr-4 bg-slate-50';

  const emailIcon = document.createElement('img');
  emailIcon.src = '../src/assets/icons/icons8-mail-25 (1).png';
  emailIcon.alt = '_';
  emailDiv.appendChild(emailIcon);

  const emailInput = document.createElement('input');
  emailInput.classList = 'w-56 bg-slate-50 focus:outline-none';
  emailInput.type = 'email';
  emailInput.required = true;
  emailInput.placeholder = 'Email';
  emailDiv.appendChild(emailInput);

  from.appendChild(emailDiv);

  const passwordDiv = document.createElement('div');
  passwordDiv.classList = 'flex items-center mt-6 h-8 bg-slate-50';

  const passwordIcon = document.createElement('img');
  passwordIcon.src = '../src/assets/icons/icons8-lock-24.png';
  passwordIcon.alt = '_';
  passwordDiv.appendChild(passwordIcon);

  const passwordInput = document.createElement('input');
  passwordInput.classList = 'w-56 bg-slate-50 focus:outline-none';
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordDiv.appendChild(passwordInput);

  const visibilityIcon = document.createElement('img');
  visibilityIcon.classList = 'w-4 h-auto cursor-pointer';
  visibilityIcon.src = '../src/assets/icons/invisible.png';
  visibilityIcon.alt = '';
  passwordDiv.appendChild(visibilityIcon);

  from.appendChild(passwordDiv);

  container.appendChild(from);

  const newHereLink = document.createElement('p');
  newHereLink.classList = 'mt-6 text-blue-400 cursor-pointer';
  newHereLink.textContent = 'New Here? Create new account';
  newHereLink.id = "new";
  container.appendChild(newHereLink);

  const existingAccountLink = document.createElement('p');
  existingAccountLink.classList = 'hidden mt-6 text-blue-400 cursor-pointer';
  existingAccountLink.textContent = 'Do you have an account? Log in';
  existingAccountLink.id = "exist";
  container.appendChild(existingAccountLink);

  const rememberMeDiv = document.createElement('div');
  rememberMeDiv.classList = 'mt-4';

  const rememberMeCheckbox = document.createElement('input');
  rememberMeCheckbox.type = 'checkbox';
  rememberMeDiv.appendChild(rememberMeCheckbox);

  const checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = 'Remember me';
  rememberMeDiv.appendChild(checkboxLabel);

  container.appendChild(rememberMeDiv);

  const button = document.createElement('button');
  button.innerHTML = '<button class="mt-16 py-2 px-28 rounded-3xl bg-slate-800 text-slate-100" id="btn" type="submit">Login</button>';

  container.appendChild(button);

  container.addEventListener('click', (e) => {
    if (e.target.id === "new") {
      mode = "signup";
      document.getElementById('btn').textContent = "SignUp";
      document.getElementById('login').classList.add('hidden');
      document.getElementById('create').classList.remove('hidden')
      document.getElementById('new').classList.add('hidden');
      document.getElementById('exist').classList.remove('hidden');
    } else if (e.target.id === "exist") {
      mode = "login"
      document.getElementById('btn').textContent = "Login";
      document.getElementById('login').classList.remove('hidden');
      document.getElementById('create').classList.add('hidden')
      document.getElementById('new').classList.remove('hidden');
      document.getElementById('exist').classList.add('hidden');
    }
  })

  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    const passValue = passwordInput.value;
    console.log(mode);
    if (emailValue === '' || passValue === '') {
      alert('please fill the email and password')
      return;
    }
    console.log({
      email: emailValue,
      password: passValue
    })
    try {
      const response = await fetch(`${USER_URL}/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailValue,
          password: passValue
        })
      })
      const result = await response.json();

      if (response.ok) {
        console.log(`successful ${mode}`);
        localStorage.setItem('token', result.accessToken);
        router.navigate(routes.home);
      }
    } catch (e) {
      throw new Error('failed to authenticate', e)
    }

  })

}

