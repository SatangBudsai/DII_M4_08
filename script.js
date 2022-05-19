var newText = 'OK';
document.getElementById('ok').innerHTML = newText;
document.getElementById('no').innerHTML = '<b><i>NO</i></b>';
document.getElementById('ok').addEventListener('click',function(e){
    // alert('ok is clicked');
    console.log(e);
});
document.getElementById('no').addEventListener('mousemove',function(e){
    // console.log('x : '+e.screenX+' y : '+e.screenY);
});

// console x and y all
let elems = document.getElementsByClassName('flex-item');
console.log(elems);
    for(let elem of elems){
        // elem.addEventListener('mousemove',function(e){
        // console.log('x : '+e.screenX+' y : '+e.screenY);
        // });
        // console x and y all
        elem.addEventListener('click',function(e){
        // alert(elem.innerText);

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

var borderTick = 10;
document.getElementById('cancel').style.border = `${borderTick}px solid white` ;

// let margin =20;
// document.getElementById('ok').addEventListener('click',function(e){
//     margin += 5;
//     var marginSize =`20px ${margin}px`;
//     document.getElementById('cancel').style.margin =marginSize;
//     document.getElementById('no').style.margin =marginSize;
// });


let showText = ['ok','วิชานี้','ง่าย','จริง ๆ นะจ๊ะ'];
let showIndex = 0;
document.getElementById('no').addEventListener('dblclick',function(e){
    showIndex++;
    if(showIndex >= showText.length){
        showIndex =0;
    }
    console.log(`show index = ${showIndex}`)
    const okButton = document.getElementById('ok')
    okButton.innerText = showText[showIndex]
})

let output =''
let outputElements = document.getElementById('output')

function addText (input){
    output += input+'\n';
    outputElements.innerText=output;
}

document.getElementById('container').onclick = function(){
    output = '';
    outputElements.innerText=output;
}

let keyword = {
    'OK' : 'Ok',
    'cancel' : 'Cancel',
    'NO' : 'No',
}
for(let elem of elems){
    elem.addEventListener('click',function(e){
        e.stopPropagation();
        addText(keyword[elem.innerText])
    });
}

document.getElementById('ok').addEventListener('click',addNode)

let outputContainer = document.getElementById('output-container')
let counter =0;
function addNode(){
        newNode = document.createElement('div');
        newNode.classList.add('flex-item')
        newNode.setAttribute('id',counter)
        newNode.innerText = counter;
        counter = counter+1;
        newNode.innerText = counter;
        outputContainer.appendChild(newNode)
}