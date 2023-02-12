function headerNav({
    menuId,
    mobileMode = false,
    bodyClass = "lock",
    menuClass = "show",
}) {
    const menu = document.getElementById(menuId);
    if (!menu) {
        console.error(`Menu with id ${menuId} not found`);
        return;
    }
    menu.addEventListener("click", (event) => {
        const item = event.target.closest("li");
        if (item) {
            headerScroll({ item, mobileMode, bodyClass, menuClass });
        }
    });
}

function headerScroll({ item, mobileMode, bodyClass, menuClass }) {
    let scrollName = item.dataset.scroll;
    let scrollObject = document.getElementById(scrollName);
    scrollObject.scrollIntoView({ behavior: "smooth", block: "center" });
    if (mobileMode) {
        let mobileHeader = document.querySelector(".header__mobile");
        if (!mobileHeader) {
            console.error("Header mobile is not defined");
            return;
        }
        mobileHeader.classList.remove(menuClass);
        document.body.classList.remove(bodyClass);
    }
}

headerNav({ menuId: "header__menu" });
headerNav({ menuId: "header__menu__mobile", mobileMode: true });
