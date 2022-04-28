// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>2000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 2000000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The starting number, under ${num}, produces the longest chain is ${longestCollatzSequence(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}