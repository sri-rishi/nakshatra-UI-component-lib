const asideDrawer = document.getElementById("aside-drawer");
const closeDrawerBtn = document.getElementById("drawer-close-icon");
const hamburgerBtn = document.getElementById("hamburger-btn");

hamburgerBtn.addEventListener(() => {
    asideDrawer.classList.toggle("aside-shown");
})

closeDrawerBtn.addEventListener(() => {
    asideDrawer.classList.remove("aside-shown");
})
