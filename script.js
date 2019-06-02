$(document).ready(function($) {
    $('form').submit(function() {
        if ($('.input').val() !== '') {
            var nuevaTarea = $('.input').val();
            var iable = $('<li>' + nuevaTarea + '</li>');
            iable.on('click', function() {
                $(this).remove(); 
            });
            $('ul').prepend(iable); 
            $('.input').val('');
            return false; 
        }
    });
    $('ul').sortable(); 
});