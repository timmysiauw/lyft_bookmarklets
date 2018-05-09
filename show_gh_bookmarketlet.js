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

    var gh = getSelectionText();

    if (gh) {
        window.open('http://geohash.gofreerange.com/' + gh, '_blank');
    }

})()
