var Sneakers = document.getElementById("Sneakers"),
  Running = document.getElementById("Running"),
  Navigation = document.getElementById("nav"),
  BurgerOpen = document.getElementsByClassName("openNav"),
  BurgerClose = document.getElementsByClassName("closeNav"),
  Chevron = document.getElementsByClassName("Chevron"),
  About = document.getElementsByClassName("about"),
  More = document.getElementById("More"),
  slogan = document.getElementsByTagName("h2");

window.onload = function () {
  Sneakers.style.opacity = "1";
  slogan[0].style.opacity = "1";
  slogan[1].style.opacity = "1";
  More.style.opacity = "1";
  moreInfo();
};

const chng = function () {
  Sneakers.classList.toggle("hidden");
  Running.classList.toggle("hidden");
  chkr();
};

Chevron[0].addEventListener("click", chng);
Chevron[1].addEventListener("click", chng);

More.addEventListener("click", function () {
  if (More.textContent == "MORE INFO") {
    More.textContent = "EXIT";
  } else {
    More.textContent = "MORE INFO";
  }
  Sneakers.classList.toggle("shoeUp");
  Running.classList.toggle("shoeUp");
  slogan[0].classList.toggle("hidden");
  slogan[1].classList.toggle("hidden");
  chkr();
  moreInfo();
});

BurgerOpen[0].addEventListener("click", function () {
  if (window.innerWidth > 768) {
    Navigation.style.width = "20vw";
  } else {
    Navigation.style.width = "50vw";
  }
});

BurgerClose[0].addEventListener("click", function () {
  Navigation.style.width = "0";
});

const chkr = function () {
  if (More.textContent == "EXIT") {
    if (Sneakers.classList.contains("hidden")) {
      About[1].classList.remove("hidden");
      About[0].classList.add("hidden");
    } else if (Running.classList.contains("hidden")) {
      About[0].classList.remove("hidden");
      About[1].classList.add("hidden");
    }
  } else if (More.textContent == "MORE INFO") {
    About[1].classList.add("hidden");
    About[0].classList.add("hidden");
  }
};

const moreInfo = function () {
  if (More.textContent == "MORE INFO") {
    if (window.innerWidth > 571) {
      More.style.top = "65%";
    } else if (window.innerWidth < 571) {
      More.style.top = "60%";
    }
  } else {
    if (window.innerWidth > 541) {
      More.style.top = "65%";
    } else if (window.innerWidth < 541) {
      More.style.top = "80%";
    }
  }
};
