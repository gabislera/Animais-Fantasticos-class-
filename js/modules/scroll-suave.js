export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href') // event.currentTarget = this
    const section = document.querySelector(href)
    // const topo = section.offsetTop

    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // })
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
