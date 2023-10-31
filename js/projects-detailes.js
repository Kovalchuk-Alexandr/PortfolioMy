let projectId = localStorage.getItem('projectId');

const item = projects[projectId];

let title = item.title;
let desc = item.desc;
let skills = item.skills;
let img = item.imgBig;
let site = item.site;
let siteTitle = item.siteTitle;
let gitTitle = item.gitTitle;
let gitRef = item.gitRef;

// Рисуем заголовок и картинку
document.querySelector('.project .project-header').innerHTML = title;
document.querySelector('.project-img img').setAttribute('src', `./img/portfolio/${img}`);


// Выводим описание
let textEnd = "</div>";
let text = 
    `<div class="project-description"><p class="desc"> ${desc}</p>`

if (site != '') {
    text += `<p class="site-ref">Адрес сайта: <a href=${site} target="_blank">${siteTitle}</a> </p>`
}

if (skills != '') {
    text += `<p class="skills"><strong><big>Skills: </big> ${skills}</strong></p>`
}

if (gitRef != '') {
    gitTitle = (siteTitle == 'E-Shop') ? 'Для варианта с хранением Mongo-DB' : gitTitle;
    text += `<p class="github">Github: <a href=${gitRef} target="_blank">${gitTitle}</a> </p>`
}


text += textEnd;
document.querySelector('.project-description').innerHTML = text;
