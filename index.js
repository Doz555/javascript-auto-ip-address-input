//code for auto ip input made by Doz555
const ipInputFields = document.querySelectorAll('.ip-input-field');

ipInputFields.forEach((inputField, index) => {
  inputField.addEventListener('keydown', (event) => {
    const input = event.target;
    const value = input.value.trim();

    // Prevent entering more than two digits in the last input field
    if (index === 3 && (value.length >= 2 || event.key === '.')) {
      event.preventDefault();
    }

    // Handle digit input
    if (!isNaN(event.key) && value.length === 2 && event.key !== '.') {
      input.value = value + event.key;

      // Move to the next input field
      if (index < ipInputFields.length - 1) {
        ipInputFields[index + 1].focus();
        ipInputFields[index + 1].value = '';
        event.preventDefault();
      }
    }
    // Handle period (.) input
    else if (event.key === '.' && value.length > 0) {
      // Move to the next input field
      if (index < ipInputFields.length - 1) {
        ipInputFields[index + 1].focus();
        ipInputFields[index + 1].value = '';
        event.preventDefault();
      }
    }
    // Handle period (.) input for empty input field
    else if (event.key === '.' && value.length === 0) {
      input.value = '0';

      // Move to the next input field
      if (index < ipInputFields.length - 1) {
        ipInputFields[index + 1].focus();
        ipInputFields[index + 1].value = '';
        event.preventDefault();
      }
    }
    // Handle invalid input
    else if (value !== '' && (isNaN(value) || value < 0 || value > 255)) {
      input.value = '';
    }
  });

  // Clear input value on click
  inputField.addEventListener('click', (event) => {
    const input = event.target;
    input.value = '';
  });

  // Set input value to '0' on blur if empty
  inputField.addEventListener('blur', (event) => {
    const input = event.target;
    const value = input.value.trim();

    if (value === '') {
      input.value = '0';
    }
  });
});
