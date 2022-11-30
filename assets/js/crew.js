window.onload = function () {
    getInfo(0);
    crewSelection();
    initHamburger();
    activeNav();

}

function removeClass(selector, name) {
    selector.removeAttribute(name);
}

function addClass(selector, name) {
    selector.setAttribute("class", name);

}

function openNav() {
    var hamburger = document.getElementById("hamburger");
    var mobileNav = document.getElementById("mobile-nav");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            if (mobileNav) {
                mobileNav.classList.remove("close");
                mobileNav.classList.add("open");
            }
        })
    }
}

function closeNav() {
    var closeIcon = document.getElementById("close-nav");

    var mobileNav = document.getElementById("mobile-nav");
    if (closeIcon) {
        closeIcon.addEventListener("click", () => {
            if (mobileNav) {
                mobileNav.classList.remove("open");
                mobileNav.classList.add("close");
            }
        })
    }
}

function initHamburger() {
    closeNav();
    openNav();

}


function activeNav() {
    var currentPage = document.querySelector("body");
    var navLinks = document.querySelectorAll("#main-nav > a");
    if (currentPage.getAttribute("id") == "home") {
            addClass(navLinks[0], "active");
    } else if (currentPage.getAttribute("id") =="destination") {
            addClass(navLinks[1], "active");
    } else if (currentPage.getAttribute("id") == "crew") {
            addClass(navLinks[2], "active");
    } else {
            addClass(navLinks[3], "active");
    }


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
        });
    }
}



