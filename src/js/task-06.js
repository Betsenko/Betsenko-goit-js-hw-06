const inputEl = document.getElementById("validation-input");
function onInputEnterCompare(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.replace("invalid", "valid");
    } else {
      inputEl.classList.add("valid");
    }
  } else {
    inputEl.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", onInputEnterCompare);
