/*
function Declaration
function functionName(parameter) {
    Function Body
    Return
}

function Call
var returnVale = functionName(parameter value);
*/

function getAvegare(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const avegare = totalMarks / 3;
    return avegare;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;
var myAvegare = getAvegare(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My Avarage : ', myAvegare);