const info = document.querySelectorAll('.info');
const btn = document.querySelector('#person-generator-btn');

const picture = document.querySelector('img');
const firstName = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const address = document.querySelector('#location');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');

async function randomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const user = await response.json();

  picture.src = user.results[0].picture.large;

  let {first, last} = user.results[0].name;
  firstName.innerHTML = first;
  lastName.innerHTML = last;
  
  let {city, state, country} = user.results[0].location;
  address.innerHTML = `${city}-${state}-${country}`;

  phone.innerHTML = user.results[0].phone;
  email.innerHTML = user.results[0].email;

  info.forEach((element) => {
    element.style.backgroundColor = '#777';
  });
}

btn.addEventListener('click', randomUser);