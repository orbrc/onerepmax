
function initSlider(sliderContainer) {
    const rangeInput = sliderContainer.querySelector('.slider-range');
    const numberInput = sliderContainer.querySelector('.slider-output');

    if (!rangeInput || !numberInput)
        return;

    const sync = (value) => {
        rangeInput.value = value;
        numberInput.value = value;
        sliderContainer.style.setProperty('--value', value);
    }

    rangeInput.addEventListener('input', (e) => {
        sync(e.target.value);
        console.log(e.target.value + " sync")
    });

    numberInput.addEventListener('input', (e) => {
        let newValue = parseInt(e.target.value, 10);

        if (isNaN(newValue)) newValue = e.target.min;
        newValue = Math.min(rangeInput.max, Math.max(rangeInput.min, newValue));
        sync(newValue);

        console.log("sync " + newValue);
    });

    sync(rangeInput.value);
}

document.querySelectorAll('.slider').forEach(initSlider);