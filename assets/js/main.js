/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }

}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })

        target.classList.add('qualification_active')

        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')

    })


})



/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })


}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80){
        nav.classList.add('scroll-header'); 
    }else{
        nav.classList.remove('scroll-header')
    }


}

window.addEventListener('scroll', scrollHeader)



/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})