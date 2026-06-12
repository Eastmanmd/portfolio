// Locale-/timezone-independent date formatting to avoid SSR hydration drift.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = [
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

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}

export function formatDateShort(iso: string) {
  const { y, m, d } = parts(iso);
  return `${MONTHS[m]} ${d}, ${y}`.toUpperCase();
}

export function formatDateLong(iso: string) {
  const { y, m, d } = parts(iso);
  return `${MONTHS_LONG[m]} ${d}, ${y}`;
}

export function formatMonthYear(iso: string) {
  const { y, m } = parts(iso);
  return `${MONTHS[m]} ${y}`;
}
