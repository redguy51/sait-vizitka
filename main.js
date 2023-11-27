const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}
menuBtn.addEventListener("click", toggleMenuVisibility);
function myImg() {
    let elem = document.getElementById('swagger');
    let style = getComputedStyle(elem);
    if (style.display === "none") {
        document.getElementById('swagger').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('swagger').style.display='none';
    }
}