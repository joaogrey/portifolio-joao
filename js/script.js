const linkInternos = document.querySelectorAll('.js-menu li a[href^="#"]');
console.log(linkInternos);
function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
  

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

linkInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});