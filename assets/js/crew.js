window.onload = function () {
    getInfo(0);
    crewSelection();
}

function setCrewName(name) {
    var crewName = document.getElementById("crew-name");
    crewName.innerHTML = name;
}

function setCrewBio(bio) {
    var crewBio = document.getElementById("crew-bio");
    crewBio.innerHTML = bio;
}

function setCrewTitle(title) {
    var crewTitle = document.getElementById("crew-title");
    crewTitle.innerHTML = title;
}

function setCrewImage(image) {
    var crewImage = document.getElementById("crew-image");
    if(crewImage) {
    crewImage.setAttribute("src", image);
    }
}


async function getInfo(crewID) {

    const requestURL = '../../data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const info = await response.json();

    setCrewName(info.crew[crewID]['name']);
    setCrewBio(info.crew[crewID]['bio']);
    setCrewTitle(info.crew[crewID]['role']);
    setCrewImage(info.crew[crewID]['images']['webp']);
}

function crewSelection() {
    var crewOptions = document.querySelectorAll(".crew-member__choices > div");

    for (let i = 0; i < crewOptions.length; i++) {
        crewOptions[i].addEventListener("click", () => {
            crewNumber= crewOptions[i].getAttribute("id");
            var activeClass = document.querySelector(".crew-member__choices > div.active");
            removeClass(activeClass, "class");
            addClass(crewOptions[i], "active");
            getInfo(crewNumber);
            console.log(crewNumber);
        });
    }
}



