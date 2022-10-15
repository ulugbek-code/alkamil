const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const toggleElem = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}

/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});

/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}

/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}

//bot token
var telegram_bot_id = "5637092196:AAHNJJ6vt-PB9IjYp4Vl_-WajOXuPReY0pY"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001577346986; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("number").value;
  message = document.getElementById("message").value;
  select2 = document.getElementById("course").value;
  message =
    "Ismi: " +
    u_name +
    "\nTel: " +
    email +
    "\nKurslar: " +
    select2 +
    "\nIzoh: " +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    alert(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("message").value = "";
  document.getElementById("course").value = "";
  return false;
};
