const text = document.querySelector('.lorem'),
	btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
	// text.style.height = text.scrollHeight+ "px";
	console.log(text.scrollTop)
})

// console.log(text.scrollHeigh)
// console.log(window.getComputedStyle(text))
// console.log(text.getBoundingClientRect())
// console.log(document.documentElement.clientHeight)
// window.scrollTo(0, 500)// window.scrollTo(x, y)
// window.scrollBy(0, 500)//window.scrollBy(x, y)