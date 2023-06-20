let pointer=document.getElementById("pointer");
window.onmousemove = (e) => {
    pointer.style.top=e.clientY;
    pointer.style.left=e.clientX;
}