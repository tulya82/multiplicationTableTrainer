const getRandomInRange = (min = 1, max = 9) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const template = document.querySelector(".template");
const input = document.querySelector(".input");
const check = document.querySelector(".check");

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

template.innerText = `${firstNumber} * ${secondNumber}`;

check.addEventListener("click", () => {
  const userAnswer = Number(input.value);

  if (firstNumber * secondNumber === userAnswer) {
    alert("Поздравляем, это верный ответ");

    // let firstNumber = getRandomInRange();
    // let secondNumber = getRandomInRange();
    // template.innerText = `${firstNumber} * ${secondNumber}`;
  } else {
    alert("Извините, ответ неверный, попройте еще раз");
  }

  input.value = "";
  input.focus();
});
