// import Lenis from '@studio-freight/lenis'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'

// WINDOW RESIZE LISTENER
let isDesktop = window.matchMedia('(min-width: 768px)').matches
window.addEventListener('resize', () => {
  isDesktop = window.matchMedia('(min-width: 768px)').matches
})
// ===============

// gsap.registerPlugin(ScrollTrigger) // GSAP SETUP
// // LENIS SETUP
// const lenis = new Lenis()
// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000)
// })

// ===============
console.log($('body'), isDesktop)
