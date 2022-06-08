const para1 =
  document.querySelector("#service").offsetTop +
  document.querySelector("#service").offsetHeight -
  screen.height / 2;

const para2 =
  document.querySelector("#blog").offsetTop +
  document.querySelector("#blog").offsetHeight -
  screen.height / 2;

const para3 =
  document.querySelector("#contact").offsetTop +
  document.querySelector("#contact").offsetHeight -
  screen.height / 2;

const navLinks = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  if (window.scrollY < para1) {
    navLinks[0].classList = "selected";
    navLinks[1].classList = "";
    navLinks[2].classList = "";
  } else if (window.scrollY > para1 && window.scrollY < para2) {
    navLinks[0].classList = "";
    navLinks[1].classList = "selected";
    navLinks[2].classList = "";
  } else if (window.scrollY > para2) {
    navLinks[0].classList = "";
    navLinks[1].classList = "";
    navLinks[2].classList = "selected";
  }
});
