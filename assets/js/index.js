let sum = 0;
function getData() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addShedA(parseInt(e.target.sA.value));
    addShedB(parseInt(e.target.sB.value));
    addShedC(parseInt(e.target.sC.value));
    addShedD(parseInt(e.target.sD.value));
  });
  let dailyLink = document.querySelector(".dailyLink");
  dailyLink.addEventListener("click", () => {
    const header = document.getElementById("header");
    header.style.display = "initial";
  });
}