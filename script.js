const primaryNav = document.querySelector(".primary-navigation");
const mobToggle = document.querySelector(".mobile-nav-toggle");
const links = document.querySelectorAll("li");

mobToggle.addEventListener("click", () => {

    document.body.classList.toggle('no-scroll'); // disable the scroll bar

    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        mobToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        mobToggle.setAttribute("aria-expanded", false);
    }
})


links.forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.setAttribute("data-visible", false);
        mobToggle.setAttribute("aria-expanded", false);

        document.body.classList.remove('no-scroll'); // Enables the Scroll bar
    })
})


//** Adding bg-color and box-shadow to nav bar when Scrolled....

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav');
    var scrollTrigger = 100; // The scroll distance in pixels

    if (window.scrollY > scrollTrigger) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//** Adding bg-color & box-shadow to nav bar when scrolled */



//** Current page link is highlighted..........

const navItems = document.querySelectorAll('.primary-navigation li a');

// Get the current URL
const currentUrl = window.location.href;

navItems.forEach(item => {
    // Check if the item's href matches the current URL
    if (item.href === currentUrl) {
        item.classList.add('active');
    }
});

//** Current page link is highlighted */



//** When the user scrolls down 20px from the top of the document, show the moveTop button
// * and go to top of the page when clicked moverTop btn with animation using lil CSS

var moveTopButton = document.getElementById("movetop");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        moveTopButton.style.display = "block";
    } else {
        moveTopButton.style.display = "none";
    }
};

moveTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



//** other way to go to top when click on movetop button without smooth animation

// const moveTopButton = document.getElementById("movetop");

// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         moveTopButton.style.display = "block";
//     } else {
//         moveTopButton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document

// moveTopButton.addEventListener("click", () => {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, Opera
// })


//** go to top when click on movetop button without smooth animation */





//** Search functionality for the nav search box

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-box');
    const searchText = document.querySelector('.search-box input[type="search"]');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from submitting in the traditional way
        let query = searchText.value.trim();
        if (query) {
            removeHighlights(document.body); // Clear previous highlights
            highlightText(document.body, query);
        }
    });
});

function highlightText(node, text) {
    if (node.nodeType === 3) { // Node type 3 is a text node
        const matchedText = node.nodeValue.match(new RegExp(text, 'gi'));
        if (matchedText) {
            const highlightedHTML = node.nodeValue.replace(new RegExp(text, 'gi'), `<mark>$&</mark>`);
            const wrapper = document.createElement('span');
            wrapper.innerHTML = highlightedHTML;
            node.parentNode.replaceChild(wrapper, node);
        }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') { // Node type 1 is an element
        Array.from(node.childNodes).forEach(child => highlightText(child, text));
    }
}

function removeHighlights(node) {
    if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') { // Node type 1 is an element
        if (node.tagName === 'MARK') {
            const parent = node.parentNode;
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            parent.removeChild(node);
        } else {
            Array.from(node.childNodes).forEach(child => removeHighlights(child));
        }
    }
}


//** Other easier and simpler way but with some limitation
//** like - Complexity with HTML Content, Scalability, Risk of Breaking HTML Structure

// document.addEventListener('DOMContentLoaded', function () {
//     const searchForm = document.querySelector('.search-box');
//     const searchText = document.querySelector('.search-box input[type="search"]');

//     searchForm.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevents the form from submitting in the traditional way
//         removeHighlights(); // Remove previous highlights
//         let query = searchText.value.trim(); // Gets the text entered by the user
//         if(query) {
//             searchAndHighlight(query);
//         }
//     });
// });

// function searchAndHighlight(text) {
//     const bodyText = document.body.innerHTML;
//     const searchRegex = new RegExp(text, 'gi'); // 'g' for global search, 'i' for case-insensitive
//     const highlights = bodyText.replace(searchRegex, `<mark>${text}</mark>`); // Wrap found text in <mark> tag
//     document.body.innerHTML = highlights;
// }

// function removeHighlights() {
//     const bodyText = document.body.innerHTML;
//     document.body.innerHTML = bodyText.replace(/<mark>(.*?)<\/mark>/gi, '$1'); // Remove <mark> tags
// }



//** Search functionality for the nav search box */





//** Dark theme toggle

const toggleIcon = document.querySelector(".dark-mode-toggle i");
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun'); // Change to sun icon
}

toggleIcon.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');

    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun'); // Change to sun icon
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
});

//** Dark theme toggle */