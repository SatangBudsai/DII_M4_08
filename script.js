var newText = 'new Text';
document.getElementById('ok').innerHTML = newText;
document.getElementById('no').innerHTML = '<b><i>Satang</i></b>';
document.getElementById('ok').addEventListener('click',function(e){
    // alert('ok is clicked');
    console.log(e);
});
document.getElementById('no').addEventListener('mousemove',function(e){
    console.log('x : '+e.screenX+' y : '+e.screenY);
});

// console x and y all
let elems = document.getElementsByClassName('flex-item');
console.log(elems);
    for(let elem of elems){
        elem.addEventListener('mousemove',function(e){
        console.log('x : '+e.screenX+' y : '+e.screenY);
        });
        // console x and y all
        elem.addEventListener('click',function(e){
        alert(elem.innerText);

        });
}
document.getElementById('ok').addEventListener('click',function(e){
    let noElement = document.getElementById('no')
    if(noElement.classList.contains('toggleOn')){
        noElement.classList.replace('toggleOn','toggleOff')
    } else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff','toggleOn')
    }else {
        noElement.classList.add('toggleOn')
    }
})


