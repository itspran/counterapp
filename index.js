let count = 0;

function increment() {
  count++;
  console.log("Count incremented to: " + count);
  document.getElementById("count-el").innerText = count;
}

let saveEl = document.getElementById("save-el");

saveEl.textContent += " ";

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  document.getElementById("count-el").textContent = count;
}
