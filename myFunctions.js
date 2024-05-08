

document.querySelectorAll('.show-details-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Get the next row of the checkbox row whose state changed
        var detailsRow = checkbox.closest('tr').nextElementSibling;

// Change the display state of the row containing the details
        if (checkbox.checked) {
            detailsRow.style.display = 'table-row'; 
        } else {
            detailsRow.style.display = 'none';
        }
    });
});






//When you select the property and click Continue, the form appears


function toggleDetails(checkbox) {
    let detailsRow = checkbox.closest('tr').nextElementSibling;
    detailsRow.style.display = checkbox.checked ? 'table-row' : 'none';
}

function showForm() {
    let selectedProperty = document.querySelector('input[name="radio"]:checked');
    if (selectedProperty) {
        document.getElementById('formContainer').style.display = 'block';
    } else {
        alert('يجب اختيار احدى العقارات ');
    }
}

function validateForm() {
    
    return true;
}