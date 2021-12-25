const list = document.querySelectorAll("[data-tab-target]");
const container = document.querySelectorAll("[data-tab-contant]");

list.forEach((item, index) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
    container.forEach((tab) => {
      tab.classList.remove("active");
    });
    container[index].classList.add("active");
  });
});
