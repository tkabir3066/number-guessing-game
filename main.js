const generateBtnElm = document.querySelector("#generate-btn");
const checkBtnElm = document.querySelector("#check-btn");

let number;

const generateRandomNumber = () => {
  let n1 = Math.random();
  let n2 = n1 * 10;
  n2 = Math.trunc(n2);
  n2 = (n2 % 6) + 1;
  number = n2;
};

// generateRandomNumber();
function generateNumberBtnClick() {
  const section2 = document.querySelector("#section2");
  const section3 = document.querySelector("#section3");

  section2.style.display = "none";
  section3.style.display = "block";
  setTimeout(() => {
    section2.style.display = "block";
    section3.style.display = "none";
  }, 1000);
}

// check number

const checkNumber = () => {
  const inputElm = document.querySelector("#field");
  const inputVal = Number(inputElm.value);
  generateRandomNumber();

  if (inputVal === number) {
    alert("Congrates, You won the game");
  } else {
    alert("OOPS !! Your guess is wrong");
  }
  generateNumberBtnClick();

  inputElm.value = "";
};

checkBtnElm.addEventListener("click", () => {
  checkNumber();
});
