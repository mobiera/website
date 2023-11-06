let tabsContainerVertical = document.querySelector("#tabsVertical");

let tabTogglersVertical =
  tabsContainerVertical.querySelectorAll("#tabsVertical a");

document
  .querySelector("#tab-contentsVertical")
  .children[0].classList.remove("hidden");
tabTogglersVertical[0].classList.add("tab-selectedVertical");

tabTogglersVertical.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    let tabNameVertical = this.getAttribute("href");
    let tabContentsVertical = document.querySelector("#tab-contentsVertical");

    for (let i = 0; i < tabContentsVertical.children.length; i++) {
      tabTogglersVertical[i].classList.remove("tab-selectedVertical");
      tabContentsVertical.children[i].classList.remove("hidden");
      if ("#" + tabContentsVertical.children[i].id === tabNameVertical) {
        continue;
      }
      tabContentsVertical.children[i].classList.add("hidden");
    }
    e.target.classList.add("tab-selectedVertical");
  });
});
