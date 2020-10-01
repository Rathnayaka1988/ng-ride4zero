const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist/ng-test-app'));

const port = process.env.PORT || 8080;
console.log("Using port", port);

// Start the app by listening on the default Heroku port
app.listen(port);
