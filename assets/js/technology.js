window.onload = function () {
    getInfo(0);
    technologySelection();
}

function setTechnologyName(name) {
    var technologyName = document.getElementById("name");
    technologyName.innerHTML = name;
}

function setTechnologyDescription(description) {
    var technologyDescription = document.getElementById("description");
    technologyDescription.innerHTML = description;
}

function setTechnologyImage(image) {
    var technologyImage = document.getElementById("image");
    if(technologyImage) {
    technologyImage.setAttribute("src", image);
    }
}


async function getInfo(technologyID) {

    const requestURL = '../../data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const info = await response.json();

    setTechnologyName(info.technology[technologyID]['name']);
    setTechnologyDescription(info.technology[technologyID]['description']);
    setTechnologyImage(info.technology[technologyID]['images']['portrait']);
}

function technologySelection() {
    var technologyOptions = document.querySelectorAll(".launch-steps__choices > div");

    for (let i = 0; i < technologyOptions.length; i++) {
        technologyOptions[i].addEventListener("click", () => {
            technologyNumber= technologyOptions[i].getAttribute("id");
            var activeClass = document.querySelector(".launch-steps__choices > div.active");
            removeClass(activeClass, "class");
            addClass(technologyOptions[i], "active");
            getInfo(technologyNumber);
        });
    }
}



