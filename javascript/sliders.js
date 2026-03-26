const sliders = document.querySelectorAll('.slider');


sliders.forEach(slider => {
    slider.addEventListener('input', handleChange);
})

function handleChange(event) {
    event.target.parentNode.style.setProperty(
        '--value',
        event.target.value
    );
    event.target.nextElementSibling.value = Number(event.target.value).toFixed(1);
}