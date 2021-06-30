// let percentage = document.getElementById("percent") / 100;
// let bill = document.getElementById("bill");
// let tip = bill => {
//   bill * percentage;
//   console.log("i made it!")
//   console.log(tip)
//   document.getElementById("yourTip") = "$" + tip;
// }
// let tip = bill => {
//   bill * percentage;
// }

// console.log(tip(40))
// console.log(tip(100))

function calculateTip() {
  // console.log("the start")
  // console.log("hello?")
  let bill = document.getElementById("bill").value;
  // console.log(bill)
  let percentage = document.getElementById("percent").value / 100;
  // console.log(percentage)
  let tip = bill * percentage;
  // console.log(tip)
  tip = tip.toFixed(2);
  // document.getElementById("yourTip").innerHTML = "$" + tip;
  // document.getElementById("totalTip").style.display = "block";
  // document.getElementById("yourTip").innerHTML = tip;
  // console.log(tip)
  // console.log("the end");
  document.getElementById("tipIntro").innerHTML = "Your tip will be:"
  document.getElementById("yourTip").innerHTML = "$" + tip;
  event.preventDefault();
}