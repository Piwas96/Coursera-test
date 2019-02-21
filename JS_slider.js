var i = 0;
var imagen = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5')
];

function ver_imagen(){   
    for(i=0;i<6;i++){
        if(i>=5){
            i = 0;
        }
        else{
            imagen[i].style.display = "inline-block";
        }
        setTimeout("ver_imagen()", 2000);
    }
}

ver_imagen();