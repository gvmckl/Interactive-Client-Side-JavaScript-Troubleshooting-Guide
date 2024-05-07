// Function to calculate the sum of two numbers
function calculateSum() {
    var a = 10
    var b = 20 // Missing semicolon
    return a + b
}

// Call the calculateSum function
document.getElementById('calculateButton').addEventListener('click', function() {
    var result = calculateSum(); // Function call
    alert('The sum is: ' + result);
});
