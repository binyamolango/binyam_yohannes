// eslint-disable-next-line import/no-cycle
import projects from './project';

const popup = document.getElementById('popup');

function popupWindow(event) {
  popup.classList.toggle('hidden');

  const { cardId } = event.currentTarget.closest('.card').dataset;
  const project = projects[cardId];
  popup.innerHTML = '';
  popup.innerHTML += `
    <div class="card" data-card-id="${cardId}">
      <img src="${project.img}" class="card-img-top" alt="...">
      <div class="card-img-overlay">
        <button type="button" class="btn-close" id="btn-close" aria-label="Close"></button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <div class="card-text">
          ${project.stacks.map((stack) => (
    `<div class="tag">${stack}</div>`
  )).join('')}
        </div>
        <p class="card-text">${project.desc}</p>
        <div class="project_btn_cont btn_row">
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project_btn" id="project_btn_live">See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a href="${project.source}" target="_blank" rel="noopener noreferrer" class="project_btn" id="project_btn_source">See source <i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  `;

  const closeBtn = popup.querySelector('#btn-close');
  closeBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });
}

export default popupWindow;
