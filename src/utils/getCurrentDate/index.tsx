export function getCurrentDay() {
  return new Date().getDate();
}

export function getCurrentMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date().getMonth()];
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFullDate() {
  return `${getCurrentMonth()} ${getCurrentDay()} ,${getCurrentYear()}`;
}
