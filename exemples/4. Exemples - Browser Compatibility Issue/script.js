// Add event listener to button
document.getElementById("notificationButton").addEventListener("click", function() {
    // Check if browser supports the Notification API
    if ("Notification" in window) {
        // Request permission to display notifications
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                // Display notification
                new Notification("Hello, World!");
            } else {
                // Fallback to alert if permission is not granted
                alert("You've blocked notifications. Please enable them to receive notifications.");
            }
        });
    } else {
        // Fallback for browsers that do not support the Notification API
        alert("Your browser does not support notifications.");
    }
});
