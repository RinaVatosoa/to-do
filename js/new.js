
function add(){
    let text = document.getElementById('in').value;
    let list = document.getElementById('list');

    list.innerHTML += text;
    console.log(text)
}