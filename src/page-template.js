const generatePage = (r_name, g_name) => {
    return `
<!DOCTYPE html> 
<html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${r_name}</h1>
        <h2><a href="https://github.com/${g_name}">Github</a></h2>
    </body>
</html>
    `;
};

module.exports = generatePage;
