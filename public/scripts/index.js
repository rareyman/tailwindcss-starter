// import 'alpinejs'
console.log('Hello World!')

// dark mode toggling
let darkMode = false
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
	localStorage.theme === 'dark' ||
	(!('theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.querySelector('html').classList.add('dark')
	darkMode = true
} else {
	document.querySelector('html').classList.remove('dark')
	darkMode = false
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// toggle button
let htmlElement = document.querySelector('html')
let btnDarkToggle = document.querySelector('#btnDarkToggle')
let btnDarkClear = document.querySelector('#btnDarkClear')

btnDarkToggle.onclick = function () {
	// console.log('clicked!')
	// console.log(btnToggle.classList)
	console.log(`darkmode ${darkMode}`)
	if (darkMode) {
		htmlElement.classList.add('dark')
		darkMode = false
		localStorage.theme = 'dark'
	} else {
		htmlElement.classList.remove('dark')
		darkMode = true
		localStorage.theme = 'light'
	}
}

// btnDarkClear.onclick = function () {}
