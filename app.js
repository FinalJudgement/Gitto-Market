function openNav() {
  document.getElementById("my-side-nav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("my-side-nav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.body.style.backgroundColor = "white";
}
