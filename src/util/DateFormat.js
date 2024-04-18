const month = [
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
export const dateForDisplay = (date) => {
  return `${month[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`;
};

export const MonthForDisplay = (date) => {
  return `${month[date.getMonth()]} ${date.getFullYear()}`;
};
