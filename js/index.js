function calculateTip() {
  let bill = document.getElementById("bill").value;
  let percentage = document.getElementById("percent").value / 100;
  let tip = bill * percentage;
  tip = tip.toFixed(2);
  document.getElementById("container").style.height = "350px";
  document.getElementById("tipIntro").innerHTML = "Your tip will be:"
  document.getElementById("yourTip").innerHTML = "$" + tip;
  event.preventDefault();
}