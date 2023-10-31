$(window).on('load', function() {
    
    // Video.js - video background
    $('#header').vide('./video/cover', {
        bgColor: '#323826'
    });

});

const projectsAll = document.querySelector('.portfolio-cards-wrapper');

// Заполняем все проекты из базы (projects.js)
projects.forEach((item) => {
    // console.log(item.id + " " + item.title + " " + item.img);
    // console.log("-----");
    projectsAll.innerHTML +=
        `<div class="card" onclick="projectDetails(${item.id})">
            <a href = "./project-page.html" class="card-link" >
                <img class="card-img" src="./img/portfolio/${item.img}" alt="${item.siteTitle}">
                <h3 class="card-title">${item.title}</h3>
                <p>${item.desc}</p>
            </a>
        </div>`
        
        // `<li class="project" onclick="projectDetails(${item.id})">
        //     <a href="./project-page.html">
        //         <img src="./img/projects/${item.img}" alt="Project img" class="project__img">
        //         <h3 class="project__title">${item.title}</h3>
        //     </a>
        // </li`;
});


// Сохраняем 'id' выбранного проекта, для последующего использования в "подробно"
function projectDetails(id) {
     
    localStorage.setItem('projectId', id);
 }