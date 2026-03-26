
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

    let lastValid = rangeInput.value;

    rangeInput.addEventListener('input', (e) => {
        sync(e.target.value);
        console.log(e.target.value + " sync")
    });

    const normalizeAndSync = (e) => {
        let newValue = parseInt(e.target.value, 10);

        if (isNaN(newValue)) newValue = lastValid;
        
        newValue = Math.min(rangeInput.max, Math.max(rangeInput.min, newValue));
        sync(newValue);

        console.log("sync " + newValue);
        lastValid = newValue;
    };

    numberInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            normalizeAndSync(e);
        }
    });

    sync(rangeInput.value);
}

document.querySelectorAll('.slider').forEach(initSlider);