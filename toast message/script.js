const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createToastMessage();
});

function createToastMessage() {
  const div = document.createElement("div");
  div.innerText = "Hello World";
  div.classList.add("toast");
  container.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
}
