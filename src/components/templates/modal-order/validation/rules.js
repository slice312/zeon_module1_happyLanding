export const Rule = Object.freeze({
    required: (value) => !value ? "this field is required*" : "",

    atLeast: (num) => (value) => (value?.length < num)
        ? `should be at least ${num} symbols`
        : "",

    checkedAtLeastOnce: (boxes) =>
        !Array.from(boxes).some(box => box.checked)
            ? "this field is required*"
            : "",

    email: (email) => {
        return !emailRegex.test(email)
            ? "email"
            : "";
    }
});



/* eslint-disable */
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
/* eslint-enable */