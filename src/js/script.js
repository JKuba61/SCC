//nav
const burgerBtn = document.querySelector(`.burger-btn`)
const mobileNav = document.querySelector(`.nav--mobile__dropdown`)
//footer year
const footerYear = document.querySelector('.footer__year')
const ScrollUpBtn = document.querySelector(`.ScrollUpBtn`)
//cookies fix?
document.cookie = 'SameSite=None; Secure'

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

window.addEventListener(`scroll`, () => {
	if (window.scrollY >= 300) {
		ScrollUpBtn.classList.add('show__animation')
	} else {
		ScrollUpBtn.classList.remove('show__animation')
	}
})

burgerBtn.addEventListener(`click`, () => {
	mobileNav.classList.toggle(`show`)
})
handleCurrentYear()
