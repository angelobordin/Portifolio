const divMain = document.getElementById('principal');
const btnHome = document.getElementById('home');
const btnContact = document.getElementById('contact');
const btnProjects = document.getElementById('projects');

const divHome = document.getElementById('divHome');
const divContact = document.getElementById('divContact');
const divProjects = document.getElementById('divProjects');

btnHome.addEventListener('click', (e) => {
    e.preventDefault();
    divHome.style.display = 'block';
    divProjects.style.display = 'none';
    divContact.style.display = 'none';
});

btnContact.addEventListener('click', (e) => {
    e.preventDefault();
    divHome.style.display = 'none';
    divProjects.style.display = 'none';
    divContact.style.display = 'block';
});

btnProjects.addEventListener('click', (e) => {
    e.preventDefault();
    divHome.style.display = 'none';
    divContact.style.display = 'none';
    divProjects.style.display = 'grid';

    async function getRepos() {
        let result = [];
        await fetch('https://api.github.com/users/angelobordin/repos')
        .then((response) => response.json())
        .then(function (data) {
            result = data;
        });

        for (const repo of result) {
            const project = `<div id="project">
                                <p>
                                    ${repo.name.toUpperCase()}
                                </p>
                                <a href="${repo.html_url}" target="_blank">Link Para o repositório</a>
                            </div>`

            divProjects.innerHTML += project;
        }
    };
    getRepos();
})