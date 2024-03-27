import popupWindow from './popup';

const portfolioCard = document.getElementById('portfolio_card');
const projects = [
  {
    img: './assets/medical_appointment_app.png',
    name: 'Medical Appointment App',
    stacks: ['Ruby on Rails', 'PostgreSQL', 'React', 'TailwindCSS'],
    desc: 'A web app for reserving doctors simplifies the process of scheduling medical appointments. It allows users to browse & select available doctors, view their profiles and specialties and book appointments based on their preferred date and time. The application streamlines the reservation process, saving time for both patients & healthcare providers.',
    live: 'https://capstone-module-front-end.vercel.app/',
    source: 'https://github.com/binyamolango/capstone-module-front-end',
  },
  {
    img: './assets/recipe_app.png',
    name: 'Recipe App',
    stacks: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    desc: "An app that keeps track of all users' recipes and ingredients. It will allow the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user have and missing from a recipe.",
    live: 'https://edenic-recipe-i1dt.onrender.com/',
    source: 'https://github.com/binyamolango/recipe_app2',
  },
  {
    img: './assets/meal_app.png',
    name: 'Meal App',
    stacks: ['External API', 'React', 'JavaScript', 'Bootstrap'],
    desc: 'Meal App is a meal web application based on an external API that displays meals based on categories and location. It can also allow the user to like and give comments.',
    live: 'https://edenic-meal-app.netlify.app/',
    source: 'https://github.com/binyamolango/meal-app',
  },
  {
    img: './assets/weather_app.png',
    name: 'Weather App',
    stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
    desc: 'A mobile app for checking the weather conditions of any city worldwide.',
    live: 'https://weathercheckerby.netlify.app/',
    source: 'https://github.com/binyamolango/react-capstone-check-weather',
  },
  {
    img: './assets/shopping-cart.png',
    name: 'Shopping Cart',
    stacks: ['External API', 'React', 'JavaScript', 'Bootstrap'],
    desc: 'Shopping Cart App is an e-commerce application based on an external API that displays shopping products based on different categories. It can also allow the user to select a product by inserting the quantity of their choice.',
    live: 'https://edenicshopping.netlify.app/',
    source: 'https://github.com/binyamolango/shopping-cart',
  },
  {
    img: './assets/space_travelers_hub.png',
    name: "Space Travelers' Hub",
    stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
    desc: "Space Travelers' Hub is a web app that uses real live data from SpaceX API and gives the user services to book rockets and join selected space missions.",
    live: 'https://edenic-space-travelers.netlify.app/',
    source: 'https://github.com/binyamolango/space-travelers-hub',
  },
  {
    img: './assets/tv_shows.png',
    name: 'TV Shows',
    stacks: ['JavaScript', 'CSS', 'External API', 'HTML'],
    desc: 'Web app that displays TV shows by fetching from an external API.',
    live: 'https://tv-shows-byo.netlify.app/',
    source: 'https://github.com/binyamolango/javascript-capstone-tv-shows',
  },
  {
    img: './assets/book_store.png',
    name: 'Book Store App',
    stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
    desc: 'A web app for adding, deleting, managing, and accessing a wide range of books.',
    live: 'https://book-store-by.netlify.app/',
    source: 'https://github.com/binyamolango/book-store',
  },
  {
    img: './assets/jazz_festival.png',
    name: 'JazzDay Festival Website',
    stacks: ['JavaScript', 'CSS', 'HTML'],
    desc: 'Jazz-concert is a website that gives detailed descriptions and information about an upcoming concert.',
    live: 'https://binyamolango.github.io/jazz-concert-capstone-project/',
    source: 'https://github.com/binyamolango/jazz-concert-capstone-project',
  },
];

projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.classList.add('col');
  card.innerHTML = `
    <div class="card" data-card-id="${index}">
      <img src="${project.img}" class="card-img-top" alt="project_img">
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <div class="card-text">
          ${project.stacks.map((stack) => (
    `<div class="tag">${stack}</div>`
  )).join('')}
        </div>
        <div class="project_btn_cont">
          <button class="project_btn">See project</button>
        </div>
      </div>
    </div>
  `;
  const projectBtn = card.querySelector('.project_btn');
  projectBtn.addEventListener('click', popupWindow);
  portfolioCard.appendChild(card);
});

export default projects;
