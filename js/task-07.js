const refs = {
  inputEl: document.querySelector("#font-size-control"),
  abracadabraEl: document.querySelector("#text"),
};

refs.abracadabraEl.style.fontSize = `${refs.inputEl.value}px`;
function onInputRangeChange() {
  refs.abracadabraEl.style.fontSize = `${refs.inputEl.value}px`;
}

refs.inputEl.addEventListener("input", onInputRangeChange);
