const INFO = {
  main: {
    title: 'Binyam_Yohannes_Portfolio',
    name: 'Binyam Y.',
    email: 'olangobinyam@gmail.com',
    logo: '../logo.png',
  },

  socials: {
    twitter: 'https://twitter.com/BinyamOlango',
    github: 'https://github.com/binyamolango/',
    linkedin: 'https://www.linkedin.com/in/binyamyohannes/',
    instagram: 'https://www.instagram.com/binyamyohannes_/',
    medium: 'https://medium.com/@olangobinyam',
    facebook: 'https://www.facebook.com/binyamyohannesolango/',
  },

  homepage: {
    name: 'Binyam Yohannes',
    title: 'Software Developer with QA Expertise',
    description1:
      'I am a full-stack web developer and QA engineer with over 2 years of experience in building and maintaining scalable, reliable systems. Passionate about math, problem-solving, and ensuring the quality and reliability of software applications with the aspiration to become a data scientist.',
    description2:
      'I have been working with JS from the beginning of my career. I have now experience in various languages, frameworks, and technologies, able to ramp up rapidly and efficiently and also expert in pair programming and remote work.',
    description3:
      'I am currently working at <a href="https://ablazelabs.com/" target="_blank" rel="noopener noreferrer" class="subtitle-desc3">Ablaze Labs</a> as a QA Engineer and freelance as a full-stack web developer.',
  },

  about: {
    title: 'Hey 👋, I’m Binyam Yohannes',
    description1:
      "A full-stack web developer who loves to use technology to solve intricate challenges. With over 40 projects under my belt, I'm always motivated to tackle the next problem. As a QA engineer and software developer with expertise in pair programming and remote work, I'm fluent in various languages, frameworks, and technologies, so I efficiently ramp up to tackle new projects.",
    description2:
      "My passion for math and deep tech keeps me driving towards my aspiration to become a data scientist. But, I won't just limit myself to the digital and technical details sphere. My interest in areas like environmental, agricultural, and health issues drives me to focus on impactful solutions that bridge the gap between technical excellence and critical global matters.",
    description3:
      "I'm always excited to explore new things, both in software development and beyond. I like playing the guitar, reading books, and going out of doors when I am not working.",
    description4:
      'If you would like to get more information about me or connect for the next project, contacting me at any time is fine just send an email or a message through LinkedIn, or visit my GitHub. I am open to new opportunities.',
  },

  projects: [
    {
      img: './medical_appointment_app.png',
      name: 'Medical Appointment App',
      stacks: ['Ruby on Rails', 'PostgreSQL', 'React', 'TailwindCSS'],
      desc: 'A web app for reserving doctors simplifies the process of scheduling medical appointments. It allows users to browse & select available doctors, view their profiles and specialties and book appointments based on their preferred date and time. The application streamlines the reservation process, saving time for both patients & healthcare providers.',
      live: 'https://capstone-module-front-end.vercel.app/',
      source: 'https://github.com/binyamolango/capstone-module-front-end',
    },
    {
      img: './recipe_app.png',
      name: 'Recipe App',
      stacks: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
      desc: "An app that keeps track of all users' recipes and ingredients. It will allow the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user have and missing from a recipe.",
      live: 'https://edenic-recipe-i1dt.onrender.com/',
      source: 'https://github.com/binyamolango/recipe_app2',
    },
    {
      img: './meal_app.png',
      name: 'Meal App',
      stacks: ['External API', 'React', 'JavaScript', 'Bootstrap'],
      desc: 'Meal App is a meal web application based on an external API that displays meals based on categories and location. It can also allow the user to like and give comments.',
      live: 'https://edenic-meal-app.netlify.app/',
      source: 'https://github.com/binyamolango/meal-app',
    },
    {
      img: './weather_app.png',
      name: 'Weather App',
      stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
      desc: 'A mobile app for checking the weather conditions of any city worldwide.',
      live: 'https://weathercheckerby.netlify.app/',
      source: 'https://github.com/binyamolango/react-capstone-check-weather',
    },
    {
      img: './shopping-cart.png',
      name: 'Shopping Cart',
      stacks: ['External API', 'React', 'JavaScript', 'Bootstrap'],
      desc: 'Shopping Cart App is an e-commerce application based on an external API that displays shopping products based on different categories. It can also allow the user to select a product by inserting the quantity of their choice.',
      live: 'https://edenicshopping.netlify.app/',
      source: 'https://github.com/binyamolango/shopping-cart',
    },
    {
      img: './space_travelers_hub.png',
      name: "Space Travelers' Hub",
      stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
      desc: "Space Travelers' Hub is a web app that uses real live data from SpaceX API and gives the user services to book rockets and join selected space missions.",
      live: 'https://edenic-space-travelers.netlify.app/',
      source: 'https://github.com/binyamolango/space-travelers-hub',
    },
    {
      img: './tv_shows.png',
      name: 'TV Shows',
      stacks: ['JavaScript', 'CSS', 'External API', 'HTML'],
      desc: 'Web app that displays TV shows by fetching from an external API.',
      live: 'https://tv-shows-byo.netlify.app/',
      source: 'https://github.com/binyamolango/javascript-capstone-tv-shows',
    },
    {
      img: './book_store.png',
      name: 'Book Store App',
      stacks: ['React', 'Redux', 'CSS', 'JavaScript'],
      desc: 'A web app for adding, deleting, managing, and accessing a wide range of books.',
      live: 'https://book-store-by.netlify.app/',
      source: 'https://github.com/binyamolango/book-store',
    },
    {
      img: './jazz_festival.png',
      name: 'JazzDay Festival Website',
      stacks: ['JavaScript', 'CSS', 'HTML'],
      desc: 'Jazz-concert is a website that gives detailed descriptions and information about an upcoming concert.',
      live: 'https://binyamolango.github.io/jazz-concert-capstone-project/',
      source: 'https://github.com/binyamolango/jazz-concert-capstone-project',
    },
  ],
};

export default INFO;
