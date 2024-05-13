const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", (event) => {
  const enteredName = event.currentTarget.value.trim();
  refs.span.textContent = enteredName ? enteredName : "Anonymous";
});
