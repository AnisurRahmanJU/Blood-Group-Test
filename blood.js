function updateBloodGroup() {
    const reagentA = document.getElementById('reagentA').value;
    const reagentB = document.getElementById('reagentB').value;
    const reagentD = document.getElementById('reagentD').value;

    const resultElement = document.getElementById('bloodGroupResult');

    let bloodGroup = '';

    // Determine the ABO blood group
    if (reagentA === 'egluation' && reagentB === 'normal') {
        bloodGroup = 'A';
    } else if (reagentB === 'egluation' && reagentA === 'normal') {
        bloodGroup = 'B';
    } else if (reagentA === 'egluation' && reagentB === 'egluation') {
        bloodGroup = 'AB';
    } else {
        bloodGroup = 'O';
    }

    // Determine the Rh factor
    if (reagentD === 'egluation') {
        bloodGroup += '(+ve)';
    } else {
        bloodGroup += '(-Neg)';
    }

    // Display the result
    resultElement.innerHTML = `<div class="red-circle">${bloodGroup}</div>`;
}

// Initialize with no display
function initializeBloodGroup() {
    // Set default values
    document.getElementById('reagentA').value = 'normal';
    document.getElementById('reagentB').value = 'normal';
    document.getElementById('reagentD').value = 'normal';

    // Initially hide the result
    document.getElementById('bloodGroupResult').innerHTML = '';
}
