const express = require("express");  // Import express framework.
const app = express();  // Create an express app.

app.use(express.static(__dirname + "/views"));  // Serve static files (HTML) from the "views" folder.
app.use(express.static(__dirname + "/public"));  // Serve static files (JS, CSS, images) from the "public" folder.

const server = app.listen(5000);  // Start the server on port 5000.
app.get("/", (req, res) => {  // Handle requests to the root URL.
  res.sendFile("index.html");  // Send the "index.html" file as a response.
});
