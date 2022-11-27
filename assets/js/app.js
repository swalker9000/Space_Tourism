window.onload = function () {
    destinationSelection();
}

var destinationSelection;

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

 postData('../../data.json', { answer: 42 })
    .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });


function removeClass(selector, name) {
    selector.removeAttribute(name);
}

function addClass(selector, name) {
    selector.setAttribute("class", name);

}


function destinationSelection() {
    var destinationOptions = document.querySelectorAll(".destination-details__facts-choices > li");
    for (let i = 0; i < destinationOptions.length; i++) {
        destinationOptions[i].addEventListener("click", () => {
            destinationSelection = destinationOptions[i].getAttribute("id");
            var activeClass = document.querySelector(".destination-details__facts-choices > li.active");
            removeClass(activeClass, "class");
            addClass(destinationOptions[i], "active");    
            console.log(destinationSelection);        
        });
    }
}



