// Just our standard "don't clog the scripts with document.getElementById()" script
var $ = function( id ) { return document.getElementById( id ); };

var term1, operator, term2; // Everything is calculated by evaluating these three together.
var flag = true; // When flag's true, next input will REPLACE the current display
                 // Basically, it means it's time to work on the next term.


// Insert items into the calculator's display
function insert(num) {
 if (flag == true && num != "%"){           // If it's time for a new term
   flag = false;                            // Tell that to our flag
   $("display").value = num;                // And replace the current display with out input
 }
 else if($("display").value.includes("%")); // No more adding things if we already hit %.
 else $("display").value += num;            // Otherwise, add our new input to the display
}


// A custom inster function for decimal points.
function deci(){
 if ($("display").value ==="0"               // Add decimal points AFTER 0's
     || flag == true) insert("0.");          // or new terms
 else if ($("display").value.includes(".")); // Do NOTHING if we already have one
 else insert("."); // Otherwise, just add a decimal to the end of the current term.
}


// This function clears the display
function ac(){             //When you hit the AC button
 $("display").value = "0"; //It clears the display!
 term1 = "";
 term2 = "";
 operator = "";
 flag = true;
}


// A function explicitly called when we hit ±
function plusminus(){
 if ($("display").value.charAt(0) ==="-")
    $("display").value = $("display").value.substr(1);
 else if ($("display").value.charAt(0) ==="0"
          && $("display").value.length == 1);
 else $("display").value = "-" + $("display").value;
}


// This function is for any of the operators, ÷ × - +
function operate (sign) {
 term1 = percent($("display").value);

 operator = sign;
 flag = true;
};


// This function executes when we hit the "=" button
function solve() {
 term2 = percent($("display").value);
 $("display").value = eval(term1+operator+term2);
 flag = true;
}


// The function for calculating terms with a % at the end
function percent(term){
 if (term.includes("%"))
  return term.substring(0, term.length-1) * 0.01;
 else return term;
}
