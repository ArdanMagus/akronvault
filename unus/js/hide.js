var head = document.getElementsByTagName('head')[0].innerHTML;
function Switch(check, name) {
//    var checkBox = document.getElementById("myCheck");
    if (check == true){
        for (const elem of document.querySelectorAll(name)) {
    elem.style.display = 'block'; 
}
    }
    else {
        for (const elem of document.querySelectorAll(name)) {
    elem.style.display = 'none';
}
    }
    document.getElementsByTagName('head')[0].innerHTML = head;
    /*text.style.display = "block";*/
    /*text.style.display = "none";*/
}

function Myprint(o) {
            if (o == 'withinfo')
			{
				head += '<link href="../styles.css" rel="stylesheet" type="text/css">';
           }
           if (o == 'withoutinfo')
{
head += '<link href="../styles_hide.css" rel="stylesheet" type="text/css">';
}
           document.getElementsByTagName('head')[0].innerHTML = head;
}
