// console.log('It works');

function sendId() {
    let checkboxes = document.getElementsByName('selectedbox');
    // console.log(id);
    let temp="";
    let first = true;
    for (var i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            if(first){
                temp = "id="+checkboxes[i].value;
                first = false;
            }else{
                temp += "&id="+checkboxes[i].value;
            }
        }
    }
    console.log(temp);
    window.location.href = "/delete-task/?"+temp;
}