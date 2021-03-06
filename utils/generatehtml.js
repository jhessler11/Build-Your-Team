
// generates html elements for position selected in prompts.
const createHtml = (employees) => {
    //creates manager card
    const managerHTML = (manager) => {

        return `
       
        <div class="card column">
                <div class="card-header">
                    <h2 class="card-header-title has-background-primary-dark has-text-white">Manager: ${manager.getName()}<h2>
                </div>
                <div class="card-content">
                    <p class="content m-2 box has-text-black">ID: ${manager.getId()}</p>
                    <p class="content m-2 box has-text-black"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></p>
                    <p class="content m-2 box has-text-black"> Office Number: ${manager.getOfficeNumber()}</P>
                </div>
        </div>
        `
    };
    // creates engineer card
    const engineerHTML = (engineer) => {

        return `
       
        <div class="card column">
            <div class="card-header">
                <h2 class="card-header-title has-background-link-dark has-text-white">Engineer: ${engineer.getName()}<h2>
            </div>
            <div class="card-content">
                <p class="content m-2 box has-text-black">ID: ${engineer.getId()}</p>
                <p class="content m-2 box has-text-black"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></p>
                <p class="content m-2 box has-text-black"><a href="https://github.com/${engineer.getGithub()}" target="_blank">GitHub: ${engineer.getGithub()}</a><p>
            </div>
        </div>
        `
    };
    // creates intern card.
    const internHTML = (intern) => {

        return `
       
        <div class="card column">
            <div "card-header">
                <h2 class="card-header-title has-background-info-dark has-text-white">Intern: ${intern.getName()}<h2>
            </div>
            <div "card-content">
                <p class="content m-2 box has-text-black">ID: ${intern.getId()}</p>
                <p class="content m-2 box has-text-black"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a><p>
                <p class="content m-2 box has-text-black" >School: ${intern.getSchool()}<p>
            </div>
        </div>
        `
    };
    //
    const pageHtml = [];

    // filters employees by manager and pulls out any mangers a places them in a new array
    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Manager')
        .map((manager) => managerHTML(manager)));
    // filters employees by engineer and pulls out any engineers and places them in a new array
    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map((engineer) => engineerHTML(engineer))
        .join(""));
    // filters employees by intern and pulls out any interns and places them in a new array
    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Intern')
        .map((intern) => internHTML(intern))
        .join(""));


    return pageHtml.join("")
}



// generates the actual html pages
const generateHtml = (newData) => {


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The best Team Builder</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./assets/css/styles.css">
    </head>
    <body>
    <h1 class="title is-1 has-text-white has-background-link-dark has-text-centered p-1">The Best Team Ever!<h1>
    <div class="container columns">${createHtml(newData)}</div>
    
    </body>
    </html>
    `
}


module.exports = generateHtml;
