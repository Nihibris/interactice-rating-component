function handleClick() {
  const parentEl = document.querySelector(".container__btn");
  parentEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const siblings = e.target.closest(".btn").parentNode.children;
    for (let sibling of siblings) {
      if (sibling !== btn && sibling.classList.contains("selected")) {
        sibling.classList.remove("selected");
      }
    }
    btn.classList.add("selected");
  });
}
handleClick();
function handleSubmit() {
  const parentEl = document.querySelector(".container");
  parentEl.addEventListener("click", (e) => {
    const parentElSub = e.target.closest(".btn-submit");
    const thankYou = document.querySelector(".container__thank-you");
    if (!parentElSub) return;
    parentEl.classList.add("hidden");
    thankYou.classList.remove("hidden");
    thankYou.insertAdjacentHTML(
      "afterbegin",
      `

      <img src="./images/illustration-thank-you.svg"/>
<div class="out-of">You selected ${document.querySelector(".selected").getHTML()} out of 5</div>
      <div class="thank-you-text">
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
`,
    );
  });
}
handleSubmit();
