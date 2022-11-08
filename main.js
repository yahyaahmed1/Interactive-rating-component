let ratingCard = document.querySelector(".rating");
let thankCard = document.querySelector(".thanking");
let rate = document.querySelectorAll("li");
let btn = document.querySelector("button");
let resMsg = document.querySelector(".result-rating");

for (let i = 0; i < rate.length; i++) {
  rate[i].onclick = function () {
    rate.forEach(num => {
      if (num.classList.contains("checked")) {
        num.className = "";
      }
    });
    rate[i].classList.toggle("checked");
    btn.onclick = function () {
      ratingCard.style.display = "none";
      thankCard.style.display = "grid";
      let msg = document.createTextNode(`You selected ${rate[i].innerHTML} out of 5`);
      resMsg.appendChild(msg);
    };
  };
};
