function handleClick() {
  const btn = document.querySelector(".container__btn");
  btn.addEventListener("click", (e) => {
    const selBtn = e.target.closest(".btn");
    if (!selBtn) return;
    const siblings = e.target.closest(".btn").parentNode.children;
    for (let sibling of siblings) {
      if (sibling !== selBtn && sibling.classList.contains("selected")) {
        sibling.classList.remove("selected");
      }
    }
    selBtn.classList.add("selected");
  });
}
handleClick();
//e.target.closest(".btn").classList.add("selected");
