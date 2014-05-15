function mhEditWindow(){
var e=document.createElement('div');
e.innerText = " ";
e.id ='mhWin';
e.style.top="60px";
e.style.left = "32px";
e.style.width= "80%";
e.style.height= "90%";
e.style.position = "absolute";
e.style.visibility = "visible";
document.body.appendChild(e);
var a = ace.edit('mhWin');
a.setTheme("ace/theme/cobalt");

myurl = url.replace("source", "original");

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        alert(xhr.responseText);
    }
};
xhr.open('GET', myurl , true);
xhr.send();
a.setValue(xhr.responseText ,0);
};

