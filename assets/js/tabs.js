let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

document.querySelector("#tab-contents").children[0].classList.remove("hidden");
tabTogglers[0].classList.add("tab-selected");

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].classList.remove("tab-selected");
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.classList.add("tab-selected");
  });
});

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
