javascript: (function() {

    function getSelectionText() {
        var text = '';
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        else if (document.selection && document.selection.type != 'Control') {
            text = document.selection.createRange().text;
        }
        return text;
    }

    var ride_id = getSelectionText();

    if (ride_id) {
        window.open('https://tom.lyft.net/routes/ride/' + ride_id, '_blank');
    }

})()
