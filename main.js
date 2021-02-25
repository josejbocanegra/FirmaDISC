const finalName = document.getElementById("final-name");
const finalCode = document.getElementById("final-code");
const finalEmail = document.getElementById("final-email");

const controls = [
  { control: finalName, text: "Nombre" },
  { control: finalCode, text: "Código" },
  { control: finalEmail, text: "Correo electrónico" },
];

controls.forEach((item) => {
  item.control.contentEditable = true;
  item.control.addEventListener("click", (element) => {
    if (element.target.innerHTML.includes("[")) element.target.innerHTML = "";
  });

  item.control.addEventListener("focusout", (element) => {
    if (element.target.innerHTML === "")
      element.target.innerHTML = `${item.text} [Clic para editar]`;
  });
});
