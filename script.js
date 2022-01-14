const abc = document.querySelectorAll("input");

function changes() {
  const units = this.dataset.unit || " ";
  document.documentElement.style.setProperty(
    `--${this.id}`,
    `${this.value}${units}`
  );
}

abc.forEach((input) => {
  input.addEventListener("mousemove", changes);
  input.addEventListener("change", changes);
});
