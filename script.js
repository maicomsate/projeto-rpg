document.addEventListener("DOMContentLoaded", () => {
    const fields = document.querySelectorAll(".form-field");
    const inputs = document.querySelectorAll(".form-field input");

    const checkInput = (input, nextField) => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                nextField.classList.add("active");
            } else {
                nextField.classList.remove("active");
            }
        });
    };

    inputs.forEach((input, index) => {
        if (index < inputs.length - 1) {
            checkInput(input, fields[index + 1]);
        }
    });

    // Initialize the first field as active
    fields[0].classList.add("active");
});
