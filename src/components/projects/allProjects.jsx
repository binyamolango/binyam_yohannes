import React from 'react';

import INFO from '../../data/user';

import './styles/allProjects.css';

import popupWindow from './popup';

const portfolioCard = document.getElementById('portfolio_card');

const AllProjects = () => (
  <div className="all-projects-container">
    {INFO.projects.forEach((project, index) => {
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
    })}
    ;
  </div>
);

export default AllProjects;
