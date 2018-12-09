(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var refreshRem = function () {
    var clientWidth = win.innerWidth|| doc.documentElement.clientWidth|| doc.body.clientWidth;
    console.log(clientWidth)
    if (!clientWidth) return;
    var fz;
    if(clientWidth>750){
      clientWidth=750
    }
    var width = clientWidth;
    fz = width / 7.5;
    docEl.style.fontSize = fz + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();

})(document, window);