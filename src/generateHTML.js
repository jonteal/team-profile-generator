// Require function to use the file system library
const fs = require('fs');

// Function to generate an HTML document populated with response data from user
const generateHTML = (response) => {
    fs.writeFile('./dist/index.html', writeFile(response), (err) => {
        err ? console.log(err) : console.log("yay");
    })
}

// Function that generates the HTML file after prompts are finished
const writeFile = (array) => {
    let htmlCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href ="./assets/style.css">
        <title>Team Profile Generator Template</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div class="main-container">
        `
    
        htmlCode += array.join("")
        
    htmlCode += `
    </div>
    </body>
    </html>`;
    return htmlCode;
}

// Export the generateHTML function to the index.js
module.exports = {
    generateHTML,
}
