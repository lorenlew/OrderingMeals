function popUp(e) {
    e.preventDefault();

    $('#popUp').bPopup({
        easing: 'easeOutBack',
        speed: 800,
        transition: 'slideDown'
    });
}