let kirgizish = document.querySelector(".kirgizish");
let moneyUsd = document.querySelector(".money-usd");
let moneyRub = document.querySelector(".money-rub");
let moneyUzs = document.querySelector(".money-uzs");
let moneyEuro = document.querySelector(".money-eur");
let aylanishiUsd = document.querySelector(".aylanishi-usd");
let aylanishiRub = document.querySelector(".aylanishi-rub");
let aylanishiUzs = document.querySelector(".aylanishi-uzs");
let aylanishiEuro = document.querySelector(".aylanishi-eur");
let convert = document.querySelector(".convert");
let money = document.querySelector(".money");
let aylanishi = document.querySelector(".aylanishi");

money.addEventListener("click", () => {
  let selectvalue = money.value;
  if (selectvalue === "usd") {
    aylanishiUsd.style.display = "none";
    aylanishiRub.style.display = "block";
    aylanishiEuro.style.display = "block";
    aylanishiUzs.style.display = "block";
  } else if (selectvalue === "rub") {
    aylanishiRub.style.display = "none";
    aylanishiEuro.style.display = "block";
    aylanishiUzs.style.display = "block";
    aylanishiUsd.style.display = "block";
  } else if (selectvalue === "uzs") {
    aylanishiUzs.style.display = "none";
    aylanishiUsd.style.display = "block";
    aylanishiRub.style.display = "block";
    aylanishiEuro.style.display = "block";
  } else if (selectvalue === "euro") {
    aylanishiEuro.style.display = "none";
    aylanishiUzs.style.display = "block";
    aylanishiUsd.style.display = "block";
    aylanishiRub.style.display = "block";
  } else {
    aylanishiEuro.style.display = "block";
    aylanishiUzs.style.display = "block";
    aylanishiUsd.style.display = "block";
    aylanishiRub.style.display = "block";
  }
});

convert.addEventListener("click", (e) => {
  e.preventDefault();
  let input = +kirgizish.value;
  let moneyvalue = money.value;
  let aylanishivalue = aylanishi.value;
    let h2 = document.querySelector("h2");
  if (input < 0.1) {
    alert("Iltimos  0dan katta bolsin");
  } else if (moneyvalue === "usd" && aylanishivalue === "rub") {
    let chqadi = input * 69.99;
      h2.textContent = `${input} Usd = ${chqadi} Rubl`;
  } else if (moneyvalue === "usd" && aylanishivalue === "uzs") {
    let chqadi = input * 11241.92;
    h2.textContent = `${input} Usd = ${chqadi} Uzs`;
  } else if (moneyvalue === "usd" && aylanishivalue === "euro") {
    let chqadi = input * 0.95;
    h2.textContent = `${input} Usd = ${chqadi} Eur`;
  } else if (moneyvalue === "rub" && aylanishivalue === "usd") {
    let chqadi = input * 0.01;
    h2.textContent = `${input} Rubl = ${chqadi} Usd`;
  } else if (moneyvalue === "rub" && aylanishivalue === "uzs") {
    let chqadi = input * 178.54;
    h2.textContent = `${input} Rubl = ${chqadi} Uzs`;
  } else if (moneyvalue === "rub" && aylanishivalue === "euro") {
    let chqadi = input * 0.01;
    h2.textContent = `${input} Rubl = ${chqadi} Eur`;
  } else if (moneyvalue === "uzs" && aylanishivalue === "rub") {
    let chqadi = input * 0.0056;
    h2.textContent = `${input} Uzs = ${chqadi} Rubl`;
  } else if (moneyvalue === "uzs" && aylanishivalue === "euro") {
    let chqadi = input * 0.000084;
    h2.textContent = `${input} Uzs = ${chqadi} Eur`;
  } else if (moneyvalue === "uzs" && aylanishivalue === "usd") {
    let chqadi = input * 0.000088;
    h2.textContent = `${input} Uzs = ${chqadi} Usd`;
  } else if (moneyvalue === "euro" && aylanishivalue === "usd") {
    let chqadi = input * 1.04;
    h2.textContent = `${input} Eur = ${chqadi} Usd`;
  } else if (moneyvalue === "euro" && aylanishivalue === "uzs") {
    let chqadi = input * 11784.91;
    h2.textContent = `${input} Eur = ${chqadi} Uzs`;
  } else if (moneyvalue === "euro" && aylanishivalue === "rub") {
    let chqadi = input * 66.03;
    h2.textContent = `${input} Eur = ${chqadi} Rubl`;
  } else {
    alert(`Iltimos hamma pageni to'ldiring`);
    alert(`To'ldirgan bo'lsangiz pulni o'z valyutasiga convert qilmang`);
  }
});