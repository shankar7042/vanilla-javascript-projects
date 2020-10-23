const form = document.querySelector("[name='verify']");
const inputs = form.querySelectorAll(".inputs input");

function handleInput(event) {
  const input = event.target;
  if (input.nextElementSibling) {
    input.nextElementSibling.focus();
    input.nextElementSibling.select();
  }
}

function handlePaste(event) {
  const data = event.clipboardData.getData("text");

  inputs.forEach((input, index) => {
    input.value = data[index] || "";
  });

  if (data.length < 6) {
    inputs[data.length - 1].focus();
  } else if (data.length >= 6) {
    handleSubmit();
  }
}

function handleSubmit(event) {
  alert("Form Submitted");
}

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
inputs[0].addEventListener("paste", handlePaste);
