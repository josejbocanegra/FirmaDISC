const sourceName = document.getElementById("name");
sourceName.addEventListener("input", (element) => {
  document.getElementById("final-name").textContent = element.target.value;
});

const sourceCode = document.getElementById("code");
sourceCode.addEventListener("input", (element) => {
  document.getElementById("final-code").textContent = element.target.value;
});

const sourceEmail = document.getElementById("email");
sourceEmail.addEventListener("input", (element) => {
  document.getElementById("final-email").textContent = element.target.value;
});
