const itemList = document.querySelectorAll(".key__item");
itemList.forEach((item) => {
  item.addEventListener("click", onButtonMusicStart);
});

function onButtonMusicStart(event) {
  playSound(event.currentTarget.dataset.key);
  event.currentTarget.classList.add("playing");
}

itemList.forEach((item) => {
  item.addEventListener("transitionend", removeTransition);
});

function removeTransition(event) {
  if (event.propertyName !== "transform") {
    return;
  }
  event.currentTarget.classList.remove("playing");
  console.log(event.propertyName);
}
document.addEventListener("keydown", onKeyMusicStart);

function onKeyMusicStart(event) {
  const keyEl = document.querySelector(`li[data-key='${event.keyCode}']`);
  if (!keyEl) {
    return;
  }
  keyEl.classList.add("playing");
  playSound(event.keyCode);
}

function playSound(key) {
  const audioEl = document.querySelector(`audio[data-key='${key}']`);
  audio.currentTime = 0;
  audio.play();
}
