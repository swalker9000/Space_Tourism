window.onload = function () {
    getInfo(0);
    technologySelection();
}

window.onresize = function () {
    getInfo(0);
}

function setTechnologyName(name) {
    var technologyName = document.getElementById("name");
    technologyName.innerHTML = name;
}

function setTechnologyDescription(description) {
    var technologyDescription = document.getElementById("description");
    technologyDescription.innerHTML = description;
}

function setTechnologyImage(image1, image2) {
    var technologyImage = document.getElementById("image");
    if (technologyImage) {
        if (window.innerWidth <= 768) {
        technologyImage.setAttribute("src", image1);
        } else {
            technologyImage.setAttribute("src", image2);
        }
    }
}




async function getInfo(technologyID) {

    const requestURL = '../../data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const info = await response.json();
    const technologyInfo = info.technology[technologyID];

    setTechnologyName(technologyInfo['name']);
    setTechnologyDescription(technologyInfo['description']);
    setTechnologyImage(technologyInfo['images']['landscape'], technologyInfo['images']['portrait']);
}

function technologySelection() {
    var technologyOptions = document.querySelectorAll(".launch-steps__choices > div");

    for (let i = 0; i < technologyOptions.length; i++) {
        technologyOptions[i].addEventListener("click", () => {
            technologyID = technologyOptions[i].getAttribute("id");
            var activeClass = document.querySelector(".launch-steps__choices > div.active");
            removeClass(activeClass, "class");
            addClass(technologyOptions[i], "active");
            getInfo(technologyID);
        });
    }
}



