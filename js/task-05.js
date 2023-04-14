const inputEl = document.querySelector("input");
const nameEl = document.getElementById("name-output");

function onInputEnter() {
  if (inputEl.value !== "") {
    nameEl.textContent = event.currentTarget.value;
  } else nameEl.textContent = "Anonymous";
}

inputEl.addEventListener("input", onInputEnter);
