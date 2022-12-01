window.onload = function () {
    getInfo(0);
    technologySelection();
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
            window.onresize = function () {
                getInfo(technologyID);
            }
        });
    }
}



