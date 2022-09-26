const tabs = document.querySelectorAll(".btn-change");
const tabsContainer = document.querySelector(".switch-buttons");
const tabsContent = document.querySelectorAll(".card-change");

// Switch elements
export const switchEl = function () {
  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".btn-change");

    if (!clicked) return;
    tabs.forEach((tab) => tab.classList.remove("tab-active"));
    clicked.classList.add("tab-active");

    tabsContent.forEach((content) => content.classList.remove("card-active"));
    document
      .querySelector(`.card-info-${clicked.dataset.tab}`)
      .classList.add("card-active");
  });
};
