import { gsap, Sine } from 'gsap'

export default function useAnimation() {
  const basicTextFadeIn = (el: HTMLElement | Element) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: Sine.easeInOut,
      scrollTrigger: {
        trigger: el,
        start: 'top-=200px center',
      },
    })
  }

  const slideFromLeft = (
    el: HTMLElement | Element,
    index: number,
    time: number,
  ) => {
    gsap.from(el, {
      x: -100,
      opacity: 0,
      duration: time,
      delay: index * time,
      ease: Sine.easeOut,
      scrollTrigger: {
        start: 'top-=200px center',
        trigger: el,
      },
    })
  }

  const fadeInFromTop = (
    el: HTMLElement | Element,
    index: number,
    time: number,
    triggerEl: string,
  ) => {
    gsap.from(el, {
      y: -100,
      opacity: 0,
      duration: time,
      delay: index * time,
      ease: Sine.easeOut,
      scrollTrigger: {
        start: 'top-=200px center',
        trigger: triggerEl,
      },
    })
  }

  return {
    basicTextFadeIn,
    slideFromLeft,
    fadeInFromTop,
  }
}
