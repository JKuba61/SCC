const error = document.querySelector(`.contact__error`)
const email = document.querySelector(`.contact__input`)
const msg = document.querySelector(`.contact__msg`)
const submitBtn = document.querySelector(`.contact__send-btn`)

const handleContactForm = e => {
	if (!email.value || !msg.value) {
		e.preventDefault()
		error.classList.add(`show`)
	} else {
		error.classList.remove(`show`)
	}
}
submitBtn.addEventListener(`click`, handleContactForm)
