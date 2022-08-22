export function getDateTime(time: number) {
  let date = new Date(time);
  let hours = date.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    ", " +
    hours +
    ":" +
    date.getMinutes() +
    " " +
    ampm
  );
}

export function getDate(time: number) {
  let months = [
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
  let date = new Date(time);
  return (
    months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
  );
}
