document.getElementById("hide1").style.display = "none";
document.getElementById("hide2").style.display = "none";
document.getElementById("hide3").style.display = "none";
document.getElementById("hide4").style.display = "none";
document.getElementById("hide5").style.display = "none";
document.getElementById("hide6").style.display = "none";

function getSelectValue(arg1, arg2) {
  var value = document.getElementById(arg1).value;
  if(value == 'Sim') {
    document.getElementById(arg2).style.display = "block";
  }
  else {
    document.getElementById(arg2).style.display = "none";

  }
}