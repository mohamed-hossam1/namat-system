const monthNames = [
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

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthNumber(month: number | string): number {
  if (typeof month === "number") return month;
  return monthNames.indexOf(month);
}

function getDayNumber(day: number | string): number {
  if (typeof day === "number") return day;
  const abbr = dayNames.indexOf(day as string);
  if (abbr !== -1) return abbr;
  const fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return fullDays.indexOf(day as string);
}

export function getDate(
  year: number,
  month: number | string,
  day: number | string = 1,
) {
  const monthNum = getMonthNumber(month);
  const dayNum = getDayNumber(day);
  const date = new Date(year, monthNum, dayNum);
  const dayOfWeek = dayNames[date.getDay()];

  return {
    year,
    month: monthNames[monthNum],
    day: dayOfWeek,
  };
}

export function getNextMonth(
  year: number,
  month: number | string,
  day: number | string = 1,
) {
  const monthNum = getMonthNumber(month);
  const dayNum = getDayNumber(day);
  let nextMonth = monthNum + 1;
  let nextYear = year;
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear += 1;
  }
  const date = new Date(nextYear, nextMonth, dayNum);
  const dayOfWeek = dayNames[date.getDay()];

  return {
    year: nextYear,
    month: monthNames[nextMonth],
    day: dayOfWeek,
  };
}

export function getPrevMonth(
  year: number,
  month: number | string,
  day: number | string = 1,
) {
  const monthNum = getMonthNumber(month);
  const dayNum = getDayNumber(day);
  let prevMonth = monthNum - 1;
  let prevYear = year;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear -= 1;
  }

  const date = new Date(prevYear, prevMonth, dayNum);
  const dayOfWeek = dayNames[date.getDay()];

  return {
    year: prevYear,
    month: monthNames[prevMonth],
    day: dayOfWeek,
  };
}

export function getDaysGrid(year: number, month: number | string): number[] {
  const monthNum = getMonthNumber(month);
  const firstDay = new Date(year, monthNum, 1).getDay();
  const daysInMonth = new Date(year, monthNum + 1, 0).getDate();
  const grid: number[] = [];

  for (let i = 0; i < firstDay; i++) {
    grid.push(0);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    grid.push(day);
  }
  return grid;
}
