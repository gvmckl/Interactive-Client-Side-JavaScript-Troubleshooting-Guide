// Function to load data asynchronously
function loadData() {
    // Simulating data loading with a delay
    setTimeout(function() {
        // Dummy data
        var data = '<p>This is the asynchronously loaded data.</p>';
        // Call the displayData function from main.js to display the data on the page
        displayData(data);
    }, 2000); // Delay of 2 seconds for demonstration
}
