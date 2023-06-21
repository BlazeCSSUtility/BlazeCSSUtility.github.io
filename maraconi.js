let pointer=document.getElementById("pointer");
window.onmousemove = (e) => {
    pointer.style.top=e.clientY;
    pointer.style.left=e.clientX;
}

let calc=document.getElementById("calculatorapp");
let wallpaper=document.getElementById("wallpaperapp");
let hoverable_elements=[calc, wallpaper];
for (let i=0; i<hoverable_elements.length; i++) {
    hoverable_elements[i].onmouseover = (e) => {
        pointer.setAttribute("src", "macpointer.png");
    }
    hoverable_elements[i].onmouseout = (e) => {
        pointer.setAttribute("src", "maccursorpointer.png");
    }
}

wallpaper.addEventListener("click", () => {
    
});