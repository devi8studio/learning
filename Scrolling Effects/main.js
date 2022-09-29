const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const nav = document.querySelector('.navigation')
const section1 = document.querySelector('#section1');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px'
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})

const section1Options = {
  rootMargin: '-200px 0px 0px 0px'
}

const section1Observer = new IntersectionObserver(function(entries, section1Observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('has-scrolled')
    } else {
      nav.classList.remove('has-scrolled')
    }
  })
}, section1Options)

section1Observer.observe(section1)