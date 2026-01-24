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

export function getDate(date: Date) {
  const dayOfWeek = dayNames[date.getDay()];

  return {
    year: date.getFullYear(),
    month: monthNames[date.getMonth()],
    day: dayOfWeek,
  };
}

export function getNextMonth(date: Date) {
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + 1);
  const dayOfWeek = dayNames[nextDate.getDay()];

  return {
    year: nextDate.getFullYear(),
    month: monthNames[nextDate.getMonth()],
    day: dayOfWeek,
  };
}

export function getPrevMonth(date: Date) {
  const prevDate = new Date(date);
  prevDate.setMonth(prevDate.getMonth() - 1);
  const dayOfWeek = dayNames[prevDate.getDay()];

  return {
    year: prevDate.getFullYear(),
    month: monthNames[prevDate.getMonth()],
    day: dayOfWeek,
  };
}

export function getNextDay(date: Date) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  const dayOfWeek = dayNames[nextDate.getDay()];

  return {
    year: nextDate.getFullYear(),
    month: monthNames[nextDate.getMonth()],
    day: dayOfWeek,
    date: nextDate.getDate(),
  };
}

export function formatDate(date: Date): string {
  const monthShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthShort[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}

export function getDaysGrid(date: Date): number[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid: number[] = [];

  for (let i = 0; i < firstDay; i++) {
    grid.push(0);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    grid.push(day);
  }
  return grid;
}
