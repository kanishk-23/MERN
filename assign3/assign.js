// Greeting functionality
document.getElementById("greetBtn").addEventListener("click", function() {
  const name = document.getElementById("username").value.trim();
  const greeting = document.getElementById("greeting");

  if (name) {
    greeting.textContent = "Hello, " + name;
  } else {
    greeting.textContent = "Hello";
  }
});

// Box colour functionality
const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.addEventListener("click", function() {
    this.style.backgroundColor = this.textContent});
}
