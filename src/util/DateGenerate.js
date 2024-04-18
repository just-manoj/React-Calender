export const generateThisMonthDates = (date) => {
  const dates = [];

  const month = date.getMonth();
  const year = date.getFullYear();
  const totalDays = new Date(year, month + 1, 0).getDate();
  let i = 0;
  for (i = 0; i < totalDays; i++) {
    dates.push(new Date(year, month, i + 1));
  }

  const lastMonthDates = generateLastMonthDates(month, year, dates[0]);
  const NextMonthDates = generateNextMonthDates(month, year, dates[i - 1]);

  for (i = 0; i < lastMonthDates.length; i++) {
    dates.unshift(lastMonthDates[i]);
  }

  for (i = 0; i < NextMonthDates.length; i++) {
    dates.push(NextMonthDates[i]);
  }

  const datesArr = [];
  let f = 0,
    l = 6;
  for (i = 0; i < dates.length / 7; i++) {
    datesArr.push(dates.slice(f, l + 1));
    f += 7;
    l += 7;
  }
  return datesArr;
};

const generateLastMonthDates = (month, year, firstDate) => {
  const dates = [];
  const noOfDates = firstDate.getDay() - 0;
  let totalDays = new Date(year, month, 0).getDate();
  for (let i = 0; i < noOfDates; i++) {
    dates.push(new Date(year, month - 1, totalDays));
    totalDays--;
  }

  return dates;
};

const generateNextMonthDates = (month, year, lastDate) => {
  const dates = [];
  const noOfDates = 6 - lastDate.getDay();
  let totalDays = 1;

  for (let i = 0; i < noOfDates; i++) {
    dates.push(new Date(year, month + 1, totalDays));
    totalDays++;
  }

  return dates;
};

export const NextMonthDateObj = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1);
};

export const preMonthDateObj = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month - 1);
};
