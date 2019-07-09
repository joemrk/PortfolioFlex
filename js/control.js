
$(function () {
    $('#info').on('click', function () {
        $('#info-content').toggleClass('info-open');
    });  
    
    $('.progress-bar').each(function(){
        let width = $(this).data('skill')
        $(this).css('width', width + '%')
    });
});