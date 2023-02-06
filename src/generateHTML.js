// Create Manager card
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

// Create Engineer card
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

// Create Intern card
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
