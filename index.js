window.addEventListener("load", () => {
  const closeButton = document.getElementById("btn-modal-close");
  const closeIcon = document.getElementById("modal-top-close-icon");
  const disclosureButtons = ["terms", "privacy", "disclosure", "about"];
  let disclosureModal = document.getElementsByClassName("modal-overlay")[0];
  let modalButtons = document.getElementsByClassName("btn-modal");

  for (i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener("click", openModal);
  }

  closeButton.addEventListener("click", closeModal);
  closeIcon.addEventListener("click", closeModal);

  function closeModal() {
    disclosureModal.style.display = "none";
  }

  function openModal(event) {
    disclosureModal.style.display = "flex";
    disclosureButtons.forEach((button) => {
      let div = document.getElementById(`modal-${button}`);
      if (event.target.dataset["modal"] === button) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }
});
