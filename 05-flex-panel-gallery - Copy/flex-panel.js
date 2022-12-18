const panelsList = document.querySelectorAll(".panel");

const toggleOpen = (event) => {
  const isOpen = document.querySelector(".open");
  event.currentTarget.classList.toggle("open");
  if (isOpen) {
    isOpen.classList.remove("open");
  }
};

panelsList.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});
