  function one() {
           // Chapter 09 Q (02)
              //City name program
          let city = prompt ("Enter your city name");
          if(city === "Karachi") {
          document.getElementById('one').innerHTML = ("Welcome to city of lights!!"); } else{
          document.getElementById('one').innerHTML = ("Your City name is Incorrect!❌");}
  }
   function two() {
           // Chapter 09 Q (03)
       //Gender base-greeting program
          let gender = prompt ("Enter your gender Male/Female");
          if(gender === "Male") {
          document.getElementById('two').innerHTML = ("Good Morning Sir👨🏾");}
          else if(gender === "Female") {
          document.getElementById('two').innerHTML = ("Good Morning Ma'am👩🏾");}
          else {
            document.getElementById('two').innerHTML = ("Please enter your gender‼❕");}
   }
    function three() {
             // Chapter 09 Q (04)
          //Traffic signal color program
           let color = prompt("Enter Traffic signal color Red/Yellow/Green(🔴/🟡/🟢)");

            if (color == "Red"){
            document.getElementById('three').innerHTML = ("Must stop!!\n"); }
            else if (color == "Yellow") {
            document.getElementById('three').innerHTML = ("Ready to move!!\n"); }
            else if (color == "Green") {
            document.getElementById('three').innerHTML = ("Move now!\n"); }
            else {document.getElementById('three').innerHTML = ("Please enter the signal light color");}
    }
     function four() {
           // Chapter 09 Q (05)
            //Fuel remaining program
            let fuelvalue = "0.25";
            let fuel = (+prompt("Remaining the fuel in litres⛽"));
            if (fuel > fuelvalue) {
            document.getElementById('four').innerHTML = ("Please refill the fuel in your car⛽ = 🔴");}  
            else {
                  document.getElementById('four').innerHTML = ("please check fuel in your car⛽ = 🟢");}
          }
          function five() {
                   //JavaScript Assignment (10)
                     //Start Of The Chapter (10) 
                       //Chapter Name (If statements)
                             // Chapter 10 Q (01)
                  //conditional statements  script
             let con_a = "4"
             if (++con_a === 5) {
             alert("given condition for variable a is true")
             }
             let c = 12;
             if (c++ === 13){
             alert("Condition 1 is true");
             }
             if (c === 13){
             alert("Condition 2 is true");
            }
            if (++c > 14){
            alert("Condition 3 is true");
           }
            if (c === 14){
            alert("Condition 4 is true");
           }
        }
         function six() {
                // Chapter 10 Q (02)
                //Labour Work program
            let materialCost = 20000;
            let labourCost = 2000;
            let totalCost = materialCost + labourCost;
            if (totalCost === materialCost + labourCost); {
            alert("The cost equals");
           }
            if (true) {
            alert("True");
            }
            if (false) {
            alert("False");
           }
           if ("car < cat") {
           alert("car is smaller than cat")
           }
        }
         function seven() {
                // Chapter 10 Q (03)
              //Marks percentage and grade program
            // let sub_1 = prompt("Enter marks for subject 1");
           function getGrade(percentage) {
          if (percentage >= 90) return "A+";
          else if (percentage >= 80) return "A";
          else if (percentage >= 70) return "B";
          else if (percentage >= 60) return "C";
          else if (percentage >= 50) return "D";
          else return "Fail";
     }
            let sub_1 = prompt("Enter subject name (1)📑");
            let mark1 = +prompt("(Total 100) Enter marks of " + sub_1);
            const pec1 = (mark1 / 100) * 100;
            const grade_1 = getGrade(pec1);
            let sub_2 = prompt("Enter subject name (2)📑");
            let mark2 = +prompt("Enter marks of " + sub_2);
            const pec2 = (mark2 / 100) * 100;
            const grade_2 = getGrade(pec2);
            let sub_3 = prompt("Enter subject name (3)📑");
            let mark3 = +prompt("Enter marks of " + sub_3);
            const pec3 = (mark3 / 100) * 100;
            const grade_3 = getGrade(pec3);
            let total_Marks = 300;
            let obtainedMarks = sub_1 + sub_2 + sub_3;
            let percen = (obtainedMarks / total_Marks) * 100;

      document.getElementById('seven').innerHTML = `
<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Subject</th>
    <th>Marks</th>
    <th>Percentage</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>${sub_1}</td>
    <td>${mark1}/100</td>
    <td>${pec1.toFixed(2)}%</td>
    <td>${grade_1}</td>
  </tr>
  <tr>
    <td>${sub_2}</td>
    <td>${mark2}/100</td>
    <td>${pec2.toFixed(2)}%</td>
    <td>${grade_2}</td>
  </tr>
  <tr>
    <td>${sub_3}</td>
    <td>${mark3}/100</td>
    <td>${pec3.toFixed(2)}%</td>
    <td>${grade_3}</td>
  </tr>
</table>
`;
        }
        function eight() {
            //End Of The Chapter (10)
       
                         //JavaScript Assignment (11)
                          //Start Of The Chapter (11) 
                          //Chapter Name (Comparison operates)
                               // Chapter 11 Q (01)
                   //Guees game
           let secretNumber = 1+1;
           let guess = (+prompt ("Guess a number between 1 to 10🔢"));
            if (guess === secretNumber) {
            document.getElementById('eight').innerHTML = ("Bingo! Correct answer✅")
           }
            else if (Math.abs(guess - secretNumber) === +1) {
            document.getElementById('eight').innerHTML = ("Close enough to the answer🔃")
            } 
            else {
            document.getElementById('eight').innerHTML = (`Invalid, the answer!❎`);
           };
        }
         function nine() {
                // Chapter 11 Q (02)
                //Divisibility by 3 checks
            let ent_num = +prompt("Enter a number:");
            if (ent_num % 3 === 0) {
             document.getElementById('nine').innerHTML = ("The number is divisible by 3! 3️⃣");
           }
           else {
           document.getElementById('nine').innerHTML = ("The number is not divisible 3!❎");
            }
        }
         function ten() {
                // Chapter 11 Q (03)
                //Even or odd number check
            let numEnt = +prompt("Enter a number:🔢");
            if (numEnt % 2 === 0) {
            document.getElementById('ten').innerHTML = ("The number is even!!🔢✨");
           }
           else {
           document.getElementById('ten').innerHTML = ("The number is odd! 🔢");
          }
        }
         function eleven() {
                // Chapter 11 Q (04)
                //Temperature-based message program 
            let tem = +prompt("Enter temperature in Celsius:");
            if (tem > 40 || tem < 40) {
            document.getElementById('eleven').innerHTML = ("It is too hot outside!🔥🔥");
           }
           else if (tem > 30){
           document.getElementById('eleven').innerHTML = ("The Weather today is Normal! 💦");
           }
           else if (tem > 20){
           document.getElementById('eleven').innerHTML = ("Today's Weather is cool! 😎❄");
          }
          else if(tem > 10){
          document.getElementById('eleven').innerHTML = ("OMG! Today's weather is so Cool! 🥶❄💦🆒");
          }
          else {
          document.getElementById('eleven').innerHTML = ("Please Enter your weather temperature in Celsius:❌");
          }
        }
         function twelve() {
                // Chapter 11 Q (05)
                //Calculator program 
           let number_1 = +prompt("Enter first number:1️⃣");
           let number_2 = +prompt("Enter second number:2️⃣");
           let res;
           let operation = prompt("Enter operation (+, -, *, /, %):🔄");
     
           if (operation === "+") {
           res = number_1 + number_2;
          }
           else if (operation === "-") {
           res = number_1 - number_2;
          }  
           else if (operation === "*") {
           res = number_1 * number_2;
          }  
           else if (operation === "/") {
           if  (number_2 !== 0) {
            res = number_1 / number_2;
          }  else {
           res = "Error: Division by zero";
          } }
          else if (operation === "%") {
           if (number_2 !== 0) {
          res = number_1 % number_2;
          }  else {
          res = "Error: Modulus by zero";
          } }
           else {
          res = "Invalid operation";
          } 
          document.getElementById('twelve').innerHTML = (`Result: ${res}`);
        }
           function thirteen() {document.getElementById('twelve').innerHTML = 
                     //End Of The Chapter (11)
       
         //JavaScript Assignment (12)
         //Start Of The Chapter (12) 
          //Chapter Name (If...else and else if statements)
           // Chapter 12 Q (01)
           //Check if input is a number, uppercase or lowercase letters
           let = input = prompt("Enter a character (number or strings):");
           let charCode = input.charCodeAt();
           if (charCode >= 47 && charCode <= 57) {
           document.getElementById('thirteen').innerHTML = ("Input is a number❗❕🔢");
          }
          else if (charCode >= 65 && charCode <= 90) {
          document.getElementById('thirteen').innerHTML = ("Input is an uppercase letters!🔠");
          }
          else if (charCode >= 97 && charCode <= 122) {
          document.getElementById('thirteen').innerHTML = ("Input is an lowercase letter!🔡");
          }
          else {
           document.getElementById('thirteen').innerHTML = ("Invalid inpu!❌.")
          }
        }
         function fourteen() {
               // Chapter 12 Q (02)
            //Compare two integers and display the large or is if equal 
           let fir_num = +prompt("Enter first Integer:");
           let sec_num = +prompt("Enter second Integer:");
    
             if (fir_num > sec_num) {
             document.getElementById('fourteen').innerHTML = (`Small number is ${sec_num}!`);
            }
             else if (sec_num > fir_num) {
             document.getElementById('fourteen').innerHTML = (`Large number is ${sec_num}!`);
            }
             else if (fir_num == sec_num){
             document.getElementById('fourteen').innerHTML = (`Both numbers are equal ${sec_num}!!`)
             }
             else {
             document.getElementById('fourteen').innerHTML = ("Please enter a integer numbers");
             }
            }
             function fifteen() {
               // Chapter 12 Q (03)
               //Check if a number is positive, negative or zero
             let number = +prompt("Enter a number:");
             if (number > 0) {
             document.getElementById('fifteen').innerHTML = ("The number is positive!");
            }
            else if (number < 0) {
            document.getElementById('fifteen').innerHTML = ("The number is negative!!");
           }
            else if (number == 0){
            document.getElementById('fifteen').innerHTML = ("The number is zero!!0️⃣");
            } else {
              document.getElementById('fifteen').innerHTML = ("Please enter a number!❌")}
        }
         function sixteen() {
               // Chapter 12 Q (04)
               //Check if a character is a vowel
              let chara = prompt("Enter a character:").toLowerCase();
              let read;
              if (chara.length === 1) {
              if (["a" , "e" , "i" , "o" , "u"].includes(chara)) {
                document.getElementById('sixteen').innerHTML =("True✅");
              }
              else {
                document.getElementById('sixteen').innerHTML =("False❎");
              }
             }
              else {
                document.getElementById('sixteen').innerHTML =("Please enter a single character!");
               }
            }
             function seventheen() {
               // Chapter 12 Q (05)
               //Password validation program
              let originalpassword = "secure123✅";
              let enteredpassword = prompt ("please enter your password" , "secure123✅");
  
              if(originalpassword == "please enter your password") {
              document.getElementById('seventheen').innerHTML =("");} 
              else if(enteredpassword === null || enteredpassword === "") {
               document.getElementById('seventheen').innerHTML =("please enter your password")} 
              else { 
               if (enteredpassword === originalpassword){
                document.getElementById('seventheen').innerHTML = ("Correct! The password you entered matches the original password‼🆗")  }
              else {
                document.getElementById('seventheen').innerHTML =("Incorrect password⭕")
               }
              }
            }
            function eteen() {
            //     // Chapter 12 Q (06)
            // //Fix the if/else statement 
                let gritting;
                let hour_ = 13;
               if (hour_ < 18) {
               greeting = ("Good day");
              }
               else {
               greeting = ("Good evening");
              }
                alert(greeting);
            }
            //End Of The Chapter (10)
             function nineteen() {
         //JavaScript Assignment (13)
         //Start Of The Chapter (13) 
          //Chapter Name (Testing sets of conditions)
           // Chapter 13 Q (01)
            //Implements the logic flowchart
     var time = +prompt("Input the time (24-HR && 0000🕣")
     if (time >= 0 && time < 1200) {
          document.getElementById('nineteen').innerHTML = "Good morning"
     }
     else if (time >= 1200 && time < 1700) {
          document.getElementById('nineteen').innerHTML = "Good afternoon"
     }
     else if (time >= 1700 && time < 2100) {
          document.getElementById('nineteen').innerHTML = "Good evening"
     }
     else if (time >= 1200 && time < 2359) {
          document.getElementById('nineteen').innerHTML = "Good night"
     }
     else {
          document.getElementById('nineteen').innerHTML = "Input valid time!⭕"
     }
    }