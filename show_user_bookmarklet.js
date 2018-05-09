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

    var user_id = getSelectionText();

    if (user_id) {
        window.open('https://tom.lyft.net/users/' + user_id, '_blank');
    }

})()
