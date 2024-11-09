import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stateRadios = form.querySelectorAll('[name="state"]');

form.addEventListener('submit', event => {
    event.preventDefault(); 
    const delay = Number(delayInput.value);
    const radioValue = Array.from(stateRadios).find(radio => radio.checked)?.value;
    if (!delay || !radioValue) {
        iziToast.error({
            title: 'Error',
            message: 'Please provide both delay and state!',
            position: 'topRight',
        });
        return;
    }

    makePromise(radioValue, delay)
        .then((delay) => {
            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
        });
});

function makePromise(state, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}