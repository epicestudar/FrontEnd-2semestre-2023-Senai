const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider()
        if(currentSlide === slider.length - 1) {
            currentSlide = 0;
        }
        else {
            currentSlide++;
        }
        showSlider()
}

function prevSlider() {
    hideSlider()
        if(currentSlide === 0) {
            currentSlide = slider.length -1;
        }
        else {
            currentSlide--;
        }
        showSlider()
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

console.log(slider)