
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);  // .slice(removes the first two elements in the array prior to user input)

const [userName, githubName] = profileDataArgs;

fs.writeFile('./index.html', generatePage(userName, githubName), err => {
    if (err) throw new Error(err);
    console.log("Portfolio complete! Check out index.html to see the output!");
})


