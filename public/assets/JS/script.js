const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);


const home = document.getElementById('point');
const nav = document.getElementById('navbar');
const text = document.getElementsByClassName('navbar-items');
const homeHeight = home.clientHeight;

window.addEventListener('scroll', function () {
    const scrollPosition = this.scrollY;
    if (scrollPosition > homeHeight) {
        nav.style.backgroundColor = '#0C356A';
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});