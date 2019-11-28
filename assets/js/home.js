
function sendId() {
    let checkboxes = document.getElementsByName('selectedbox');
    let temp="id=";
    for (var i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            // temp += "&id="+checkboxes[i].value;
            temp += checkboxes[i].value+"&id=";
             
        }
    }
    window.location.href = "/delete-task/?"+temp;
}