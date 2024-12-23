import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
const date = "2024-12-8";
export function getWeekend(date) {
  const today = dayjs(date);

  const weekendTest = today.format("dddd");

  if (weekendTest != "Sunday" && weekendTest != "Saturday") {
    document.querySelector(".show").innerHTML = "not weekend";
  } else if (weekendTest === "Sunday" || weekendTest === "Saturday") {
    document.querySelector(".show").innerHTML = weekendTest;
  }
}

getWeekend(date);
