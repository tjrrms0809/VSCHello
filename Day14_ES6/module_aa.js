
function show() {
    //document.write("show!!");
    const div = document.createElement('div');
    div.textContent = "show!!";
    document.body.appendChild(div);
}

export default show;

// ## export default는  하나의 문서에 1개만 사용 가능함.  ##
// function show2() {
//     //document.write("show!!");
//     const div = document.createElement('div');
//     div.textContent = "show2!!";
//     document.body.appendChild(div);
// }
// export default show2;// ERROR : // ## export default는  하나의 문서에 1개만 사용 가능함.  ##


// 여러개의 export하려면....
//## default 없는 함수 export [ 구조분해할당으로 import 받아야만 함 ] ## 
// default 없이 사용하려면 반드시 함수나 변수를 만들때 export를 명시 해야함.
export function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}
//export addTextToBody; //ERROR


// 변수나 상수도 export 가능함 ##
export const num=100;
export let age= "변수입니다.";


