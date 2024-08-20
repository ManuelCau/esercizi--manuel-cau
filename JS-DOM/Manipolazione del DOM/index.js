function addProduct() {
  // Prendi il valore dell'input
  const input = document.querySelector("input");
  input.setAttribute("id", "my-input");
  const ul = document.querySelector("ul");

  const value = input.value;
  if (value !== "") {
    const container = document.createElement("div");
    ul.appendChild(container);
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    container.appendChild(check);
    const li = document.createElement("li");
    container.appendChild(li);

    container.style.display = "flex";
    li.style.listStyleType = "none";

    li.innerText = value;
  }

  input.value = "";
}
