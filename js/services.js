const headers = document.querySelectorAll(".faq-page h2");

headers.forEach(heading => {
    heading.addEventListener("click", () => {
        // Get the next sibling of the clicked header, which should be the corresponding p element
        const content = heading.nextElementSibling;
        const icon = heading.querySelector('i'); // Get the <i> tag inside the header

        // Toggle the display of the specific p element
        if (content.style.display === "none") {
            content.style.display = "block";
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            content.style.display = "none";
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});


//Other way to doing this with a smooth animation

// const headers = document.querySelectorAll(".faq-page h2");

// headers.forEach(heading => {
//     heading.addEventListener("click", () => {
//         const content = heading.nextElementSibling;

//         // Toggle a class that controls the appearance
//         content.classList.toggle('active');
//     });
// });



