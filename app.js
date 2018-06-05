window.onload = function () {
    navBarEffect();
    iconEffect();
    
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
        var numbersSave = [];
        var time = setInterval(function () {
            var index = Math.floor(Math.random() * 25) + 0;
            var Color = Math.floor(Math.random() * 1) + 1;
            square[index].classList.add('box-active' + Color);
            square[index].textContent = q;
            if (q == 25) {
                for (var per = 0; per < square.length; per++) {
                    if ((square[per].hasAttribute("class", "box-active"))) {
                        if (square[per].textContent.length > 0) {
                            numbersSave.push(per);
                        }
                    }

                }
                console.log(numbersSave.length);
                clearInterval(time);
            }
            q++;
        }, 10);
    })

    iconBox.addEventListener('mouseleave', f => {
        for (var i = 0; i < square.length; i++) {
            square[i].textContent = "";
            square[i].classList.remove('box-active1');
        }
    });
}