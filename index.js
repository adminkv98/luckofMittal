 var a = Math.floor(Math.random() * 6) + 1;

var img = ("images/dice" + a + ".png");

var c = document.querySelectorAll("img")[0];
c.setAttribute("src", img);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img1 = ("images/dice" + randomNumber2 + ".png");

var imgSource = document.querySelectorAll("img")[1].setAttribute("src",img1);

var sum = a + randomNumber2;
if(sum > 7)
{
  document.querySelectorAll("h1")[0].innerHTML = "Greater than 7";
}
else if (sum < 7) {
  document.querySelectorAll("h1")[0].innerHTML = "Less Than 7"
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "exact 7";
}
