const carouselTrack = document.querySelector(`.carousel__track`)
const caruselPrevBtn = document.querySelector(`.carousel__nav-btn--left`)
const caruselNextBtn = document.querySelector(`.carousel__nav-btn--right`)
let carouselWidth = document.querySelector(`.carousel__container`).offsetWidth
let index = 0

const handleCarouselPrevBtn = () => {
	caruselNextBtn.classList.add(`show`)
	index--
	if (index == 0) {
		caruselPrevBtn.classList.remove('show')
	}
	carouselTrack.style.transform = `translateX(-${index * (carouselWidth - 20)}px)`
}
const handleCarouselNextBtn = () => {
	caruselPrevBtn.classList.add(`show`)
	index++
	carouselTrack.style.transform = `translateX(-${index * (carouselWidth - 20)}px)`
	if (carouselTrack.offsetWidth - index * (carouselWidth - 20) < carouselWidth) {
		caruselNextBtn.classList.remove(`show`)
	}
}
window.addEventListener(`resize`, () => {
	carouselWidth = document.querySelector(`.carousel__container`).offsetWidth
})
caruselPrevBtn.addEventListener(`click`, handleCarouselPrevBtn)
caruselNextBtn.addEventListener(`click`, handleCarouselNextBtn)
