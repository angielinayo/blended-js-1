const itemList = document.querySelectorAll('.key__item');

itemList.forEach(item => {
  item.addEventListener('click', onButtonMusicStart);
});

function onButtonMusicStart(event) {
  // console.log(event.currentTarget.dataset.key);
  //   const audio = document.querySelector(`audio[data-key="${event.currentTarget.dataset.key}"]`);
  //   audio.currentTime = 0;
  //   audio.play();

  playSound(event.currentTarget.dataset.key);
  event.currentTarget.classList.add('playing');
}

itemList.forEach(item => {
  item.addEventListener('transitionend', removeTransition);
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return;
  }
  event.target.classList.remove('playing');
}

document.addEventListener('keydown', onKeyMusicStart);

function onKeyMusicStart(event) {
  //   console.log(event.keyCode);
  const keyEl = document.querySelector(`li[data-key="${event.keyCode}"]`);
  if (!keyEl) {
    return;
  }
  keyEl.classList.add('playing');
  playSound(event.keyCode);
}

function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.currentTime = 0;
  audio.play();
}
