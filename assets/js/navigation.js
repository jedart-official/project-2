function headerNav({ menuList, type = "computer" }) {
    menuList = document.getElementById(menuList).children;
    menuList = Array.from(menuList);
    menuList.forEach((menuItem) => {
        headerScroll({ item: menuItem, type: type });
    });
}

function headerScroll({ item, type }) {
    item.addEventListener("click", () => {
        let scrollName = item.dataset.scroll;
        let scrollObject = document.getElementById(scrollName);
        scrollObject.scrollIntoView({ behavior: "smooth", block: "center" });
        if (type == "mobile") {
            console.log(type);
            let mobileHeader = document.querySelector(".header__mobile");
            mobileHeader.classList.remove("show");
            let body = document.getElementsByTagName("body")[0];
            body.classList.remove("lock");
        }
    });
}

headerNav({ menuList: "header__menu" });
headerNav({ menuList: "header__menu__mobile", type: "mobile" });
