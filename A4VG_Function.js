function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var x = document.getElementById("Change-Text");
    if (x.innerHTML === "Toggle Dark Mode") {
      x.innerHTML = "Toggle Light Mode";
    } else {
      x.innerHTML = "Toggle Dark Mode";
    }
 }
