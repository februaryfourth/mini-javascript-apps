let print = function(msg) {
    document.getElementById('output').innerHTML = "The length of your word is is " + msg;
}
document.getElementById('btn').onclick = function(event) {
    print(document.getElementById('str').value.length);
}