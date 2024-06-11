var prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  } else {
    document.getElementById("navbar").style.top = "-100px";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  }
  prevScrollPos = currentScrollPos;
}