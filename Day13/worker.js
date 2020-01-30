var n=0;
// while(true){
//     n++;
//     // document.getElementById('hh').innerHTML= n;
//     // worker에서는 UI변경을 못함. 메인스레드만 할 수 있음.

//     // worker사용자에게 출력하고자 하는 값을 전송
//     postMessage(n);
// }
// 위처럼 무한반복을 너무 빨리돌려버리면 그려낼 시간이 없어서 정상 동작이 안됨

function fff(){
    n++;
    postMessage(n);

    setTimeout(fff, 500); //0.5초 후에 fff()함수 호출해라!!
}

fff();