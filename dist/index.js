"use strict";
fetch("data.json")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    appendData(data);
})
    .catch(function (err) {
    console.log(err);
});
function appendData(data) {
    let activity = document.querySelector("#activity");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.classList.add("block");
        div.innerHTML = `
    <div class="icon" style="background-color: ${data[i].color};">
      <img src="${data[i].image}" alt="">
    </div>
    <div class="time">
      <h3>${data[i].title}</h3>
      <div class="daily hide">${data[i].timeframes.daily.current}hrs</div>
      <p class="daily hide">Last Week - ${data[i].timeframes.daily.previous}hrs</p>

      <!-- ************ -->

      <div class="weekly">${data[i].timeframes.weekly.current}hrs</div>
      <p class="weekly">Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
      
      <!-- ************ -->

      <div class="monthly hide">${data[i].timeframes.monthly.current}hrs</div>
      <p class="monthly hide">Last Week - ${data[i].timeframes.monthly.previous}hrs</p>
    </div>`;
        activity.appendChild(div);
    }
}
let daily = document.querySelector("#daily");
daily.addEventListener('click', () => {
    let day = document.getElementsByClassName("daily");
    let week = document.getElementsByClassName("weekly");
    let month = document.getElementsByClassName("monthly");
    for (let i = 0; i < day.length; i++) {
        day[i].classList.remove("hide");
        week[i].classList.add("hide");
        month[i].classList.add("hide");
    }
});
let weekly = document.querySelector("#weekly");
weekly.addEventListener('click', () => {
    let day = document.getElementsByClassName("daily");
    let week = document.getElementsByClassName("weekly");
    let month = document.getElementsByClassName("monthly");
    for (let i = 0; i < week.length; i++) {
        day[i].classList.add("hide");
        week[i].classList.remove("hide");
        month[i].classList.add("hide");
    }
});
let monthly = document.querySelector("#monthly");
monthly.addEventListener('click', () => {
    let day = document.getElementsByClassName("daily");
    let week = document.getElementsByClassName("weekly");
    let month = document.getElementsByClassName("monthly");
    for (let i = 0; i < month.length; i++) {
        day[i].classList.add("hide");
        week[i].classList.add("hide");
        month[i].classList.remove("hide");
    }
});
//# sourceMappingURL=index.js.map