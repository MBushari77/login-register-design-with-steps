$(document).ready(() => {
    $('#to2').click(() => {
        $('.step1').hide();
        $('.step2').fadeIn();
    });

    $('#to3').click(() => {
        $('.step2').hide();
        $('.step3').fadeIn();
    });

    // ----------------------
    $('#backTo1').click(() => {
        $('.step2').hide();
        $('.step1').fadeIn();
    });

    $('#backTo2').click(() => {
        $('.step3').hide();
        $('.step2').fadeIn();
    });
});