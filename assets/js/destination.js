window.onload = function () {
    getInfo(0);
    destinationSelection();
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


function setDestinationName(name) {
    var destinationName = document.getElementById("name");
    destinationName.innerHTML = name;
}

function setDestinationDescription(description) {
    var destinationDescription = document.getElementById("description");
    destinationDescription.innerHTML = description;
}

function setDestinationDistance(distance) {
    var destinationDistance = document.getElementById("distance");
    destinationDistance.innerHTML = distance;
}

function setDestinationTravel(travel) {
    var destinationTravel = document.getElementById("travel");
    destinationTravel.innerHTML = travel;
}

function setDestinationImage(image) {
    var destinationImage = document.getElementById("image");
    if(destinationImage) {
    destinationImage.setAttribute("src", image);
    }
}


async function getInfo(destinationID) {

    const requestURL = '../../data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const info = await response.json();

    setDestinationName(info.destinations[destinationID]['name']);
    setDestinationDescription(info.destinations[destinationID]['description']);
    setDestinationDistance(info.destinations[destinationID]['distance']);
    setDestinationTravel(info.destinations[destinationID]['travel']);
    setDestinationImage(info.destinations[destinationID]['images']['webp']);
}

function destinationSelection() {
    var destinationOptions = document.querySelectorAll(".destination-details__facts-choices > li");

    for (let i = 0; i < destinationOptions.length; i++) {
        destinationOptions[i].addEventListener("click", () => {
            destinationNumber= destinationOptions[i].getAttribute("id");
            var activeClass = document.querySelector(".destination-details__facts-choices > li.active");
            removeClass(activeClass, "class");
            addClass(destinationOptions[i], "active");
            getInfo(destinationNumber);
        });
    }
}



