const createCode = function () {
    let code = "";
    let codeLength = 4;
    let canvas=document.getElementById('canvasCode');
    let selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//���к�ѡ�����֤����ַ�

    for (let i = 0; i < codeLength; i++) {
        let charIndex = Math.floor(Math.random() * 36);
        code += selectChar[charIndex];
    }
    if (canvas) {
        let ctx=canvas.getContext('2d');
        ctx.fillStyle='#FFFFFF';
        ctx.fillRect(0,0,70,27);
        ctx.font="16px arial";
        let gradient=ctx.createLinearGradient(0,0,canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        ctx.strokeStyle=gradient;
        ctx.strokeText(code,5,20);
        return code;
    }
}
export {createCode}