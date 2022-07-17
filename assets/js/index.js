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
function addShedA(items = 0) {
    let li = document.createElement("li");
    li.textContent = ` Your production in shed A is ${items} litres per day `;
  
    document.querySelector(".answer").appendChild(li);
    console.log(typeof items);
    sum += items;
    incomeOverTime();
    incomeOverMonthly();
    // console.log(sum)
  }
  function addShedB(items = 0) {
    let li = document.createElement("li");
    li.textContent = ` Your production is shed B is ${items} litres per day`;
  
    document.querySelector(".answer2").appendChild(li);
    parseInt(items, sum);
    sum += items;
    // console.log(sum)
    incomeOverTime();
    incomeOverMonthly();
    incomeYearly();
  }
  
  function addShedC(items) {
    let li = document.createElement("li");
    li.textContent = ` Your production in shed C is ${items} litres per day`;
    document.querySelector(".answer3").appendChild(li);
    parseInt(items);
    sum += items;
    // console.log(sum)
    incomeOverTime();
    incomeOverMonthly();
    incomeYearly();
  }
  
  function addShedD(items) {
    let li = document.createElement("li");
    li.textContent = ` Your production in shed D is ${items} litres per day`;
  
    document.querySelector(".answer4").appendChild(li);
    parseInt(items);
  
    sum += items;
    totalProd = document.getElementById("total-production");
    totalProd.textContent = `Your total production is  ${sum} litres a day`;
  
    incomeOverTime();
    incomeOverMonthly();
    incomeYearly();
    // total milk production
  }
  getData();

function incomeOverTime() {
  // weekly income
  //console.log(">>>>>>>",sum);
  let weeklyIncome = sum * 45 * 7;
  console.log("Your Weekly Income will be ksh" + "" + weeklyIncome);
  weeklyEvent = document
    .getElementById("weeklyLink")
    .addEventListener("click", (e) => {
      e.preventDefault();
      console.log("sdfsdf");
      header = document.getElementById("header");

      /* const h2 = document.querySelector('.header2')
        h2.style.display="initial";*/

      header.style.display = "none";
      weekly = document.getElementById("weekly_income");

      weekly.textContent = `Your weekly income is ksh ${weeklyIncome}`;
    });
}