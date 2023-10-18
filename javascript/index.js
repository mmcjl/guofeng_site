
var eprev = document.querySelector('.prev')
var enext = document.querySelector('.next')
var left = 0;
var timer;
run();
function run(){
    if(left <= -5500){
        left = 0;
    }
    imglist.style.marginLeft = left+ 'px';
    var n = (left % 1100 ==0) ? n = 1800 : n =10;
    left -= 10;
    timer = setTimeout(run,n);
}
function imgchange(n){
    let lt = -(n * 1100);
    imglist.style.marginLeft = lt + 'px';
    left = lt;
}
eprev.onclick = function(){
    let prevgo = Math.floor(-left / 1100) - 1;
    if(prevgo == -1){
        prevgo = 4;
    }
    imgchange(prevgo);
    
}
enext.onclick = function(){
    let nextgo = Math.floor(-left / 1100) + 1;
    if(nextgo == 5){
        nextgo = 0;
    }
    imgchange(nextgo);
}