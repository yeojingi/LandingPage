/*document.body.onload = addElement;*/

function addElement() {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("환영합니다");
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}