// Function to calculate the sum of two numbers A and B
function calculateSum(numberA, numberB) {
    var a = parseInt(numberA); // Convert input A to integer
    var b = parseInt(numberB); // Convert input B to integer
    return a + b;
}

// Call the calculateSum function when button is clicked
document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the values from input fields A and B
    var inputNumberA = document.getElementById('numberA').value;
    var inputNumberB = document.getElementById('numberB').value;
    // Calculate the sum
    var result = calculateSum(inputNumberA, inputNumberB);
    // Display the result
    document.getElementById('result').textContent = 'The sum is: ' + result;
});
