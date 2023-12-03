function reverseDate(date) {
  let formattedDate = date.split("-").reverse().join("/");
  return formattedDate;
}

function originalDate(date) {
  let formattedDate = date.split("/").reverse().join("-");
  return formattedDate;
}

function handleBlur(event) {
  event.target.type = "text";
  const value = reverseDate(event.target.value);
  event.target.value = value;
}
