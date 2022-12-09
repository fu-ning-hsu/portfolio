const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// current page
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// submit form

// const userName = document.getElementById('user-name').value
// const userEmail = document.getElementById('user-email').value
// const userText = document.getElementById('user-text').value
// const formBtn = document.getElementById('form-btn')

// formBtn.addEventListener('click', () => {
//     window.alert("thanks")
//         userName = ''
//         userEmail = ''
//         userText = ''
//         alert('thank you')
// })


// scroll revea animation
const sr = ScrollReveal({
    origin: 'top',
    ditance: '80px',
    duration: 2000,
    reset: true
})

// scroll home
sr.reveal('.home__title', {})
sr.reveal('.home__button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

// scroll about
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

// scroll work
sr.reveal('.work__img', {interval: 200})


// scroll contact
sr.reveal('.contact__input', {interval: 200})

