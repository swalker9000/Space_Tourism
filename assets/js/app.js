window.onload = function () {
    console.log("loaded");
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
            console.log('clicked');
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
            console.log("clicked");
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
