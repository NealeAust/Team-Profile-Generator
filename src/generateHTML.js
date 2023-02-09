// Create a Manager card
const generateManager = function (manager) {
    return `
<div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title">${manager.name}</h3>
        <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h4>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email: <a href= "mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
`;
}

// Create an Engineer card
const generateEngineer = function (engineer) {
    return `
<div class="card employee-card">
					<div class="card-header">
						<h3 class="card-title">${engineer.name}</h3>
						<h4 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h4>
					</div>

					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item">ID: ${engineer.id}</li>
							<li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
							<li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
						</ul>
					</div>
				</div>
`
}

// Create an Intern card
const generateIntern = function (intern) {
    return `

    <div class="card employee-card">
    <div class="card-header">
        <h3 class="card-title">${intern.name}</h3>
        <h4 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h4>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item"> School: ${intern.school}</li>
        </ul>
    </div>
</div>
`
};

function generateHTML(data) {

    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Call Manager/Engineer/Intern functions
     
        if (role === "Manager") {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        }
       
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        }

         
        if (role === "Intern") {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }

    }

    const employeeCards = cardArray.join("")
   
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

// Generates html page 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="style.css" />
      <title>Team Profile Generator</title>
      <link rel="icon" href="./image/computerlogo.png" type="image/x-icon">	 
  </head>
  <body>
  <header>
      <nav class="navbar">
          <h1 class="mx-auto d-flex justify-content-center">My Team</h1>
      </nav>
  </header>
  <main>
      <div class="container">
          <div class="row">
              <div class="col-12 justify-content-center">
           
             ${employeeCards}   
          </div>
      </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
      integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"
      integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
  <script src="./assets/js/script.js"></script>
   </body>
</html>
`;
}

module.exports = generateHTML; 
