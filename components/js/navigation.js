// Page navigation smooth
export const navigate = function () {
  document.querySelectorAll(".nav__link").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    });
  });
};
navigate();
