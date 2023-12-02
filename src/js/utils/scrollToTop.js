window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const myButton = document.querySelector("#button-scroll-top");
  if (
    document.body.scrollTop > document.body.scrollHeight * 0.25 ||
    document.documentElement.scrollTop > document.body.scrollHeight * 0.25
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
