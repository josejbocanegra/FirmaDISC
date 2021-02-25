/*const sourceName = document.getElementById("name");
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
});*/

const finalName = document.getElementById("final-name");
const finalCode = document.getElementById("final-code");
const finalEmail = document.getElementById("final-email");

finalName.contentEditable = true;
finalCode.contentEditable = true;
finalEmail.contentEditable = true;

finalName.addEventListener("click", (element) => {
  if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
});

finalCode.addEventListener("click", (element) => {
  if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
});

finalEmail.addEventListener("click", (element) => {
  if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
});
