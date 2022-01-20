// hamburger menu section 
const navEdge = () => {
    const burger = document.querySelector('.burger');
    const navLink = document.querySelector('.nav-link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('change')
        navLink.classList.toggle('nav-change');
    })
}

navEdge();