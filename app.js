function endGame(message){
  $(".modal-title").html(message);
  $("#poop").trigger("click");
  $("#z").click(function(){
    location.reload(true);
  });
}

function display(first, second, third){
  $("#" + first).animate({ backgroundColor: "#ffc34d" });
  $("#" + second).animate({ backgroundColor: "#ffc34d" });
  $("#" + third).animate({ backgroundColor: "#ffc34d" });
}

function drawX(letter){
    $("#"+letter).html("<h1 class='cross'>X</h1>");
    $('.cross').animate({"opacity": 1});
};

function check(player){
  var str = "";
  player === "human" ? str = "LOSER!!!" : str = "You win!";
  // get data for each square
  var a = $("#a > .cross").html();
  var b = $("#b > .cross").html();
  var c = $("#c > .cross").html();
  var d = $("#d > .cross").html();
  var e = $("#e > .cross").html();
  var f = $("#f > .cross").html();
  var g = $("#g > .cross").html();
  var h = $("#h > .cross").html();
  var i = $("#i > .cross").html();
  
  // four sides
  if (a === "X" && b === "X" && c === "X"){ display("a", "b", "c"); return false; }
  else if (a === "X" && d === "X" && g === "X"){ display("a", "d", "g"); return false; }
  else if (g === "X" && h === "X" && i === "X"){ display("g", "h", "i"); return false; }
  else if (c === "X" && f === "X" && i === "X"){ display("c", "f", "i"); return false; }
  
  // middle cross
  else if (b === "X" && e === "X" && h === "X"){ display("b", "e", "h"); return false; }
  else if (d === "X" && e === "X" && f === "X"){ display("d", "e", "f");  return false; }
  
  // diagonals
  else if (a === "X" && e === "X" && i === "X"){ display("a", "e", "i"); return false; }
  else if (c === "X" && e === "X" && g === "X"){ display("c", "e", "g"); return false; }
  return true;
}

function computer(){
  var a = $("#a > .cross").html();
  var b = $("#b > .cross").html();
  var c = $("#c > .cross").html();
  var d = $("#d > .cross").html();
  var e = $("#e > .cross").html();
  var f = $("#f > .cross").html();
  var g = $("#g > .cross").html();
  var h = $("#h > .cross").html();
  var i = $("#i > .cross").html();
  var choices = [];
  if (a !== "X"){ choices.push('a'); }
  if (b !== "X"){ choices.push('b'); }
  if (c !== "X"){ choices.push('c'); }
  if (d !== "X"){ choices.push('d'); }
  if (e !== "X"){ choices.push('e'); }
  if (f !== "X"){ choices.push('f'); }
  if (g !== "X"){ choices.push('g'); }
  if (h !== "X"){ choices.push('h'); }
  if (i !== "X"){ choices.push('i'); }
  var index = Math.floor(Math.random() * choices.length);
  drawX(choices[index]);
  var winner = check("computer");
  if (!winner){ endGame("Winner winner chicken teryaki!");}
}

var play = function(letter){
  drawX(letter);
  var winner = check("human");
  if(!winner){
    endGame("Wow, you suck eggs...");
  }
  else{
    setTimeout(function(){ computer(); }, 1500);
  }
}

$(document).ready(function(){
  $(".square").click(function(){
    var letter = $(this).attr("id");
    play(letter);
  });
});