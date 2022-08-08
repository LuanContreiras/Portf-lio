window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  backToTopButton()
  showNavOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
}

function backToTopButton() {
  if (scrollY > 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function changeTheme() {
  document.body.classList.toggle('change')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function enviarMensagem() {
  nameValidation()
  emailValidation()
  assuntoValidation()
  textValidation()
}

function nameValidation() {
  const inputNome = document.querySelector('#nameContact')
  if (inputNome.value == '') {
    inputNome.style.borderColor = 'red'
  } else {
    inputNome.style.borderColor = 'initial'
  }
}

function emailValidation() {
  const inputEmail = document.querySelector('#emailContact')
  if (inputEmail.value == '') {
    inputEmail.style.borderColor = 'red'
  } else {
    inputEmail.style.borderColor = 'initial'
  }
}

function assuntoValidation() {
  const inputAssunto = document.querySelector('#assuntoContact')
  if (inputAssunto.value == '') {
    inputAssunto.style.borderColor = 'red'
  } else {
    inputAssunto.style.borderColor = 'initial'
  }
}

function textValidation() {
  const inputText = document.querySelector('#areaTextContact')
  if (inputText.value == '') {
    inputText.style.borderColor = 'red'
  } else {
    inputText.style.borderColor = 'initial'
  }
}

ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1000
}).reveal(`
  #home,
  #about header,
  #skills header,
  #experience header,
  #contato header
`)

ScrollReveal({
  delay: 300
}).reveal(`
  #home img,
  #about img,
  #skills .content,
  #experience .cards,
  #contato .content
`)

ScrollReveal({
  delay: 600
}).reveal(`
  #home .button,
  #about p,
  #about a,
  #contato .infos
`)
