const switchInput = document.getElementById('check-tamanho');
const inputToToggle = document.getElementById('tamanho');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        inputToToggle.style.display = 'block';
    } else {
        inputToToggle.style.display = 'none';
    }
});



$(document).ready(function() {
    $('cores').multiselect();
});