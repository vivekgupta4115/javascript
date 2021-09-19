// let isLoggedin = 1;

// if (isLoggedin == 0) {
//     document.write('Login');
// } else {
//     document.write('logout');
// }

// let option = isLoggedin == 1 ? "Logout" : "Login";
// document.write(option);




// question
//if input = 1,"y","yes" output = continue.....
//if input = 0, "n","no" output = end.....

// let input;
// input = "no";

// if (input === 1) {
//     document.write("continue");
// } else if (input === "y") {
//     document.write("continue");
// } else if (input === "yes") {
//     document.write("continue");
//     // aise bhi write skte hai;
// } else if (input === 0 || input === "n" || input === "no") {
//     document.write("end");
// } else {
//     document.write("wrong input");
// }



//=== comparsion
// switch (input) {
//     case 1: // if (input === 1) 
//         document.write("comtinue");
//         break;
//     case "y": // if (input === "y") 
//         document.write("comtinue");
//         break;
//     case "yes": // if (input === "yes") 
//         document.write("comtinue");
//         break;
//     case 0:
//         document.write("end");
//         break;
//     case "n":
//         document.write("end");
//         break;
//     case "no":
//         document.write("end");
//         break;
//     default:
//         document.write("wrong input");
// }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// loop

// let counter = 1;

// while (counter <= 10) {
//     document.write("vivek");
//     counter++;
// }


//--------------------------------------------------


// let counter = 1;
// let sum = 0;

// while (counter <= 100) {
//     if (counter % 2 == 0) {
//         sum = sum + counter;
//     }
//     counter++;
// }
// document.write(sum);


//-------------------------------------------------------------


// let counter = 1;

// while (counter <= 10) {
//     document.write("vivek");
//     counter++;
// }


//--------------------------------------------------------------------------


// let counter = 12;
// do {
//     document.write('vivek');
//     counter++
// }
// while (counter <= 10);


//---------------------------------------------------------


// for (let counter = 1; counter <= 10; counter++) {
//     document.write("vivek");
// }


//-----------------------------------------------------------------------------------------


// for (let counter = 1; counter <= 15; counter++) {
//     document.write(counter);
//     document.write('<br>')
// }


//----------------------------------------------------------------------------


// for (let i = 1; i <= 10; i++) {

//     if (i == 5) {
//         break;
//     }
//     document.write(i);
//     document.write('<br>')
// }


//----------------------------------------------------------------------------------------------------------------


// for (let i = 1; i <= 10; i++) {

//     if (i == 5) {
//         continue;
//     }
//     document.write(i);
//     document.write('<br>')
// }


//---------------------------------------------------------------------------------


// for (let i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write('<br>');

//     for (j = 1; j < 3; j++) {

//         if (i == 3) {
//             break;
//         }

//         document.write('vivek')
//         document.write('<br>')
//     }
// }


//-------------------------------------------------------------------------------------------


//outer: for (let i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write('<br>');

//     for (j = 1; j < 3; j++) {

//         if (i == 3) {
//             break outer;      //bahr vala loop break ho jaye ga;
//         }

//         document.write('vivek')
//         document.write('<br>')
//     }
// }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//...Alert.............................

// alert("wellcome");

//.....Prompt.........................................

// prompt('enter your age');

// let age = prompt('enter your age');
// if (age != null) {
//     document.write('Your Age is ${age}');
// } else {
//     document.write('Age Field was Blank');
// }

//.....Confirm....................................................

// let response = confirm('Are you sure,You want to Delete?');

// if (response) {
//     document.write('Deleted');
// } else {
//     document.write('Not Deleted');
// }