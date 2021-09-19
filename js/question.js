// let age = 15;

// if (age >= 14) {
//     alert("you can vote");
// } else {
//     alert("you can not vote");
// }
let age = 15;
let hasVoterCard = 'No';

if (age >= 14 && hasVoterCard == 'yes') {
    alert("you can vote");
} else if (age >= 14 && hasVoterCard != 'yes') {
    alert("Get Your vetor id card");
} else {
    alert("you cannot vote");
}