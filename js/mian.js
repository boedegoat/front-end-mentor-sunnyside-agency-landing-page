const hamburgerBtn = document.querySelector('.hamburger-btn')
const navLinks = document.querySelector('.nav .links')

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show')
})

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && e.target !== hamburgerBtn) {
    navLinks.classList.remove('show')
  }
})
