class TipCalculator {
  constructor(bill, custom, population, tipPerson, totalPerson) {
    this.bill = bill;
    this.custom = custom;
    this.population = population;
    this.tipPerson = tipPerson;
    this.totalPerson = totalPerson;
    this.tip = "";
    this.percent = "";
  }

  getpercent(per) {
    this.percent = per.innerText;
  }

  getCustom(custom) {
    this.bill = parseFloat(bill.value);
    this.population = parseFloat(population.value);
    this.custom = parseFloat(custom.value);
    this.custom = this.custom / 100;
    console.log(this.custom);
    if (isNaN(this.bill) || isNaN(this.population) || isNaN(this.custom)) {
      return;
    }

    let result;
    let tipResult;

    this.initialBill = this.bill;
    this.tip = this.bill * this.custom;
    tipResult = this.tip / this.population;
    this.tipPerson.innerText = `$${tipResult}`;
    this.bill = this.bill + this.tip;
    result = this.bill / this.population;
    this.totalPerson.innerText = `$${result}`;
    this.bill = this.initialBill;
  }

  totalbill() {
    this.bill = parseFloat(bill.value);
    this.population = parseFloat(population.value);
    if (isNaN(this.bill)) {
      return;
    }
    if (this.population === 0 || isNaN(this.population)) {
      zero.classList.add("visible");
      return;
    }
    const percentage = this.percent;
    let result;
    let tipResult;

    switch (percentage) {
      case "5%":
        this.tip = this.bill * 0.05;
        tipResult = this.tip / this.population;
        this.tipPerson.innerText = `$${tipResult}`;
        this.bill = this.bill + this.tip;
        result = this.bill / this.population;
        this.totalPerson.innerText = `$${result}`;
        break;
      case "10%":
        this.tip = this.bill * 0.1;
        tipResult = this.tip / this.population;
        this.tipPerson.innerText = `$${tipResult}`;
        this.bill = this.bill + this.tip;
        result = this.bill / this.population;
        this.totalPerson.innerText = `$${result}`;
        break;
      case "15%":
        this.tip = this.bill * 0.15;
        tipResult = this.tip / this.population;
        this.tipPerson.innerText = `$${tipResult}`;
        this.bill = this.bill + this.tip;
        result = this.bill / this.population;
        this.totalPerson.innerText = `$${result}`;
        break;
      case "25%":
        this.tip = this.bill * 0.25;
        tipResult = this.tip / this.population;
        this.tipPerson.innerText = `$${tipResult}`;
        this.bill = this.bill + this.tip;
        result = this.bill / this.population;
        this.totalPerson.innerText = `$${result}`;
        break;
      case "50%":
        this.tip = this.bill * 0.5;
        tipResult = this.tip / this.population;
        this.tipPerson.innerText = `$${tipResult}`;
        this.bill = this.bill + this.tip;
        result = this.bill / this.population;
        this.totalPerson.innerText = `$${result}`;
        break;
      default:
        break;
    }
  }

  computeTotal() {
    this.bill = parseFloat(bill.value);
    this.population = parseFloat(population.value);
    if (isNaN(this.bill) || isNaN(this.population)) {
      return;
    }

    if (this.population === 0 || isNaN(this.population)) {
      zero.classList.add("visible");
      return;
    } else {
      zero.classList.remove("visible");
    }
    this.totalPerson.innerText = `$${this.bill / this.population}`;
  }

  reset() {
    bill.value = "";
    this.bill = bill;
    population.value = "";
    this.population = population.value;
    this.totalPerson.innerText = "$0.00";
    this.tipPerson.innerText = "$0.00";
    custom.value = "";
    this.custom = custom.value;
  }
}

const bill = document.getElementById("paid-amount");
const percent = document.querySelectorAll(".percent");
const custom = document.getElementById("custom");
const tipPerson = document.getElementById("tip-person");
const totalPerson = document.getElementById("total-person");
const population = document.getElementById("population");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");

const tipCalculator = new TipCalculator(
  bill,
  custom,
  population,
  tipPerson,
  totalPerson
);

percent.forEach((per) => {
  per.addEventListener("click", () => {
    tipCalculator.getpercent(per);
    tipCalculator.totalbill();
  });
});

clear.addEventListener("click", () => {
  tipCalculator.reset();
});

population.addEventListener("input", () => {
  tipCalculator.computeTotal();
});

bill.addEventListener("input", () => {
  tipCalculator.computeTotal();
});

custom.addEventListener("input", () => {
  tipCalculator.totalbill();
  tipCalculator.getCustom(custom);
});
