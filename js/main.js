function openFunc(){
    document.getElementById('container').style.cssText = 'display:none';
    document.getElementById('cont-menu-mob').style.cssText = 'display:block';
}

function hideFunc(){
    document.getElementById('container').style.cssText = 'display:block';
    document.getElementById('cont-menu-mob').style.cssText = 'display:none';
}


function checkMediaQuery() {
  if (window.innerWidth > 600) {
    hideFunc()
  }
}
window.addEventListener('resize', checkMediaQuery);
