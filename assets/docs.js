const asideDrawer = document.querySelector("#aside-drawer");
const closeDrawerBtn = document.querySelector("#drawer-close-icon");
const hamburgerBtn = document.querySelector("#hamburger-btn");

hamburgerBtn.addEventListener(() => {
    asideDrawer.classList.add("aside-shown");
})

closeDrawerBtn.addEventListener(() => {
    asideDrawer.classList.remove("aside-shown");
})
