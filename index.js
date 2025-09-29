let eleContainer = document.querySelector(".containrr");
let html = "";
let i,
  j,
  k = 1;
for (i = 1; i <= 5; i++) {
  // create new row
  html += "<div class='row my-2 justify-content-center'>";
  for (j = 1; j <= 5; j++) {
    html += " <button class='col-1 btn btn-dark'>" + k + "</button> &nbsp;";
    k++;
  } //inner for
  html += "</div>";
} //outer for
eleContainer.innerHTML = html;
//Now add event listener to each button
addEL();

function addEL() {
  let eleBtns = document.querySelectorAll("button");

  eleBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      eleBtns.forEach((b) => b.classList.remove("btn-danger"));
      eleBtns.forEach((b) => b.classList.add("btn-dark"));

      event.target.classList.remove("btn-dark");
      event.target.classList.add("btn-danger");

      let num = event.target.innerHTML;
      console.log(num);
      speak(num);
    });
  });
}

function speak(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
