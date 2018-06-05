window.onload = function () {
    navBarEffect();
    iconEffect();    
}
var openModal = function(text){
    var body = document.getElementsByTagName("body");
    var screenModal = document.createElement('div');
    var containerModal = document.createElement('div');
    var close = document.createElement('div');
    var icon  = document.createElement('i');
    icon.setAttribute("class", "fas fa-times");
    close.setAttribute("class","icon-container")
    screenModal.setAttribute("class","modalFather");
    containerModal.setAttribute("class","modalContainer");
    screenModal.textContent = text;
    close.appendChild(icon);
    screenModal.classList.add('modalFather-active');
    screenModal.appendChild(close);
    body[0].appendChild(screenModal);
    close.addEventListener('click',()=>{
        screenModal.classList.remove('modalFather-active');
    })    
}
var navBarEffect = function () {
    var links = document.getElementsByClassName('item-link');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', e => {
            var tarJet = e.target;
            var text = e.target.textContent;
            for (var j = 0; j < links.length; j++) {
                if (text == links[j].textContent) {
                    tarJet.classList.add('active');
                }
                else {
                    links[j].classList.remove('active');
                }
            }
        })
    }
}
var iconEffect = function () {
    var square = document.getElementsByClassName('square');
    var iconBox = document.getElementsByClassName('icon')[0];
    var boEffect = true;
    iconBox.addEventListener('mouseenter', e => {
        var q = 0;
        var a = 0;
        var numbersSave = [];
        var time = setInterval(function () {
            var aux = 0;
            var index = Math.floor(Math.random() * 25) + 0;
            var Movimiento = Math.floor(Math.random() * 4) + 1;
            square[index].classList.add('box-active1');
            // square[index].classList.add('move-box'+Movimiento);
            square[index].textContent = q;
            if (q == 2) {
                for (var per = 0; per < square.length; per++) {
                    if ((square[per].hasAttribute("class", "box-active"))) {
                        if (square[per].textContent.length > 0) {
                            numbersSave.push(per);
                        }
                    }
                }
                clearInterval(time);
            }
            q++;
            // square[index].setAttribute("id",'ox'+index);
            // console.log(index+': '+ square[index].offsetLeft+'-'+square[index].offsetTop);
            // document.getElementById('ox'+index).style.top = '100px';
            // square[index].removeAttribute("id");
        }, 10);
    })
    for(var i = 0; i<square.length;i++){
        square[i].addEventListener('click',e=>{
            if(e.target.textContent.length>0){
                openModal(e.target.textContent);
            }
        })
    }
    iconBox.addEventListener('mouseleave', f => {
        for (var i = 0; i < square.length; i++) {
            square[i].textContent = "";
            square[i].classList.remove('box-active1');
            square[i].classList.remove('move-box1');
            square[i].classList.remove('move-box2');
            square[i].classList.remove('move-box3');
            square[i].classList.remove('move-box4');

        }
    });
}
