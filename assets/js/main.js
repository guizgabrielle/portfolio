/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ================================================================= //

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

let header = document.querySelector("header");
let menu = document.querySelector("#menu--icon");
let navbar = document.querySelector(".nav-list");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification-active");
        });
        target.classList.add("qualification-active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification-active");
        });
        tab.classList.add("qualification-active");
    });
});


const sectionsElements = document.querySelectorAll("section");
const halfWindow = window.innerHeight * 0.5;

function animationOnScroll() {
    sectionsElements.forEach((section) => {
        const sectionOnTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionOnTop - halfWindow < 0;
        isSectionVisible
            ? section.classList.add("animation-scroll")
            : section.classList.remove("animation-scroll");
    });
}

window.addEventListener("scroll", animationOnScroll);


/* ============================================================== */

