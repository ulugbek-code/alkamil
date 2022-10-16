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
    if (response.ok) {
      alert("Ma'lumotlar jo'natildi");
    }
  });
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("message").value = "";
  document.getElementById("course").value = "";
  return false;
};
