const disclosuresLinks = document.querySelectorAll('.disclosures-link');
const modalOverlay = document.querySelector('.modal-overlay');
const dataModal = document.querySelector('.data-modal');
const modalCopy = document.querySelector('.modal-copy');

function openModal(modalId) {
  document.getElementById(modalId).modalCopy.add('show');
  modalOverlay.classList.add('show');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('show');
  modalOverlay.classList.remove('show');
}

for (let i = 0; i < disclosuresLinks.length; i++) {
  disclosuresLinks[i].addEventListener('click', (event) => {
    event.preventDefault();
    const modalId = event.target.getAttribute('data-modal');
    openModal(modalId);
  });
}

modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    const modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
      closeModal(modals[i].id);
    }
  }
});

const modalTopCloseIcon = document.getElementById('modal-top-close-icon');
const modalTops = document.querySelectorAll('.modal-top');

for (let i = 0; i < modalTops.length; i++) {
  modalTops[i].addEventListener('click', (event) => {
    const modalId = event.target.closest('.modal').id;
    closeModal(modalId);
  });
}

modalTopCloseIcon.addEventListener('click', (event) => {
  const modalId = event.target.closest('.modal').id;
  closeModal(modalId);
});

