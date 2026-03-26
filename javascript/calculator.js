const calcbtn = document.getElementById('calculate');
const resultElem = document.getElementById('result');

const madal = document.getElementById('madal');
const mblur = document.getElementById('madal-blur');

const closebtn = document.getElementById('closebtn');



calcbtn.addEventListener('click', calculate);
closebtn.addEventListener('click', hideMadal);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideMadal();
    }
})



function calculate() {
    const weight = Number(document.getElementById('weight-output').value);
    const reps = Number(document.getElementById('reps-output').value);

    const result = (epley(weight, reps) + brzycki(weight, reps) + lander(weight, reps)) / 3;

    console.log(weight);
    console.log(reps);

    resultElem.textContent = `${Number(result).toFixed(1)}kg`
    showMadal();
}



function showMadal() {
    madal.classList.add('show');
    mblur.classList.add('show');

    console.log(mblur);
}

function hideMadal() {
    madal.classList.remove('show');
    mblur.classList.remove('show');
}





function epley(weight, reps) {
    return weight * (1 + 0.0333 * reps);
}

function brzycki(weight, reps) {
    return weight * (36 / (37 - reps));
}

function lander(weight, reps) {
    return (100 * weight) / (101.3 - 2.67123 * reps);
}