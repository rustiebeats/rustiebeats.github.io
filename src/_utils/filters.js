function dateFormat(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function head(array, n) {
  if (!Array.isArray(array) || !array.length) return [];
  return n < 0 ? array.slice(n) : array.slice(0, n);
}

module.exports = { dateFormat, head };
