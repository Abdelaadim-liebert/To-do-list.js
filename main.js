let submit = document.querySelector("[name='submit']");
let taskDiv = document.getElementsByClassName("tasks");
let taskadded = document.querySelector("[name='task']");
let spaceToshowtask = document.createElement("div");
let deleteBtn = document.createElement("button");
let taskWrited = document.createElement("span");
let divTask = document.querySelector(".tasks");
var arrayofdata = [];
var value = [];
submit.addEventListener("click", function (e) {
  if (taskadded.value !== "") {
    value.push({
      id: `${Math.floor(Math.random() * 300111111111111) + 1}`,
      title: `${taskadded.value}`,
    });
    localStorage.setItem("Tasks", JSON.stringify(value));
  }
});
submit.addEventListener("click", function (e) {
  if (localStorage.getItem("Tasks")) {
    arrayofdata = JSON.parse(localStorage.getItem("Tasks"));
    arrayofdata.forEach((element) => {
      // if (window.localStorage.getItem("Tasks") !== null) {

      
      divTask.style = "display:block";

      spaceToshowtask.style =
        "position:absolute;background-color:white;height:60px;width:620px;margin-top:20px;margin-left:20px;";
      deleteBtn.textContent = "Delete";
      deleteBtn.style =
        "position:absolute;background-color:red;height:35px;width:70px;margin-top:12px;margin-left:530px;opacity:0.8;cursor:zoom-out;border:none;";
      taskWrited.style =
        "position:absolute;height:60px;width:500px;font-weight:bold;display:flex;font-size:20px;align-items:center;";
      taskWrited.textContent = `${element.title}`;
      spaceToshowtask.appendChild(taskWrited);
      spaceToshowtask.appendChild(deleteBtn);
      divTask.append(spaceToshowtask);
    });
  }
});