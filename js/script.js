// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>2000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 2000000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The starting number, under ${num}, produces the longest chain is ${longestCollatzSequence(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the number under the limit that generates the
    longest sequence using the formula:

        n -> n/2 (n is even)
        n -> 3n+1 (n is odd)
    
        longestCollatzSequence(14) returns 9
        longestCollatzSequence(1000000) returns 837799
*/
function longestCollatzSequence(limit) {
    let longest = 1;
    let maxLength = 1;
    for (let i=Math.floor(limit/2);i<limit;i++) {
        let len = colLen(i);
        if (len>maxLength) {
            longest = i;
            maxLength = len;
        }
    }
    return longest;
}

const knownSequence = {'1':1};

// Function to Return the Length of the Collatz Sequence
function colLen(n) {
    if (knownSequence[n]) {
        return knownSequence[n];
    } else {
        const len = n%2 === 0 ? colLen(n/2) + 1 : colLen((3*n+1)/2) + 2;
        knownSequence[n] = len;
        return len;
    }
}

// Function to Clear Information
function clearInfo() {
    let txt="";
    document.getElementById("numinfo").innerHTML = txt;
}
