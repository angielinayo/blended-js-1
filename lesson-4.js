//Task 6.1:
//Створити маркований перелік.
//Створити кнопки "Add" "Remove", які змінюватимуть склад списку
//Створити input з якого будемо отримувати значення, яке буде в li

//* Парним li вказати червоне тло, непарним - синім
//Для виконання завдання використовуйте createElement
// const listEl = document.createElement("ol");
// const addBtn = document.createElement("button");
// const removeBtn = document.createElement("button");
// const inputEl = document.createElement("input");

// addBtn.textContent = "add";
// removeBtn.textContent = "remove";

// const containerEl = document.querySelector(".container");
// containerEl.append(inputEl, addBtn, removeBtn, listEl);

// const addHandler = () => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = inputEl.value ? inputEl.value : "Nothing";
//   listEl.append(itemEl);
//   inputEl.value = "";

//   const isEven = listEl.children.length % 2 === 0;
//   itemEl.style.background = isEven ? "red" : "blue";
// };

// addBtn.addEventListener("click", addHandler);

// const removeHandler = () => {
//   if (!listEl.hasChildNodes()) {
//     console.log("No elements to be removed");
//     return;
//   }
//   listEl.lastElementChild.remove();
// };

// removeBtn.addEventListener("click", removeHandler);

//Task 6.2
//Створити невелику гру:)
// - Спочатку на екрані користувача відображатиметься
// яка - то форма(коло, квадрат, прямокутник)
// - При натисканні на неї в рандомному порядку форма повинна//змінюватися на іншу
// - Форма щоразу повинна з'являтися у різних місцях на сторінці
// - Колір форми в рандомному порядку змінюється,

const forms = [
  "width: 100px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000",
  "width: 150px; height: 100px; border-width: 1px; border-color: #000000",
  "width: 200px; height: 100px; border-radius: 100px / 50px;",
  "width: 150px; height: 100px; transform: skew(20deg);",
];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomither = (max) => {
  return Math.floor(Math.random() * max);
};
const formEl = document.createElement("div");
const container = document.querySelector("container");

formEl.style.cssText = forms[0];
formEl.style.background = getRandomHexColor();

container.append(formEl);
formEl.addEventListener("click", onFormElClick);

function onFormElClick() {
  formEl.style.cssText = forms[randomither(forms.length)];
  formEl.style.background = getRandomHexColor();

  const height =
    100 - (formEl.clientHeight * 100) / document.documentElement.clientHeight;
  const width =
    100 - (formEl.clientWidth * 100) / document.documentElement.clientWidth;
  formEl.style.position = "absolute";
  formEl.style.top = `${randomither(height)}%`;
  formEl.style.left = `${randomither(width)}%`;
}
