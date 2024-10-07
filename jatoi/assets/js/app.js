// main text slide


window.onload = () => {
    const textSlide = document.querySelector(".text-slide");
    const typewriter = document.getElementById("type");

    textSlide.style.opacity = "1";
    textSlide.style.left = "100px";

    setInterval(() => {
        typewriter.style.opacity = "1";
    }, 1000);

    // shapes
    const shape1 = document.getElementById("shape1");
    const shape2 = document.getElementById("shape2");

    shape1.style.height = "711px";
    shape1.style.opacity = "1";
    shape2.style.height = "711px";
    shape2.style.opacity = "1";

    setTimeout(() => {

        shape1.style.height = "0px";
        shape1.style.opacity = "0";
        shape2.style.height = "0px";
        shape2.style.opacity = "0";
    }, 2000);


    // navbar borders
    const navbar = document.querySelector(".nb");
    const navCloseBtn = document.querySelector(".close-btn");
    const navShowBtn = document.querySelector(".nav-show");

    const navLinks = document.querySelector(".links");
    const navBorderTop = document.getElementById("top-b");
    const navBorderBottom = document.getElementById("bottom-b");

    navCloseBtn.addEventListener("click", () => {
        navbar.style.left = "-120px";
    });
    navShowBtn.addEventListener("click", () => {
        navbar.style.left = "0px";
    });
    navLinks.style.opacity = "1";
    navBorderTop.style.height = "50%";
    navBorderBottom.style.height = "50%";

    // --- social-icons
    const socialIcons = document.querySelector('.social-icons');
    const iconsTop = document.getElementById("icons-top");
    const iconsBottom = document.getElementById("icons-bottom");

    iconsTop.style.height = "100px";
    iconsBottom.style.height = "100px";
    socialIcons.style.opacity = "1";


}

// navbar
const linkIcons = document.querySelectorAll('.link-icn');

// Loop through each link icon
linkIcons.forEach(icon => {
    // Add mouseover event listener to each icon
    icon.addEventListener('mouseover', () => {
        const name = icon.nextElementSibling; // Get the corresponding name element
        name.style.bottom = '2px'; // Move the name up
        name.style.transition = 'bottom 0.3s'; // Smooth transition
    });

    // Add mouseout event listener to each icon
    icon.addEventListener('mouseout', () => {
        const name = icon.nextElementSibling; // Get the corresponding name element
        name.style.bottom = ''; // Reset to original style
    });
});


// Cv download

// Get the button element
const button = document.querySelector('.download-btn');
console.log(button)

// Add an event listener to the button
button.addEventListener('click', () => {
    // Create a new tab with the CV file
    const newTab = window.open('./assets/Kashif-Cv.pdf', '_blank');
    // Focus on the new tab
    newTab.focus();
});
