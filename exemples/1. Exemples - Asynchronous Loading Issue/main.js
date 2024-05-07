// Event listener for button click
document.getElementById('loadDataBtn').addEventListener('click', function() {
    // Load the external script asynchronously using jQuery's getScript method
    $.getScript('myAsyncScript.js', function() {
        // Script loaded successfully
        console.log('External script loaded successfully.');
        
        // Call the function from the external script to load data
        loadData();
    }).fail(function(jqxhr, settings, exception) {
        // Handle error if script loading fails
        console.error('Error loading external script:', exception);
    });
});

// Function to display data on the page
function displayData(data) {
    document.getElementById('dataContainer').innerHTML = data;
}
