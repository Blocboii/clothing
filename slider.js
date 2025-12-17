function createSlider(mountId, imageSources) {


// ====== DOM CREATION ======


const mount = document.getElementById(mountId)


const sliderContainer = document.createElement('div')
sliderContainer.className = 'slider-container'


const imageWrapper = document.createElement('div')
imageWrapper.className = 'image-wrapper'


imageSources.forEach(src => {
const img = document.createElement('img')
img.className = 'slide'
img.src = src
imageWrapper.appendChild(img)
})


const prevBtn = document.createElement('button')
prevBtn.className = 'btn prev'
prevBtn.textContent = '❮'


const nextBtn = document.createElement('button')
nextBtn.className = 'btn next'
nextBtn.textContent = '❯'


sliderContainer.appendChild(imageWrapper)
sliderContainer.appendChild(prevBtn)
sliderContainer.appendChild(nextBtn)


mount.appendChild(sliderContainer)


// ====== SLIDER LOGIC ======


let currentIndex = 0


function getSlideWidth() {
return sliderContainer.clientWidth
}


function updateSlider() {
const offset = -currentIndex * getSlideWidth()
imageWrapper.style.transform = `translateX(${offset}px)`
}


function nextSlide() {
currentIndex = (currentIndex + 1) % imageSources.length
updateSlider()
}


function prevSlide() {
currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length
updateSlider()
}


nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)


window.addEventListener('resize', updateSlider)


updateSlider()
}

createSlider('slider-one', [
'./img/img1.jpg',
'./img/img3.jpg',
'./img/img2.jpg'
])

