// console.log('It works');

function sendId() {
    let id = document.getElementById('task-id').value;
    window.location.href = "/delete-task/?id="+id;
}